const tableauObj = [
    {
        match:[{
            equipe1:'manchester',
            equipe2:'barcelone',
            score:'0 - 0'
        },
        {
            equipe1:'manchester',
            equipe2:'barcelone',
            score:'0 - 0'
        },
    ],
        direct:[],
        replay:[]
    },
    
    {
        match:[],
        direct:[],
        replay:[]
    },
    
    {
        match:[{
            equipe1:'manchester',
            equipe2:'barcelone',
            score:'0 - 0'
        },
        {
            equipe1:'manchester',
            equipe2:'barcelone',
            score:'0 - 0'
        }],
        direct:[],
        replay:[]
    },
    
    {
        match:[],
        direct:[],
        replay:[]
    },
    
    {
        match:[],
        direct:[],
        replay:[]
    }
    ];
    const details = document.getElementById('details');
    const rowDetails = details.querySelector(".row");
    let currentIndex = 2;
    
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
        const matchValue = document.querySelector('#matchValue');
        const directValue = document.querySelector('#directValue');
        const replayValue = document.querySelector('#replayValue');
        const daysElements = document.querySelectorAll('.day');
        const currentDate = new Date();
    
        // Options pour formater la date
        const options = { weekday: 'short', day: 'numeric', month: 'short' };
    
        daysElements.forEach((dayElement, index) => {
            const currentObject = tableauObj[index];
            const dayNumberElement = dayElement.querySelector('.day-number');
            const dayNameElement = dayElement.querySelector('.day-name');
            const monthElement = dayElement.querySelector('.month');
    
            dayElement.addEventListener('click', () =>{
                currentIndex=index;
                matchValue.textContent=currentObject.match.length;
                directValue.textContent=currentObject.direct.length;
                replayValue.textContent=currentObject.replay.length;
                details.style.display = 'none';
                rowDetails.innerHTML = "";
    
            });
    
            // Crée une nouvelle date en ajoutant ou soustrayant des jours 
            const adjustedDate = new Date(currentDate);
            adjustedDate.setDate(currentDate.getDate() + (index - 2)); // Index -2 pour centré "Aujourd'hui" au milieu
    
            // Mise à jour des contenus
            const formattedDate = adjustedDate.toLocaleDateString('fr-FR', options).split(' ');
            dayNameElement.textContent = formattedDate[0]; // Jour abrégé (ex: Lun)
            if (index === 2) {
                matchValue.textContent=currentObject.match.length;
                directValue.textContent=currentObject.direct.length;
                replayValue.textContent=currentObject.replay.length;
                dayNumberElement.textContent = "Aujourd'hui"; // Texte spécial pour la journée actuelle
            } else {
                dayNumberElement.textContent = formattedDate[1]; // Numéro du jour
            }
            if (monthElement) monthElement.textContent = formattedDate[2]; // Mois abrégé (ex: Aoû)
        });
    });
    
    // *************
    // function toggleDetails(element) {
    //     let details = element.querySelector('.details');
    //     if (details.style.display === 'block') {
    //         details.style.display = 'none';
    //     } else {
    //         details.style.display = 'block';
    //     }
    // }
    
    
    
    // const detailsData = {
    //     match: 'Scores des matchs du jour : PSG 3-1 OM, Lyon 2-2 Monaco.',
    //     direct: 'Scores en direct : Lille 1-0 Rennes (45e), Nice 2-1 Nantes (60e).',
    //     replay: 'Scores des replays : Barcelone 4-0 Real Madrid, Chelsea 2-2 Arsenal.'
    // };
    
    function showDetails(type) {
        // detailsDiv.textContent = detailsData[type];
        const listDetails = tableauObj[currentIndex][type];
        
        
        
        if (details.style.display === 'block') {
            details.style.display = 'none';
        } else {
            rowDetails.innerHTML = "";
    
            for (const item of listDetails){
                rowDetails.innerHTML +=`
                    <div class="col-md-4 col-lg-4">
                        <div class="packs--card__bottom--bubbles">
                            <div class="team">
                                <span class="team-name">${item.equipe1}</span>
                                <img src="img/Real-Madrid-Logo.png" alt="imgTeam" class="team-logo">
                            </div>
    
                            <div class="score">${item.score}</div>
    
                            <div class="team">
                                <img src="img/Inter-Milan-Logo.png" alt="imgTeam" class="team-logo">
                                <span class="team-name">${item.equipe2}</span>
                            </div>
                        </div>
                    </div>
                `
            }
            details.style.display = 'block';
        }
    }
    
    