// script.js

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector("form"); // Sélectionne le formulaire de contact

    contactForm.addEventListener("submit", function(event) {
        const nom = document.getElementById("nom").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (nom === "" || email === "" || message === "") {
            event.preventDefault(); // Empêche l'envoi du formulaire
            alert("Veuillez remplir tous les champs avant de soumettre."); // Alerte si des champs sont vides
        } else {
            alert("Merci pour votre message, nous vous répondrons bientôt !");
        }
    });

    // Fonction pour naviguer vers différentes pages
    function navigateTo(page) {
        window.location.href = page;
    }

    // Ajout d'événements de clic sur les éléments du menu
    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("click", function() {
            const pageLink = item.getAttribute("data-link");
            navigateTo(pageLink);
        });
    });
});