// On sélectionne l'élément du menu
const menuItemElement = document.querySelector('#newsletter-btn');
console.log(menuItemElement);
// On pose l'écouteur d'événement sur le clic
menuItemElement.addEventListener('click', handleClickNewsletterMenu);

// Définition du handler
function handleClickNewsletterMenu(event) {
    event.preventDefault();
    console.log('Je suis dans le handler handleClickNewsletterMenu');

    toggleNewsletter(true);
}

// On sélectionne l'élément croix qui permet de fermer la boîte newsletter
const closeElement = document.querySelector('.newsletter__close');
console.log('croix', closeElement);
// On pose l'écouteur d'événement sur le clic
closeElement.addEventListener('click', handleClickNewsletterClose);

// Définition du handler qui fermer l'encart
function handleClickNewsletterClose() {

    toggleNewsletter(false);
}

function toggleNewsletter(open) {
    // On sélectionne l'encart de la newsletter
    const newsletterPanel = document.querySelector('aside.newsletter');
    // On lui ajouter ou retirer la classe newsletter--on
    if (open) {
        newsletterPanel.classList.add('newsletter--on');
    } else {
        newsletterPanel.classList.remove('newsletter--on');
    }
}


// On sélectionne le formulaire et on place un écouteur sur l'événement submit
const formElement = document.querySelector('aside.newsletter form');
console.log(formElement);
formElement.addEventListener('submit', handleNewsletterSubmit);

// Définition du handler appelé à chaque soumission de formulaire
function handleNewsletterSubmit(event) {
    console.log('Je suis dans handleNewsletterSubmit');

    const emailFieldElement = document.querySelector('#subscriber-email');
    const emailValue = emailFieldElement.value;
    console.log(emailValue);

    if (isForbiddenEmail(emailValue)) {
        // On bloque l'envoi du formulaire
        event.preventDefault();

        //   - Si c'est le cas, on affiche un message d'erreur.
        const newsletterPanel = document.querySelector('aside.newsletter');
        messages.addMessageToElement("Les adresses jetables ne sont pas admises", newsletterPanel);
    }
}

// Tableau des domaines interdits
const forbiddenDomains = [
    '@yopmail.com',
    '@yopmail.fr',
    '@yopmail.net',
    '@cool.fr.nf',
    '@jetable.fr.nf',
    '@courriel.fr.nf',
    '@moncourrier.fr.nf',
    '@monemail.fr.nf',
    '@monmail.fr.nf',
    '@hide.biz.st',
    '@mymail.infos.st',
];

// Fonction dont le rôle est de vérifier si l'email est interdit.
function isForbiddenEmail(email) {


    // Pour vérifier qu'un email est interdit
    for (const domain of forbiddenDomains) {
        // est-ce que l'adresse mail à tester contient le domaine interdit
        if (email.includes(domain)) {
            // si oui, on retourne true (= domaine interdit)
            return true;
        }
    }
    return false;
}