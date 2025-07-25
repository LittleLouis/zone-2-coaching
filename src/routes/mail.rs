use axum::{
    Json,
};
use axum::http::Uri;
use axum_limit::LimitPerSecond;
use tracing::{error, info};

use crate::models::mail::{EmailConfig, MailModel};
use crate::routes::api::ApiResponse;
use crate::services::mail::send_email;


pub async fn send_mail(
    _: LimitPerSecond<1, Uri>, Json(email_form): Json<MailModel>
) -> Result<ApiResponse, ApiResponse> {
    info!("Envoi d'email - Nom: '{}', Prénom: '{}', Email: '{}', Message: '{}'", email_form.name, email_form.surname, email_form.email, email_form.message);

    // Validation des entrées
    if email_form.name.trim().is_empty() {
        return Err(ApiResponse::error("Le nom renseigné est vide"));
    }
    if email_form.email.trim().is_empty() {
        return Err(ApiResponse::error("Le mail renseigné est vide"));
    }
    if email_form.surname.trim().is_empty() {
        return Err(ApiResponse::error("Le prénom renseigné est vide"));
    }
    if email_form.message.trim().is_empty() {
        return Err(ApiResponse::error("Le message renseigné vide"));
    }

    // Configuration des adresses email
    let config = EmailConfig {
        from: "Zone 2 coaching <bastien.guilbaud@gmail.com>".to_string(),
        to: "bastien.guilbaud@gmail.com".to_string(),
        smtp_server: "smtp.gmail.com".to_string(),
        smtp_user: "bastien.guilbaud@gmail.com".to_string(),
        smtp_password: "pkbx ikbs gbpc zjvv".to_string(),
        smtp_port: 587,
    };

    // Création et envoi de l'email
    match send_email(&config, &email_form.name, &email_form.surname, &email_form.email, &email_form.message) {
        Ok(_) => {
            info!("Email envoyé avec succès: nom de l'expéditeur='{}', destinataire='{}'", email_form.name, config.to);
            Ok(ApiResponse::success("Email envoyé avec succès"))
        },
        Err(err) => {
            error!("Échec de l'envoi d'email: {}", err);
            Err(ApiResponse::error(&err))
        }
    }
}