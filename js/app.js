// Le fichier app.js gère l'application
// Le module app est le module de l'application (des parties JS du site web)
const app = {

    // Méthode d'initialisation de l'application
    init: function() {

        console.log('app.init OK');

        // On va initialiser tous les modules qui doivent être lancés au chargement de la page
        theme.init();
        destinations.init();
        reviewsFilter.init();
        slider.init();

    }

};

// On exécute app.init quand la page est chargée
document.addEventListener('DOMContentLoaded', app.init);