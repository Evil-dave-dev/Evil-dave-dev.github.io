const enBtn = document.getElementById("en");
const frBtn = document.getElementById("fr");
const html = document.documentElement;
const storageKey = "lang";
const defaultMode = "fr";

// traductions
const translations = {
  en: {
    navbar1: "home",
    navbar2: "skills",
    navbar3: "services",
    navbar4: "projects",
    navbar5: "contact",
    home1: "Hello I'm",
    home2: "and I'm a <span class='highlight-color'>Frontend Developper</span>",
    adress: '<i class="fa-solid fa-house"></i>live in: <strong>Lille</strong>',
    age: '<i class="fa-solid fa-cake-candles"></i>age: 39 years',
    skills1: 'My <span class="highlight-color">skills</span>',
    readMore: "Read more",
    servicesTitle: 'Our <span class="highlight-color">services</span>',
    service1: "Web Developement",
    service2: "Graphic Design",
    portfolioTitle: 'Latest <span class="highlight-color">Project</span>',
    projet1: "Road Trip",
    projet2: "Climbing",
    projet3: "Wakeboard",
    projet4: "Skateboard",
    contactTitle: 'Contact <span class="highlight-color">Me!</span>',
    name: "Full Name*",
    email: "Email*",
    yourMessage: "Your message",
    submit: "submit",
    footer: "Copyright&#169; 2023 by David Stevenoot | All Rights Reserved.",
  },
  fr: {
    navbar1: "accueil",
    navbar2: "compétences",
    navbar3: "services",
    navbar4: "projets",
    navbar5: "contact",
    home1: "Salut je suis",
    home2:
      "et je suis <span class='highlight-color'> développeur Frontend</span>",
    adress: '<i class="fa-solid fa-house"></i>habite à: <strong>Lille</strong>',
    age: '<i class="fa-solid fa-cake-candles"></i>age: 39 ans',
    skills1: 'Mes <span class="highlight-color">compétences</span>',
    readMore: "Lire plus",
    servicesTitle: 'Mes <span class="highlight-color">services</span>',
    service1: "Développement Web",
    service2: "Design graphique",
    portfolioTitle: 'Derniers <span class="highlight-color">projets</span>',
    projet1: "Voyages",
    projet2: "Escalade",
    projet3: "Wakeboard",
    projet4: "Skateboard",
    contactTitle: 'Contactez <span class="highlight-color">moi !</span>',
    name: "Nom entier*",
    email: "Email*",
    yourMessage: "Votre message",
    submit: "envoyez",
    footer:
      "Copyright&#169; 2023 par David Stevenoot | Tous les droits sont réservés",
  },
};

// load the saved language in the local storage
function loadLanguage() {
  const currentLanguage = localStorage.getItem(storageKey);
  html.setAttribute(storageKey, currentLanguage || defaultMode);
  updateLanguage(currentLanguage || defaultMode);
}

loadLanguage();

// click on the buttons
enBtn.addEventListener("click", (btn) => {
  saveLanguage(btn);
});
frBtn.addEventListener("click", (btn) => {
  saveLanguage(btn);
});

// save the language in the local storage
function saveLanguage(btn) {
  html.setAttribute("lang", btn.target.id);
  localStorage.setItem(storageKey, btn.target.id);
  updateLanguage(btn.target.id);
}

// update the chosen language
function updateLanguage(lang) {
  const allId = [enBtn, frBtn];
  allId.forEach(function (el) {
    el.classList.remove("active");
  });
  const btn = document.getElementById(lang);
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
      btn.classList.add("active");
    } else {
      element.innerHTML = translations["fr"][key];
      btn.classList.add("active");
    }
  });
}
