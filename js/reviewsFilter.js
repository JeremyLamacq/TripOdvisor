// Module de filtre sur les commentaires
const reviewsFilter = {

    // Méthode d'initialisation du module
    init: function() {

        // On pose les écouteurs d'événement sur les checkbox
        const ratingCheckboxesElements = document.querySelectorAll('.filter input[name="rating"]')
        console.log(ratingCheckboxesElements);

        for (const ratingCheckboxElement of ratingCheckboxesElements) {
            ratingCheckboxElement.addEventListener('click', reviewsFilter.handleClickOnRatingCheckbox);
        }

    },

    // Méthode qui gère le click sur un checkbox rating
    handleClickOnRatingCheckbox: function(event) {
        console.log('Je suis dans handleClickOnRatingCheckbox');

        // On récupère le checkbox cliqué par l'utilisateur
        const ratingCheckboxElement = event.currentTarget;
        console.log(ratingCheckboxElement);

        // On lit la valeur du checkbox
        const checkboxValue = ratingCheckboxElement.value;
        console.log('Valeur du checkbox : ', checkboxValue);

        // Exécution du filtre
        reviewsFilter.toggleReviewsFromRating(checkboxValue);
    },

    // Méthode qui exécute le filtre
    toggleReviewsFromRating: function(rating) {
        const reviewsElements = document.querySelectorAll('article.review');
        console.log('reviewsElements ', reviewsElements);

        // On compare le data-rating de chaque article avec rating qui vient du checkbox
        for (const reviewElement of reviewsElements) {
            if (reviewElement.dataset.rating == rating) {
                reviewElement.classList.toggle('review--hidden');
            }
        }
    }
};