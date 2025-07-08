use axum::{
    routing::{post},
    Router,
    response::{Response},
};
use axum::handler::HandlerWithoutStateExt;
use axum::http::{Method, StatusCode, Uri};
use axum::http::header::CONTENT_TYPE;
use axum::routing::get;
use axum_limit::LimitState;
use tower_http::cors::{Any, CorsLayer};
use tower_http::services::ServeDir;
use tower_http::trace::TraceLayer;
use tracing::log::{info};
use std::fs;
use crate::routes::image::get_carrousel_images;
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
        .route("/getcarrouselimages", get(get_carrousel_images))
        .route("/robots.txt", get(serve_robots))
        .route("/sitemap.xml", get(serve_sitemap))
        .with_state(LimitState::<Uri>::default())
        .layer(TraceLayer::new_for_http())
        .layer(cors);
    info!("Routes configurées");

    let listener = tokio::net::TcpListener::bind("0.0.0.0:8080")
        .await
        .unwrap();
    info!("Serveur démarré sur 0.0.0.0:8080");

    axum::serve(listener, app).await.unwrap();
}

async fn serve_robots() -> Result<Response<String>, StatusCode> {
    match fs::read_to_string("home/robots.txt") {
        Ok(content) => Ok(Response::builder()
            .header("content-type", "text/plain")
            .body(content)
            .unwrap()),
        Err(_) => Err(StatusCode::NOT_FOUND),
    }
}

async fn serve_sitemap() -> Result<Response<String>, StatusCode> {
    match fs::read_to_string("home/sitemap.xml") {
        Ok(content) => Ok(Response::builder()
            .header("content-type", "application/xml")
            .body(content)
            .unwrap()),
        Err(_) => Err(StatusCode::NOT_FOUND),
    }
}