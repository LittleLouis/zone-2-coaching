document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carousel-container');
    const loadingElement = document.getElementById('loading');
    const errorElement = document.getElementById('error');
    let totalItems = 0;

    // Fonction pour récupérer les images depuis l'API
    async function fetchImagesFromAPI() {
        try {
            const response = await fetch('/getcarrouselimages');
            if (!response.ok) throw new Error('Erreur lors de la récupération des images');
            const responseData = await response.json();
            return responseData.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des images:', error);
            throw error;
        }
    }

    // Fonction pour initialiser le carrousel avec les images de l'API
    async function initCarouselWithApiData() {
        try {
            // Récupérer les images depuis l'API
            const images = await fetchImagesFromAPI();
            if (!images || images.length === 0) {
                throw new Error('Aucune image trouvée');
            }

            totalItems = images.length;
            loadingElement.style.display = 'none';
            createCarouselItems(images);
        } catch (error) {
            // Afficher le message d'erreur
            loadingElement.style.display = 'none';
            errorElement.style.display = 'block';
            errorElement.textContent = 'Erreur: ' + error.message;
        }
    }

    // Fonction pour créer les éléments du carrousel à partir des données de l'API
    function createCarouselItems(images) {
        // Ajouter tous les éléments originaux
        images.forEach(image => {
            const div = document.createElement('div');
            div.classList.add('common-card');
            div.innerHTML = `<img src="./${image.path}" alt="${image.name}" class="common-img-carrousel">`;
            carousel.appendChild(div);
        });
    }

    // Initialiser le carrousel avec les données de l'API
    initCarouselWithApiData();
});