const switchButton = document.querySelector(".switchLanguage");
const flag = document.querySelector(".switchLanguage");

// Objet contenant les traductions
const translations = {
  en: {
    navbar1: "home",
    navbar2: "about",
    navbar3: "services",
    navbar5: "portfolio",
    navbar6: "contact",
    home1: "Hello I'm",
    home2: "and I'm a <span class='highlight-color'>Frontend Developper</span>",
    download: '<i class="fa-solid fa-cloud-arrow-down"></i>Download CV',
    skills1: 'My <span class="highlight-color">skills</span>',
    readMore: "Read more",
    service1: "Web Developement",
    service2: "Graphic Design",
    portfolioTitle: 'Latest <span class="highlight-color">Project</span>',
    projet1: "Road Trip",
    projet2: "Climbing",
    projet3: "Wakeboard",
    projet4: "Skateboard",
    contactTitle: 'Contact <span class="highlight-color">Me!</span>',
    name: "Name*",
    email: "Email*",
    yourMessage: "Your message",
    submit: "submit",
    footer: "Copyright&#169; 2023 by David Stevenoot | All Rights Reserved.",
  },
  fr: {
    navbar1: "accueil",
    navbar2: "à propos",
    navbar3: "services",
    navbar5: "portfolio",
    navbar6: "contact",
    home1: "Salut je suis",
    home2:
      "et je suis <span class='highlight-color'> développeur Frontend</span>",
    download: '<i class="fa-solid fa-cloud-arrow-down"></i>Télécharger CV',
    skills1: 'Mes <span class="highlight-color">compétences</span>',
    readMore: "Lire plus",
    service1: "Développement Web",
    service2: "Design graphique",
    portfolioTitle: 'Derniers <span class="highlight-color">projets</span>',
    projet1: "Voyages",
    projet2: "Escalade",
    projet3: "Wakeboard",
    projet4: "Skateboard",
    contactTitle: 'Contactez <span class="highlight-color">moi !</span>',
    name: "Nom*",
    email: "Email*",
    yourMessage: "Votre message",
    submit: "envoyez",
    footer:
      "Copyright&#169; 2023 par David Stevenoot | Tous les droits sont réservés",
  },
};

// Fonction pour afficher le contenu en fonction de la langue sélectionnée
function switchLanguage(lang) {
  const elements = document.querySelectorAll("[data-translate]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    } else {
      // Si la traduction pour la clé spécifiée n'existe pas dans la langue sélectionnée, utilisez la langue par défaut (par exemple, l'anglais).
      element.innerHTML = translations["en"][key];
    }
  });
}

// Fonction pour gérer le clic sur le bouton de switch de langue
function handleSwitchButtonClick() {
  // Vous pouvez détecter la langue actuelle de l'utilisateur ici.
  let currentLanguage = document.documentElement; // français par défaut

  if (currentLanguage.lang === "fr") {
    switchLanguage("en");
    currentLanguage.setAttribute("lang", "en");
    flag.innerHTML = "FR";
  } else {
    switchLanguage("fr");
    currentLanguage.setAttribute("lang", "fr");
    flag.innerHTML = "EN";
  }
}

switchButton.addEventListener("click", handleSwitchButtonClick);
