document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const faqItem = this.parentNode;

            // Ferme tous les autres items ouverts
            document.querySelectorAll('.faq-item.active').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });

            // Bascule l'état actif de l'item cliqué
            faqItem.classList.toggle('active');
        });
    });

    const popup = document.getElementById('contactPopup');
    const closePopup = document.querySelector('.close-popup');
    const cancelBtn = document.querySelector('.btn-cancel');
    const openBtns = document.querySelectorAll('.openPopupBtn');

    openBtns.forEach(openBtn => {
        openBtn.addEventListener('click', function (e) {
            e.preventDefault();
            popup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    if (closePopup) {
        closePopup.addEventListener('click', function () {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', function () {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    if (popup) {
        popup.addEventListener('click', function (e) {
            if (e.target === popup) {
                popup.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Fermer en cliquant en dehors
    popup.addEventListener('click', function (e) {
        if (e.target === popup) {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto'; // Réactive le défilement
        }
    });
});

function sendEmailRequest() {
    const url = "http://localhost:8080/sendmail"; // URL de l'API

    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Ajouter un indicateur visuel que la requête est en cours (optionnel)
    const submitBtn = document.querySelector(".btn-submit");
    if (submitBtn) submitBtn.disabled = true;

    fetch(url, {
        method: "POST", // Changé de GET à POST
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({title: subject, message: message}) // Adapté aux attentes du backend
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Email envoyé avec succès:", data);
            // Fermer la popup après succès
            document.getElementById("contactPopup").style.display = 'none';
            document.body.style.overflow = 'auto';

            // Réinitialiser le formulaire
            document.getElementById("contactForm").reset();
        })
        .catch(error => {
            console.error("Erreur lors de l'envoi:", error);
            alert("Une erreur s'est produite lors de l'envoi du message.");
        })
        .finally(() => {
            // Réactiver le bouton dans tous les cas
            if (submitBtn) submitBtn.disabled = false;
        });
}


document.addEventListener('DOMContentLoaded', function() {
    // Configuration
    const imagesPerView = window.innerWidth <= 480 ? 1 : (window.innerWidth <= 768 ? 2 : 3);
    
    // Chemin vers le dossier contenant vos images
    const imageFolderPath = './img/carousel/'; // Ajustez ce chemin selon votre structure de dossier
    
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