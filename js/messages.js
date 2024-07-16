// Module qui gère les messages d'erreurs

// Déclaration du module "messages"
const messages = {

    // Méthode permettant d'ajouter un message à l'intérieur d'un élément
    addMessageToElement: function(messageContent, parentElement) {
        
        // suppression des anciens messages pour ne pas avoir une accumulation des messages
        messages.removeOldMessages(parentElement);

        // création de l'élément p.message
        const messageElement = document.createElement('p');
        messageElement.classList.add('message');
        messageElement.textContent = messageContent;

        // ajout à parentElement
        parentElement.prepend(messageElement);
    },

    // Méthode qui supprime les messages déjà affichés dans parentElement
    removeOldMessages: function(parentElement) {
        // récupération des messages affichés
        const oldMessagesElements = parentElement.querySelectorAll('p.message');
        console.log(oldMessagesElements);

        // suppression des messages sélectionnés
        for (const oldMessageElement of oldMessagesElements) {
            oldMessageElement.remove();
        }
    }

};