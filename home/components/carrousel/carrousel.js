document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const carousel = document.querySelector('.carousel');
    const loadingElement = document.getElementById('loading');
    const errorElement = document.getElementById('error');
    const indicatorsContainer = document.querySelector('.indicators');

    let currentIndex = 0;
    let totalItems = 0;
    let autoSlideInterval;

    // Fonction pour récupérer les images depuis l'API
    async function fetchImagesFromAPI() {
        try {
            // Remplacez cette URL par l'URL réelle de votre API
            const apiUrl = 'http://localhost:8080/getcarrouselimages';

            const response = await fetch(apiUrl);
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
            console.log(images)
            if (!images || images.length === 0) {
                throw new Error('Aucune image trouvée');
            }

            totalItems = images.length;

            // Masquer le message de chargement
            loadingElement.style.display = 'none';

            // Ajouter les images au carrousel
            createCarouselItems(images);

            // Afficher le carrousel
            carousel.style.display = 'flex';

            // Initialiser le carrousel
            setupInfiniteCarousel();
            createIndicators();
            handleInfiniteTransition();

            // Démarrer le défilement automatique
            startAutoSlide();
        } catch (error) {
            // Afficher le message d'erreur
            loadingElement.style.display = 'none';
            errorElement.style.display = 'block';
            errorElement.textContent = 'Erreur: ' + error.message;
        }
    }

    // Fonction pour créer les éléments du carrousel à partir des données de l'API
    function createCarouselItems(images) {
        // Ajouter d'abord le dernier élément au début pour le défilement infini
        const lastItemDiv = document.createElement('div');
        lastItemDiv.classList.add('carousel-item');
        lastItemDiv.innerHTML = `<img src="./${images[images.length - 1].path}" alt="${images[images.length - 1].name}">`;
        carousel.appendChild(lastItemDiv);

        // Ajouter tous les éléments originaux
        images.forEach((image, index) => {
            const div = document.createElement('div');
            div.classList.add('carousel-item');
            if (index === 0) div.classList.add('center');
            console.log(`<img src="./${image.path}" alt="${image.name}">`)
            div.innerHTML = `<img src="./${image.path}" alt="${image.name}">`;
            carousel.appendChild(div);
        });

        // Ensuite, cloner le premier élément et l'ajouter à la fin
        const firstItemDiv = document.createElement('div');
        firstItemDiv.classList.add('carousel-item');
        firstItemDiv.innerHTML = `<img src="${images[0].path}" alt="${images[0].name}">`;
        carousel.appendChild(firstItemDiv);
    }

    // Fonction pour configurer le carrousel infini
    function setupInfiniteCarousel() {
        // Positionner initialement le carrousel
        updateCarouselPosition(false);
    }

    // Créer les indicateurs
    function createIndicators() {
        for (let i = 0; i < totalItems; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            indicator.addEventListener('click', () => {
                goToSlide(i);
            });
            indicatorsContainer.appendChild(indicator);
        }
        updateIndicators();
    }

    // Mettre à jour les indicateurs
    function updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === currentIndex % totalItems) {
                indicator.classList.add('active');
            }
        });
    }

    // Mettre à jour la position du carrousel
    function updateCarouselPosition(animate = true) {
        // Calculer la position à partir de l'index actuel
        const translateX = -(currentIndex + 1) * (100 / 3);

        // Appliquer la transition seulement quand c'est demandé
        if (!animate) {
            carousel.style.transition = 'none';
        } else {
            carousel.style.transition = 'transform 0.5s ease';
        }

        carousel.style.transform = `translateX(${translateX}%)`;
        updateActiveItems();
        updateIndicators();
    }

    // Mettre à jour les éléments actifs
    function updateActiveItems() {
        const allItems = document.querySelectorAll('.carousel-item');
        allItems.forEach((item, index) => {
            item.classList.remove('center');

            // Déterminer quelle image doit être au centre
            // L'élément du milieu est toujours à index + 1 (car on a un élément à gauche)
            if ((index - 1) % totalItems === currentIndex % totalItems ||
                (index - 1 - totalItems) % totalItems === currentIndex % totalItems ||
                (index - 1 + totalItems) % totalItems === currentIndex % totalItems) {
                item.classList.add('center');
            }
        });
    }

    // Passer à la diapositive suivante
    function nextSlide() {
        currentIndex++;
        updateCarouselPosition();
    }

    // Aller à une diapositive spécifique
    function goToSlide(index) {
        currentIndex = index;
        updateCarouselPosition();
    }

    // Gérer la transition infinie
    function handleInfiniteTransition() {
        carousel.addEventListener('transitionend', function() {
            // Si nous avons défilé au-delà du dernier clone
            if (currentIndex >= totalItems) {
                // Revenir silencieusement au début réel
                carousel.style.transition = 'none';
                currentIndex = currentIndex % totalItems;
                updateCarouselPosition(false);

                // Réactiver les transitions après un court délai
                setTimeout(() => {
                    carousel.style.transition = 'transform 0.5s ease';
                }, 10);
            }

            // Si nous avons défilé avant le premier élément
            if (currentIndex < 0) {
                // Revenir silencieusement à la fin réelle
                carousel.style.transition = 'none';
                currentIndex = totalItems - 1;
                updateCarouselPosition(false);

                // Réactiver les transitions après un court délai
                setTimeout(() => {
                    carousel.style.transition = 'transform 0.5s ease';
                }, 10);
            }
        });
    }

    // Démarrer le défilement automatique
    function startAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 4000); // 4 secondes
    }

    // Initialiser le carrousel avec les données de l'API
    initCarouselWithApiData();
});