// Récupérer tous les boutons + du portfolio
const portfolioPlusBtn = document.querySelectorAll(".fa-plus") 
const portfolioArticle = document.querySelectorAll(".portfolio__article-projet")
const portfolioAX = document.querySelectorAll(".portfolio__article-projetX")
const linkPortfolio = document.querySelectorAll(".portfolio__article-projetX a")


let elementPrecedent = null

// Ecoute le click le clique sur un Article portfolio
portfolioArticle.forEach( (element) => {
    element.addEventListener("click", (e) => {
        // Restaure les styles de l'élément précédemment cliqué
        if (elementPrecedent) {
            elementPrecedent.style.cssText = "display: flex;"
        }

        // Cache l'élément cliqué
        element.style.cssText = "display: none;"

        // Applique un style aux éléments de portfolioAX
        portfolioAX.forEach((elementAX) => {
            elementAX.style.cssText = "width: 100%; height: 100%; padding: 0 20px; display: flex; transform: translateY(0); -webkit-transform: translateY(0); overflow: visible; background: linear-gradient(180deg, #1278F6, white); transition: all 0.3s ease-in;";
        })

        // Enregistre l'élément actuellement cliqué comme étant l'élément précédemment cliqué
        elementPrecedent = element
    })
})

linkPortfolio.forEach( (element) => {
    element.addEventListener("click", (e) => {
        e.preventDefault()
        console.log(element)
    })
})