// Récupérer tous les éléments à surveiller
const elementsToWatch = document.querySelectorAll(".js-scroll");
console.log(elementsToWatch);

// Récupérer les numéros js-numberScroll
const numbersToWatch = document.querySelectorAll(".js-numberScroll");
console.log(numbersToWatch);

// Fonction de détection de défilement
function handleScroll() {
    const windowHeight = window.innerHeight;
    const screenCenterY = windowHeight / 2;
    const marginBeforeDisappear = 100; // Marge de 200px avant la disparition

    elementsToWatch.forEach((element) => {
        const elementRect = element.getBoundingClientRect();
        const elementY = elementRect.y;

        if (
            Math.abs(elementY - screenCenterY) < windowHeight / 4 &&
            elementY > marginBeforeDisappear
        ) {
            element.classList.add("js-apparitionDroite");
            // element.style.animation = "apparitionDroiteMobile 0.9s ease-out 1 forwards"; // Ajuste la durée de l'animation ici
        } else {
            // element.classList.add("js-resteFixe");
            // element.style.animation = "resteFixe 0.9s ease-out 1 forwards"
            element.classList.remove("js-apparitionDroite");
            
        }
    })

    numbersToWatch.forEach((element) => {
        const elementRect = element.getBoundingClientRect();
        const elementY = elementRect.y;

        if (
            Math.abs(elementY - screenCenterY) < windowHeight / 4 &&
            elementY > marginBeforeDisappear
        ) {
            element.classList.add("js-numberApparition");
            // element.style.animation = "apparitionDroiteMobile 0.9s ease-out 1 forwards"; // Ajuste la durée de l'animation ici
        } else {
            // element.classList.add("js-resteFixe");
            // element.style.animation = "resteFixe 0.9s ease-out 1 forwards"
            element.classList.remove("js-numberApparition");
            
        }
    });
}

// Ajouter un écouteur d'événement de défilement
window.addEventListener("scroll", handleScroll);

// Appeler la fonction initiale pour vérifier la position au chargement de la page
handleScroll();
