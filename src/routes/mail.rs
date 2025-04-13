use axum::{
    extract,
    http::StatusCode,
    response::{IntoResponse, Response},
    Json,
};
use serde_json::json;
use tracing::{error, info};

use crate::models::mail::{EmailConfig, MailModel};
use crate::services::mail::send_email;

// Structure pour la réponse API
pub struct ApiResponse {
    status_code: StatusCode,
    body: Json<serde_json::Value>,
}

impl ApiResponse {
    fn success(message: &str) -> Self {
        ApiResponse {
            status_code: StatusCode::OK,
            body: Json(json!({ "status": "success", "message": message })),
        }
    }

    fn error(message: &str) -> Self {
        error!("Erreur d'envoi d'email: {}", message);

        ApiResponse {
            status_code: StatusCode::INTERNAL_SERVER_ERROR,
            body: Json(json!({ "status": "error", "message": message })),
        }
    }
}

impl IntoResponse for ApiResponse {
    fn into_response(self) -> Response {
        (self.status_code, self.body).into_response()
    }
}

pub async fn send_mail(
    extract::Json(email_form): extract::Json<MailModel>,
) -> Result<ApiResponse, ApiResponse> {
    info!("Envoi d'email - Titre: '{}', Message: '{}'", email_form.title, email_form.message);

    // Validation des entrées
    if email_form.title.trim().is_empty() {
        return Err(ApiResponse::error("Le titre de l'email est vide"));
    }

    if email_form.message.trim().is_empty() {
        return Err(ApiResponse::error("Le message de l'email est vide"));
    }

    // Configuration des adresses email
    let config = EmailConfig {
        from: "Guilbaud <cmoilouis@gmail.com>".to_string(),
        reply_to: "bastien.guilbaud@gmail.com".to_string(),
        to: "bastien.guilbaud@gmail.com".to_string(),
        smtp_server: "smtp.gmail.com".to_string(),
        smtp_user: "cmoilouis@gmail.com".to_string(),
        smtp_password: "ddid gscg jecq cpzd".to_string(),
        smtp_port: 587,
    };

    // Création et envoi de l'email
    match send_email(&config, &email_form.title, &email_form.message) {
        Ok(_) => {
            info!("Email envoyé avec succès: titre='{}', destinataire='{}'", email_form.title, config.to);
            Ok(ApiResponse::success("Email envoyé avec succès"))
        },
        Err(err) => {
            error!("Échec de l'envoi d'email: {}", err);
            Err(ApiResponse::error(&err))
        }
    }
}