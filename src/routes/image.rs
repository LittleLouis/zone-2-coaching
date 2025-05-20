use std::path::Path;
use axum::http::Uri;
use axum_limit::LimitPerSecond;
use tracing::{error, info};
use crate::routes::api::ApiResponse;
use crate::services::image::get_images_in_dir;

pub async fn get_carrousel_images(
    _: LimitPerSecond<1, Uri>
) -> Result<ApiResponse, ApiResponse> {
    info!("Récupération des images du carrousel");

    // Chemin du dossier contenant les images du carrousel
    let images_dir = Path::new("home/components/carrousel/imgs");

    // Vérifie si le dossier existe
    if !images_dir.exists() {
        error!("Le dossier des images du carrousel n'existe pas");
        return Err(ApiResponse::error("Le dossier des images n'existe pas"));
    }

    // Liste pour stocker les informations des images
    match get_images_in_dir(images_dir.to_str().unwrap()).await {
        Ok(images) => {
            info!("Images du carrousel récupérées avec succès.");
            Ok(ApiResponse::success_with_data("Image carrousel", &images))
        }
        Err(e) => {
            error!("Erreur lors de la récupération des images du carrousel : [{}]", e.as_str());
            Err(ApiResponse::error("Erreur lors de la récupération des images du carrousel."))
        },
    }
}