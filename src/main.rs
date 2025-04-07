use axum::handler::HandlerWithoutStateExt;
use axum::http::header::CONTENT_TYPE;
use axum::http::{Method, StatusCode};
use axum::{extract, Router};
use axum::routing::post;
use tower_http::cors::{Any, CorsLayer};
use tower_http::services::ServeDir;
use tower_http::trace::TraceLayer;
use serde::Deserialize;
use tracing::log::info;

#[derive(Deserialize)]
struct MailModel {
    title: String,
    message: String,
}

#[tokio::main]
async fn main() {
    println!("Démarrage du serveur");

    tracing_subscriber::fmt()
        .with_max_level(tracing::Level::DEBUG)
        .init();
    println!("Tracing initialisé");

    async fn handle_404() -> (StatusCode, &'static str) {
        (StatusCode::NOT_FOUND, "Not found")
    }
    let service_not_found = handle_404.into_service();

    let cors = CorsLayer::new()
        .allow_methods([Method::GET, Method::POST])
        .allow_origin(Any)
        .allow_headers([CONTENT_TYPE]);
    println!("CORS configuré");

    let app = Router::new()
        .nest_service("/", ServeDir::new("home")
            .append_index_html_on_directories(true)
            .not_found_service(service_not_found))
        .route("/sendmail", post(send_mail))
        .layer(TraceLayer::new_for_http())
        .layer(cors);
    println!("Routes configurées");

    let listener = tokio::net::TcpListener::bind("127.0.0.1:8080")
        .await
        .unwrap();
    println!("Serveur démarré sur 8080");

    axum::serve(listener, app).await.unwrap();
}

async fn send_mail(extract::Json(email_form): extract::Json<MailModel>){
    info!("{}", email_form.title);
    info!("{}", email_form.message)
}