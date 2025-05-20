use tokio::fs;
use tracing::{error, info};
use crate::models::image::ImageInfo;

pub async fn get_images_in_dir(dir_path: &str) -> Result<Vec<ImageInfo>, String> {
    let mut images: Vec<ImageInfo> = Vec::new();
    
    match fs::read_dir(dir_path).await {
        Ok(mut entries) => {
            while let Some(entry) = entries.next_entry().await.unwrap_or(None) {
                let path = entry.path();

                // Vérifie si c'est un fichier et si c'est une image
                if path.is_file() {
                    if let Some(extension) = path.extension() {
                        let ext = extension.to_string_lossy().to_lowercase();

                        // Filtrer uniquement les images (extensions communes d'images)
                        if ["jpg", "jpeg", "png", "gif", "webp", "svg"].contains(&ext.as_str()) {
                            if let Some(filename) = path.file_name() {
                                if let Ok(metadata) = fs::metadata(&path).await {
                                    let mut components = path.components();
                                    components.next();
                                    let path_whithout_home = components.as_path().display().to_string();

                                    let image_info = ImageInfo {
                                        name: filename.to_string_lossy().to_string(),
                                        path: path_whithout_home,
                                        size: metadata.len(),
                                    };
                                    images.push(image_info);
                                }
                            }
                        }
                    }
                }
            }

            info!("Récupération réussie: {} images trouvées", images.len());
            Ok(images)
        },
        Err(err) => {
            error!("Échec de la lecture du dossier d'images: {}", err);
            Err(format!("Erro while getting images in path {dir_path}, err {err}"))
        }
    }
}