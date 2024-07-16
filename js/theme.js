// Déclaration d'un module thème
const theme = {
    // créer une méthode init
    // Le méthode init est en charge d'initialiser le nécessaire au lancement du module
    init: function() {
        console.log('theme.init : OK');
        // - On sélectionne le bouton : le bouton a l'identifiant theme-switch
        const themeSwitchElement = document.getElementById('theme-switch');

        // - On place un écouteur d'événement sur le bouton
        themeSwitchElement.addEventListener('click', theme.changeTheme);


        // Sélection des boutons de couleur de thème
        const colorButtonsElements = document.getElementsByClassName('theme-button');

        // On place un écouteur sur chaque bouton
        for (const colorButtonElement of colorButtonsElements) {
            colorButtonElement.addEventListener('click', theme.handleThemeColorClick);
        }

        // Au chargement, on vérifie si le localStorage a une valeur à true pour darkMode
        theme.initDarkModeTheme();

        // On regarde dans le localStorage si on a une valeur pour colorTheme
        const colorTheme = localStorage.getItem('colorTheme');
        console.log('localStorage colorTheme ', colorTheme);

        // Si on a une valeur pour colorTheme, on applique le thème de couleur
        if (colorTheme) {
            theme.changeColorTheme(colorTheme);
        }
    },

    // Méthode qui gère le clic sur un bouton de couleur de thème
    handleThemeColorClick: function(event) {
        // On récupère le bouton sur lequel l'utilisateur a cliqué
        const buttonElement = event.currentTarget;

        console.log(buttonElement);

        // On récupère l'identifiant de la pastille
        const buttonId = buttonElement.id;

        console.log(buttonId);

        theme.changeColorTheme(buttonId);

        // sauvegarder le nom du thème dans localStorage
        localStorage.setItem('colorTheme', buttonId);
    },

    // Méthode qui gère la couleur du thème
    // Paramètre themeColor : le thème sélectionné par l'utilisateur
    changeColorTheme: function(themeColor) {
        console.log('méthode changeColorTheme : ', themeColor);

        // On sélectionne le body
        const bodyElement = document.querySelector('body');

        // On supprime les éventuelles classes de thème de couleur présentes dans le body
        bodyElement.classList.remove('theme-red', 'theme-blue', 'theme-green');

        // On ajoute la classe themeColor au body
        bodyElement.classList.add(themeColor);

        // On reconstruit le nom du fichier image logo à partir de themeColor
        // Les fichiers image logo se nomment "img/logo-NOM_THEME.png"
        const logoPath = "img/logo-" + themeColor + ".png";
        console.log(logoPath);

        // On sélectionne le logo
        const logoElement = document.querySelector('.logo__image');

        // On modifie le chemin vers l'image : l'attribut src
        logoElement.src = logoPath;
    },

    // Étape 4 - méthode changeTheme
    changeTheme: function() {
        console.log('theme.changeTheme');
        // On commence par sélectionner la balise body
        const body = document.querySelector('body');
    
        // classList.toggle() permet d'ajouter une classe si elle abstente
        // ou de la supprimer si elle est présente
        body.classList.toggle('theme-dark');

        // Quand on est ici on a gérer le changement de thème
        // => on peut savoir si on est thème dark ou non
        console.log('theme sombre ? ', body.classList.contains('theme-dark'));
        theme.saveToLocalStorage();
        
    },

    // Méthode qui enregistre dans le localStorage l'information sur l'utilisation du thème dark
    saveToLocalStorage: function() {
        // On vérifie si le body contient le thème dark
        // classList.contains() indique si l'élément contient une classe (true) ou non
        const isDark = document.querySelector('body').classList.contains('theme-dark');

        // On transforme la valeur booléenne en chaîne de caractères pour garantir 
        // le bon enregistrement des données
        const isDarkString = JSON.stringify(isDark);

        // On sauvegarde l'activation du thème dark dans le localStorage
        localStorage.setItem('darkMode', isDarkString);
    },

    // Méthode qui lit dans le localStorage l'information sur le darkMode
    // et l'active si nécessaire
    initDarkModeTheme: function() {
        // On récupère la valeur de darkMode dans le localStorage
        const isDarkString = localStorage.getItem('darkMode');

        // On transforme la chaîne de caractères en booléen
        const isDark = JSON.parse(isDarkString);

        // Si le darkMode est actif
        if (isDark) {
            // On applique le thème dark sur le body
            document.querySelector('body').classList.add('theme-dark');
        }
    }
};