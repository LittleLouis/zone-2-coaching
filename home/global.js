import './components/carrousel/carrousel.js';
import './components/faq/faq.js'


function checkScrollPosition() {
    const banner = document.getElementById('sticky-banner');
    const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Calculer si on est proche du bas (par exemple, à 80% de la page)
    const scrollPercentage = (scrollTop + windowHeight) / documentHeight;

    if (scrollPercentage >= 0.95) {
        banner.classList.add('right-position');
    } else {
        banner.classList.remove('right-position');
    }
}

window.addEventListener('scroll', checkScrollPosition);
window.addEventListener('load', checkScrollPosition);


document.addEventListener('DOMContentLoaded', function () {
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

window.sendEmailRequest = function sendEmailRequest() {
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Ajouter un indicateur visuel que la requête est en cours (optionnel)
    const submitBtn = document.querySelector(".btn-submit");
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Envoi<span class="dots-loader"></span>';

    fetch('/sendmail', {
        method: "POST", // Changé de GET à POST
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name: name, surname: surname, email:email, message: message})
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Email envoyé avec succès:", data);
            document.getElementById("contactPopup").style.display = 'none';
            document.body.style.overflow = 'auto';

            alert("Email envoyé avec succès !");
            document.getElementById("contactForm").reset();
        })
        .catch(error => {
            console.error("Erreur lors de l'envoi:", error);
            alert("Une erreur s'est produite lors de l'envoi du message.");
        })
        .finally(() => {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Envoyer';
        });
}

document.addEventListener("DOMContentLoaded", function () {
    class FlexiblePagination {
        constructor(config) {
            this.sectionId = config.sectionId;
            this.cardSelector = config.cardSelector;
            this.dotsContainerId = config.dotsContainerId;
            this.gap = config.gap || 32;
            new Promise(r => setTimeout(r, 1000)).then(_ => this.init());
        }

        init() {
            this.container = document.querySelector(`#${this.sectionId} .common-container`);
            this.cards = this.container.querySelectorAll(this.cardSelector);
            this.dotsContainer = document.getElementById(this.dotsContainerId);

            if (!this.container) {
                console.warn(`Pagination non initialisée pour ${this.sectionId}: éléments manquants this.container`);
                return;
            }
            if(!this.cards.length){
                console.warn(`Pagination non initialisée pour ${this.sectionId}: éléments manquants this.cards`);
                return;
            }
            if(!this.dotsContainer){
                console.warn(`Pagination non initialisée pour ${this.sectionId}: éléments manquants this.dotsContainer`);
                return;
            }

            this.createDots();
            this.addEventListeners();
            this.addTouchSupport();
        }

        createDots() {
            // Créer les dots de pagination
            this.cards.forEach((_, i) => {
                const dot = document.createElement("span");
                dot.classList.add("dot");
                if (i === 0) dot.classList.add("active");

                dot.addEventListener("click", () => {
                    this.scrollToCard(i);
                });

                this.dotsContainer.appendChild(dot);
            });

            this.dots = this.dotsContainer.querySelectorAll(".dot");
        }

        scrollToCard(index) {
            const cardWidth = this.cards[0].offsetWidth;
            const scrollPosition = index * (cardWidth + this.gap);

            this.container.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }

        updateActiveDot() {
            const scrollLeft = this.container.scrollLeft;
            const cardWidth = this.cards[0].offsetWidth;
            const cardWidthWithGap = cardWidth + this.gap;

            const index = Math.round(scrollLeft / cardWidthWithGap);

            this.dots.forEach(dot => dot.classList.remove("active"));
            if (this.dots[index]) {
                this.dots[index].classList.add("active");
            }
        }

        addEventListeners() {
            let scrollTimeout;
            this.container.addEventListener("scroll", () => {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => this.updateActiveDot(), 50);
            });
        }

        addTouchSupport() {
            let startX = 0;
            let currentX = 0;
            let isDragging = false;

            this.container.addEventListener("touchstart", (e) => {
                startX = e.touches[0].clientX;
                isDragging = true;
            });

            this.container.addEventListener("touchmove", (e) => {
                if (!isDragging) return;
                currentX = e.touches[0].clientX;
            });

            this.container.addEventListener("touchend", () => {
                if (!isDragging) return;
                isDragging = false;

                const diff = startX - currentX;
                const threshold = 50;

                if (Math.abs(diff) > threshold) {
                    const currentIndex = Math.round(this.container.scrollLeft / (this.cards[0].offsetWidth + this.gap));
                    if (diff > 0 && currentIndex < this.cards.length - 1) {
                        this.scrollToCard(currentIndex + 1);
                    } else if (diff < 0 && currentIndex > 0) {
                        this.scrollToCard(currentIndex - 1);
                    }
                }
            });
        }
    }

    // Configuration des différentes sections
    const paginationConfigs = [
        {
            sectionId: 'testimony',
            cardSelector: '.common-card-testimony',
            dotsContainerId: 'testimony-dots',
            gap: 32
        },
        {
            sectionId: 'suivi',
            cardSelector: '.common-card-suivis',
            dotsContainerId: 'suivi-dots',
            gap: 32
        },
        {
            sectionId: 'services',
            cardSelector: '.common-card-services',
            dotsContainerId: 'services-dots',
            gap: 32
        },
        {
            sectionId: 'coach-2024-goals',
            cardSelector: '.common-card-stats',
            dotsContainerId: 'parcours-dots',
            gap: 32
        },
        {
            sectionId: 'carousel',
            cardSelector: '.common-img-carrousel',
            dotsContainerId: 'carousel-dots',
            gap: 32
        }
    ];

    // Initialiser la pagination pour chaque section
    paginationConfigs.forEach(config => {
        new FlexiblePagination(config);
    });
});