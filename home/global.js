import './components/carrousel/carrousel.js';
import './components/faq/faq.js'
import './components/stats/stats.js'

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
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Ajouter un indicateur visuel que la requête est en cours (optionnel)
    const submitBtn = document.querySelector(".btn-submit");
    if (submitBtn) submitBtn.disabled = true;

    fetch('/sendmail', {
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

