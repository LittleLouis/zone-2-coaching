use axum::http::StatusCode;
use axum::Json;
use axum::response::{IntoResponse, Response};
use serde::Serialize;
use serde_json::json;
use tracing::error;

// Structure pour la réponse API
pub struct ApiResponse {
    status_code: StatusCode,
    body: Json<serde_json::Value>,
}

impl ApiResponse {
    pub(crate) fn success(message: &str) -> Self {
        ApiResponse {
            status_code: StatusCode::OK,
            body: Json(json!({ "status": "success", "message": message })),
        }
    }

    pub(crate) fn success_with_data<T: Serialize>(message: &str, data: T) -> Self {
        ApiResponse {
            status_code: StatusCode::OK,
            body: Json(json!({
                "status": "success",
                "message": message,
                "data": data
            })),
        }
    }

    pub(crate) fn error(message: &str) -> Self {
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