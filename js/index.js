document.addEventListener("DOMContentLoaded", function () {
    // Sélection des éléments
    const menuEnter = document.querySelector(".menu--enter");
    const menuExit = document.querySelector(".menu--exit");
    const menuNav = document.querySelector(".menu--nav");

    // Ouvrir le menu
    menuEnter.addEventListener("click", () => {
        menuNav.style.right = "0%";
    });

    // Fermer le menu
    menuExit.addEventListener("click", () => {
        menuNav.style.right = "-100%";
    });
});












// Met à jour dynamiquement toutes les dates du calendrier
document.addEventListener("DOMContentLoaded", () => {
    const daysElements = document.querySelectorAll('.day');
    const currentDate = new Date();

    // Options pour formater la date
    const options = { weekday: 'short', day: 'numeric', month: 'short' };

    daysElements.forEach((dayElement, index) => {
        const dayNumberElement = dayElement.querySelector('.day-number');
        const dayNameElement = dayElement.querySelector('.day-name');
        const monthElement = dayElement.querySelector('.month');

        // Crée une nouvelle date en ajoutant ou soustrayant des jours 
        const adjustedDate = new Date(currentDate);
        adjustedDate.setDate(currentDate.getDate() + (index - 2)); // Index -2 pour centré "Aujourd'hui" au milieu

        // Mise à jour des contenus
        const formattedDate = adjustedDate.toLocaleDateString('fr-FR', options).split(' ');
        dayNameElement.textContent = formattedDate[0]; // Jour abrégé (ex: Lun)
        if (index === 2) {
            dayNumberElement.textContent = "Aujourd'hui"; // Texte spécial pour la journée actuelle
        } else {
            dayNumberElement.textContent = formattedDate[1]; // Numéro du jour
        }
        if (monthElement) monthElement.textContent = formattedDate[2]; // Mois abrégé (ex: Aoû)
    });
});
