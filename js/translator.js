const enBtn = document.getElementById("en");
const frBtn = document.getElementById("fr");
const html = document.documentElement;
const storageKey = "lang";
const defaultMode = "fr";
// calcul de l'age
const birthDate = new Date("1984-06-02");
const currentDate = new Date();
const age = currentDate.getFullYear() - birthDate.getFullYear();

if (
  currentDate.getMonth() < birthDate.getMonth() ||
  (currentDate.getMonth() === birthDate.getMonth() &&
    currentDate.getDate() < birthDate.getDate())
) {
  age--;
}

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
    home3:
      "<p>I grew up in Dunkerque, in the north. My school career ended at university (STAPS&nbsp;license).</br>Afterwards, I lived for a few years doing odd jobs (lifeguard,paramedic, ...).</p><p>But I want to live from my passion so in 2017 I did a professional retraining in a <strong>Web&nbsp;Designer</strong> training at <strong>M2I&nbsp;formation</strong> in Villeneuve d'Ascq.</p><p>After obtaining my qualification, I became a <strong>Web Integrator</strong> at <strong>KIMPLE</strong> in Roubaix. Afterwards, I worked as a <strong>Front-end Developer</strong> at <strong>REEZOCAR</strong> in Wasquehal.</p><p>Today, I continue to evolve as a front-end developer. And I'm also looking to improve myself on javascript frameworks.</p>",
    adress: "live in:Lille",
    age: "age:" + age + " years",
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
    home1: "Hello je suis",
    home2:
      "et je suis <span class='highlight-color'> développeur Frontend</span>",
    home3:
      "<p>J'ai grandi à Dunkerque, dans le Nord. Mon parcours scolaire s'est terminé à la fac (licence&nbsp;STAPS).</br>Suite à cela, j'ai vécu pendant quelques années de petits boulots (maître-nageur, ambulancier, ...).</p><p>Mais je voulais me retrouver dans un secteur qui me passionne alors en 2017 j'ai effectué une reconversion professionnelle dans une formation <strong>Web&nbsp;Designer</strong> chez <strong>M2I formation</strong> à Villeneuve d'Ascq.</p><p>Diplôme en poche, je suis devenu <strong>intégrateur&nbsp;Web</strong> chez <strong>KIMPLE</strong> à Roubaix. Suite à ça, j'ai travaillé en tant que <strong>développeur&nbsp;front-end</strong> chez <strong>REEZOCAR</strong> à Wasquehal.</p><p>Aujourd'hui, je continue à évoluer en tant que développeur front-end. Et je cherche également à me perfectionner sur les frameworks de javascript.</p>",
    adress: "vit à : Lille",
    age: "âge : " + age + " ans",
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
