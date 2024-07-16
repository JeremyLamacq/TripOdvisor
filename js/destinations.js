// Module de gestion des destinations
const destinations = {

    init: function() {
        destinations.addLikeEvents();
    },

    // Méthode qui permet d'attacher les écouteurs d'événéments
    addLikeEvents: function() {

        const likeElements = document.querySelectorAll('.btn__like');

        for (const likeElement of likeElements) {
            likeElement.addEventListener('click', destinations.handleLikeClick);
        }
    },

    // Handler qui gère le clic sur un bouton like
    handleLikeClick: function(event) {

        const likeElement = event.currentTarget;
        console.log('clic coeur', likeElement);

        const parentCardElement = likeElement.closest('.card');
        console.log(parentCardElement);

        messages.addMessageToElement("Vous devez être connecté pour gérer vos favoris", parentCardElement);
    }

};