use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct ImageInfo {
    pub(crate) name: String,
    pub(crate) path: String,
    pub(crate) size: u64,
}