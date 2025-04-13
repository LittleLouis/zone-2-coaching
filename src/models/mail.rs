use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize)]
pub struct MailModel {
    pub title: String,
    pub message: String,
}

#[derive(Debug, Clone)]
pub struct EmailConfig {
    pub from: String,
    pub reply_to: String,
    pub to: String,
    pub smtp_server: String,
    pub smtp_user: String,
    pub smtp_password: String,
    pub smtp_port: u16,
}

#[derive(Debug, Serialize)]
pub struct MailResponse {
    pub status: String,
    pub message: String,
}