 // Phrases à afficher
 const phrases = [
    "Développeur Web.",
    "Spécialisé Front-end.",
    "Architecte du web.",
    "Passionné du code.",
    "Expert en HTML, CSS, JavaScript",
    "Passionné par le design.",
    "Amoureux du code propre.",
    "Optimisation des performances.",
  ];

  // Durée de l'intervalle entre chaque caractère (en millisecondes)
  const typeInterval = 50;
  
  // Durée de la pause entre chaque phrase (en millisecondes)
  const pauseInterval = 1500;

  // Récupérer l'élément DOM du conteneur de texte
  const textContainer = document.querySelector("h1");

  // Fonction pour animer la machine à écrire
  function typeWriter() {
    let currentPhraseIndex = 0;

    function type() {
      let i = 0;
      const interval = setInterval(function() {
        textContainer.innerHTML += phrases[currentPhraseIndex].charAt(i);
        i++;
        if (i === phrases[currentPhraseIndex].length) {
          clearInterval(interval);
          setTimeout(erase, pauseInterval);
        }
      }, typeInterval);
    }

    function erase() {
      let i = phrases[currentPhraseIndex].length - 1;
      const interval = setInterval(function() {
        textContainer.innerHTML = phrases[currentPhraseIndex].substring(0, i);
        i--;
        if (i < 0) {
          clearInterval(interval);
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          setTimeout(type, pauseInterval);
        }
      }, typeInterval);
    }

    // Lancer l'animation initiale
    type();
  }

  // Lancer l'animation lorsque la page est chargée
  window.onload = typeWriter;