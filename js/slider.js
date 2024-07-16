// Pour le slider on veut ajouter des images dans la section.slider

const slider = {

    // propriété (= variable du module) qui mémorise la position
    // de l'image actuellement affichée
    slideNumber: 0,

    // propriété qui mémorise le nombre d'image
    slideImagesNumber: 0,

    init: function() {
        slider.generateSlider();

        // gestion du clic sur les boutons : on attache un écouteur d'événement
        const buttonsElements = document.getElementsByClassName('slider__btn');
        console.log(buttonsElements);
        // Bouton précédent
        buttonsElements[0].addEventListener('click', slider.handleClickPrevious);
        // Bouton suivant
        buttonsElements[1].addEventListener('click', slider.handleClickNext);
    },

    // Méthode qui permet de passer à l'image précédente
    handleClickPrevious: function() {
        // on décrémente la position actuelle
        slider.slideNumber--;

        // si slideNumber est < 0 on le passe à nombre d'images - 1 pour afficher la dernière image
        if (slider.slideNumber < 0) {
            slider.slideNumber = slider.slideImagesNumber - 1;
        }

        // on affiche l'image
        slider.goToSlide(slider.slideNumber);
    },

    // Méthode qui permet de passer à l'image suivante
    handleClickNext: function() {
        // quelle est la position actuelle => slider.slideNumber

        // on incrémente la position
        slider.slideNumber++;

        // si slideNumber est plus grand que le nombre d'images, on passe à 0 pour afficher la première image
        if (slider.slideNumber > slider.slideImagesNumber - 1) {
            slider.slideNumber = 0;
        }

        // on affiche l'image à la nouvelle position : goToSlide()
        slider.goToSlide(slider.slideNumber);
    },

    // Méthode qui permet d'afficher une image du slider
    // Paramètre newPosition : numéro de l'image à afficher
    goToSlide: function(newPosition) {       
        // newPosition ne doit pas être inférieur à 0
        // newPosition ne doit pas être plus grand que le nombre d'images

        const sliderImagesElements = document.querySelectorAll('.slider__img');
        console.log(sliderImagesElements);

        if (newPosition >= 0 && newPosition < sliderImagesElements.length) {
            // il faut enlever la classe slider__img--current
            document.querySelector('.slider__img--current').classList.remove('slider__img--current');

            // on ajoute la classe à l'image indiquée par newPosition
            sliderImagesElements[newPosition].classList.add('slider__img--current');
        }
    },

    // Méthode qui génère le slider
    generateSlider: function() {
        const sliderImages = [
            'ocean.jpg',
            'ski.jpg',
            'city.jpg'
        ];

        // On mémorise le nombre d'images
        slider.slideImagesNumber = sliderImages.length;

        // sélection du conteneur de l'image
        const sliderContainer = document.querySelector('.slider');

        for (const currentImage of sliderImages) {

            // On crée un élément image
            const newSliderImage = document.createElement('img');

            // On personnalise l'image
            // - ajout de l'attribut src
            newSliderImage.src = 'img/' + currentImage;

            // - ajout de la classe slider__img
            newSliderImage.classList.add('slider__img');

            // - ajout d'un attribut alt
            newSliderImage.alt = 'Image du slider';

            // - ajout de l'image au début du conteneur avec la méthode prepend()
            sliderContainer.prepend(newSliderImage);

        }

        const firstSliderImage = document.querySelector('.slider__img');

        // - ajout de la classe
        firstSliderImage.classList.add('slider__img--current');
    }

}
