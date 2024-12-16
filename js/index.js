// Met à jour la date "Aujourd'hui" dynamiquement
document.addEventListener("DOMContentLoaded", () => {
    const todayElement = document.querySelector('.today .day-number');
    const currentDate = new Date();
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    todayElement.textContent = `Aujourd'hui`;
});