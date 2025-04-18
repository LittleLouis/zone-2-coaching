document.addEventListener('DOMContentLoaded', function() {
    // Configuration
    const imagesPerView = window.innerWidth <= 480 ? 1 : (window.innerWidth <= 768 ? 2 : 3);

    // Chemin vers le dossier contenant vos images
    const imageFolderPath = './components/carrousel/imgs/'; // Ajustez ce chemin selon votre structure de dossier

    // Liste des noms de fichiers d'images (à remplir manuellement)
    const imageFilenames = [
        'image1.png',
        'image2.png',
        'image3.png',
        'image4.png',
        'image5.png',
        'image6.png',
        'image7.png',
        'image8.png',
        'image9.png',
        'image10.png',
        'image11.png',
        'image12.png',
        'image13.png',
        'image14.png',
        'image15.png',
        'image16.png',
        'image17.png',
        'image18.png',
        // Ajoutez ou retirez des noms de fichiers selon vos besoins
    ];

    const totalImages = imageFilenames.length;
    const images = [];

    // Référence aux éléments DOM
    const carouselTrack = document.getElementById('carouselTrack');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    // Générer les éléments d'image
    for (let i = 0; i < totalImages; i++) {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';

        const img = document.createElement('img');
        img.className = 'carousel-image';
        img.src = imageFolderPath + imageFilenames[i];
        img.alt = `Image ${i + 1}`;

        slide.appendChild(img);
        carouselTrack.appendChild(slide);
        images.push(slide);
    }

    // Créer des clones pour l'effet de boucle infinie
    function createClones() {
        // Clones pour le début
        for (let i = totalImages - imagesPerView; i < totalImages; i++) {
            const clone = images[i].cloneNode(true);
            clone.classList.add('clone');
            carouselTrack.insertBefore(clone, carouselTrack.firstChild);
        }

        // Clones pour la fin
        for (let i = 0; i < imagesPerView; i++) {
            const clone = images[i].cloneNode(true);
            clone.classList.add('clone');
            carouselTrack.appendChild(clone);
        }
    }

    createClones();

    // Variables pour le tracking
    let currentIndex = 0;
    let slideWidth = images[0].offsetWidth;

    // Positionner initialement le carousel
    function setInitialPosition() {
        slideWidth = images[0].offsetWidth;
        carouselTrack.style.transform = `translateX(-${(imagesPerView) * slideWidth}px)`;
    }

    setInitialPosition();

    // Ajouter la classe active à l'image centrale
    function updateActiveSlides() {
        const slides = document.querySelectorAll('.carousel-slide');
        slides.forEach(slide => slide.classList.remove('active'));

        // Calculer l'index de l'élément central
        const centerIndex = imagesPerView + currentIndex;

        if (slides[centerIndex]) {
            slides[centerIndex].classList.add('active');
        }
    }

    updateActiveSlides();

    // Gestion du défilement
    function goToSlide(index) {
        currentIndex = index;

        if (currentIndex < 0) {
            currentIndex = totalImages - 1;
            // Transition instantanée à la fin
            carouselTrack.style.transition = 'none';
            carouselTrack.style.transform = `translateX(-${(imagesPerView + totalImages) * slideWidth}px)`;

            // Force reflow
            carouselTrack.offsetHeight;

            // Réactiver la transition
            setTimeout(() => {
                carouselTrack.style.transition = 'transform 0.5s ease';
                goToSlide(totalImages - 1);
            }, 10);
            return;
        }

        if (currentIndex >= totalImages) {
            currentIndex = 0;
            // Transition instantanée au début
            carouselTrack.style.transition = 'none';
            carouselTrack.style.transform = `translateX(-${imagesPerView * slideWidth}px)`;

            // Force reflow
            carouselTrack.offsetHeight;

            // Réactiver la transition
            setTimeout(() => {
                carouselTrack.style.transition = 'transform 0.5s ease';
                goToSlide(0);
            }, 10);
            return;
        }

        carouselTrack.style.transform = `translateX(-${(imagesPerView + currentIndex) * slideWidth}px)`;
        updateActiveSlides();
    }

    // Event listeners pour les boutons
    prevButton.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextButton.addEventListener('click', () => goToSlide(currentIndex + 1));

// Fonction pour le défilement automatique
    function startAutoSlide() {
        return setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 2500); // 2,5 secondes
    }

// Variable pour stocker l'intervalle
    let autoSlideInterval = startAutoSlide();

// Arrêter le défilement automatique lorsque l'utilisateur interagit avec le carrousel
    prevButton.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        goToSlide(currentIndex - 1);
        // Redémarrer après un délai
        setTimeout(() => {
            autoSlideInterval = startAutoSlide();
        }, 5000); // Redémarrer après 5 secondes d'inactivité
    });

    nextButton.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        goToSlide(currentIndex + 1);
        // Redémarrer après un délai
        setTimeout(() => {
            autoSlideInterval = startAutoSlide();
        }, 5000); // Redémarrer après 5 secondes d'inactivité
    });

// Pause au survol (optionnel)
    carouselTrack.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    carouselTrack.addEventListener('mouseleave', () => {
        autoSlideInterval = startAutoSlide();
    });

    // Gérer le redimensionnement de la fenêtre
    window.addEventListener('resize', () => {
        slideWidth = images[0].offsetWidth;
        goToSlide(currentIndex);
    });

    // Transition terminée
    carouselTrack.addEventListener('transitionend', () => {
        if (currentIndex === -1) {
            carouselTrack.style.transition = 'none';
            currentIndex = totalImages - 1;
            carouselTrack.style.transform = `translateX(-${(imagesPerView + currentIndex) * slideWidth}px)`;
        }
        if (currentIndex === totalImages) {
            carouselTrack.style.transition = 'none';
            currentIndex = 0;
            carouselTrack.style.transform = `translateX(-${(imagesPerView + currentIndex) * slideWidth}px)`;
        }
    });
});