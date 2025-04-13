use axum::{
    routing::{post},
    Router,
};
use axum::handler::HandlerWithoutStateExt;
use axum::http::{Method, StatusCode};
use axum::http::header::CONTENT_TYPE;
use tower_http::cors::{Any, CorsLayer};
use tower_http::services::ServeDir;
use tower_http::trace::TraceLayer;
use tracing::log::{info};
use crate::routes::mail::send_mail;

pub async fn start_server() {
    async fn handle_404() -> (StatusCode, &'static str) {
        (StatusCode::NOT_FOUND, "Not found")
    }
    let service_not_found = handle_404.into_service();

    let cors = CorsLayer::new()
        .allow_methods([Method::GET, Method::POST])
        .allow_origin(Any)
        .allow_headers([CONTENT_TYPE]);
    info!("CORS configuré");

    let app = Router::new()
        .nest_service("/", ServeDir::new("home")
            .append_index_html_on_directories(true)
            .not_found_service(service_not_found))
        .route("/sendmail", post(send_mail))
        .layer(TraceLayer::new_for_http())
        .layer(cors);
    info!("Routes configurées");

    let listener = tokio::net::TcpListener::bind("127.0.0.1:8080")
        .await
        .unwrap();
    info!("Serveur démarré sur 8080");

    axum::serve(listener, app).await.unwrap();
}