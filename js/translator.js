const switchButton = document.querySelector(".switchLanguage");
const flag = document.querySelector(".switchLanguage__flag");

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
    about1: 'About <span class="highlight-color">Me</span>',
    about2: "Frontend Developper",
    readMore: "Read more",
    service1: "Web Developement",
    service2: "Graphic Design",
    portfolioTitle: 'Latest <span class="highlight-color">Project</span>',
    projet1: "Road Trip",
    projet2: "Climbing",
    projet3: "Wakeboard",
    projet4: "Skateboard",
    contactTitle: 'Contact <span class="highlight-color">Me!</span>',
    lastname: "Last Name*",
    firstname: "First Name*",
    email: "Email*",
    phoneNumber: "Phone Number*",
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
    about1: 'A propos de <span class="highlight-color">moi</span>',
    about2: "Développeur Frontend",
    readMore: "Lire plus",
    service1: "Développement Web",
    service2: "Design graphique",
    portfolioTitle: 'Derniers <span class="highlight-color">projets</span>',
    projet1: "Voyages",
    projet2: "Escalade",
    projet3: "Wakeboard",
    projet4: "Skateboard",
    contactTitle: 'Contactez <span class="highlight-color">moi !</span>',
    lastname: "Nom*",
    firstname: "Prénom*",
    email: "Email*",
    phoneNumber: "Numéro mobile*",
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
  const fr = `<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" class="flag"><path fill="#ED2939" d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z"></path><path fill="#002495" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"></path><path fill="#EEE" d="M12 5h12v26H12z"></path></svg>`;
  const en = `<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" class="flag"><path fill="#00247D" d="M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z"></path><path fill="#CF1B2B" d="M25.14 23l9.712 6.801a3.977 3.977 0 0 0 .99-1.749L28.627 23H25.14zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943V23zm10-10h2.141l9.711-6.8a3.988 3.988 0 0 0-1.937-1.085L23 12.057V13zm-12.141 0L1.148 6.2a3.994 3.994 0 0 0-.991 1.749L7.372 13h3.487z"></path><path fill="#EEE" d="M36 21H21v10h2v-5.836L31.335 31H32a3.99 3.99 0 0 0 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36v-2zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21H0zM36 9a3.983 3.983 0 0 0-1.148-2.8L25.141 13H23v-.943l9.915-6.942A4.001 4.001 0 0 0 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059V9zM13 5v5.837L4.664 5H4a3.985 3.985 0 0 0-2.852 1.2l9.711 6.8H7.372L.157 7.949A3.968 3.968 0 0 0 0 9v.059L5.628 13H0v2h15V5h-2z"></path><path fill="#CF1B2B" d="M21 15V5h-6v10H0v6h15v10h6V21h15v-6z"></path></svg>`;

  if (currentLanguage.lang === "fr") {
    switchLanguage("en");
    currentLanguage.setAttribute("lang", "en");
    flag.innerHTML = fr;
  } else {
    switchLanguage("fr");
    currentLanguage.setAttribute("lang", "fr");
    flag.innerHTML = en;
  }
}

switchButton.addEventListener("click", handleSwitchButtonClick);
