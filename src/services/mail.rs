use lettre::{
    transport::smtp::{authentication::{Credentials}, client::TlsParameters},
    Message, SmtpTransport, Transport,
};
use lettre::message::header::ContentType;
use tracing::{debug};

use crate::models::mail::EmailConfig;

pub fn send_email(
    config: &EmailConfig,
    subject: &str,
    body: &str,
) -> Result<(), String> {
    debug!("Analyse des adresses email...");

    // Analyse des adresses email
    let from_address = config.from.parse()
        .map_err(|e| format!("Adresse d'expéditeur invalide: {}", e))?;

    let reply_to_address = config.reply_to.parse()
        .map_err(|e| format!("Adresse de réponse invalide: {}", e))?;

    let to_address = config.to.parse()
        .map_err(|e| format!("Adresse de destinataire invalide: {}", e))?;

    debug!("Construction de l'email...");

    // Construction de l'email
    let email = Message::builder()
        .from(from_address)
        .reply_to(reply_to_address)
        .to(to_address)
        .subject(subject)
        .header(ContentType::TEXT_PLAIN)
        .body(body.to_string())
        .map_err(|e| format!("Échec de la création de l'email: {}", e))?;

    debug!("Configuration du transport SMTP pour {}:{}...", config.smtp_server, config.smtp_port);

    // Configuration du transport SMTP avec TLS explicite
    let tls_parameters = TlsParameters::new(config.smtp_server.clone())
        .map_err(|e| format!("Échec de la configuration TLS: {}", e))?;

    // Créer un transport avec STARTTLS explicite
    let transport = SmtpTransport::starttls_relay(&config.smtp_server)
        .map_err(|e| format!("Échec de la configuration SMTP: {}", e))?
        .credentials(Credentials::new(
            config.smtp_user.clone(),
            config.smtp_password.clone(),
        ))
        .port(config.smtp_port)
        .tls(lettre::transport::smtp::client::Tls::Required(tls_parameters))
        .build();

    debug!("Tentative d'envoi de l'email...");

    // Envoi de l'email
    transport.send(&email)
        .map_err(|e| format!("Échec de l'envoi de l'email: {}", e))?;

    debug!("Email envoyé avec succès");
    Ok(())
}