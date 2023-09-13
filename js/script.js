import { enableBodyScroll, disableBodyScroll } from "./body-scroll-lock.js";
import {} from "./color-mode.js";
import {} from "./translator.js";

/* ===================== toggle icon navbar ===================== */
let menuIcon = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("active");
  navbar.classList.toggle("active");
};

/* ===================== scroll sections active links ===================== */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // sticky arrowTop
  let arrowTop = document.querySelector(".arrowTop");
  arrowTop.classList.toggle("visible", window.scrollY > 743);

  // remove toggle icon and navbar when click navbar link
  menuIcon.classList.remove("active");
  navbar.classList.remove("active");
};

/* ===================== check form on typing/submit ===================== */
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const yourMessage = document.getElementById("yourMessage");

// check on typing
name.addEventListener("input", validateName);
email.addEventListener("input", validateEmail);
yourMessage.addEventListener("input", validateYourMessage);

// check on submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeSuccess(name);
  removeSuccess(email);
  sendMail();
});

// conditions nom
function validateName() {
  const nameValue = name.value.trim();
  if (nameValue === "") {
    setErrorFor(name, "le nom ne peut pas être vide");
    removeSuccess(name);
    setLabel(name, nameValue);
  } else if (!isName(nameValue)) {
    setErrorFor(name, "le nom n'est pas valide");
    removeSuccess(name);
    setLabel(name, nameValue);
  } else {
    setSuccesFor(name);
    removeError(name);
    setLabel(name, nameValue);
  }
}

// conditions email
function validateEmail() {
  const emailValue = email.value.trim();
  if (emailValue === "") {
    setErrorFor(email, "l'email ne peut pas être vide");
    removeSuccess(email);
    setLabel(email, emailValue);
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "l'email n'est pas valide");
    removeSuccess(email);
    setLabel(email, emailValue);
  } else {
    setSuccesFor(email);
    removeError(email);
    setLabel(email, emailValue);
  }
}

// conditions your message
function validateYourMessage() {
  const yourMessageValue = yourMessage.value.trim();
  if (yourMessageValue === "") {
    setLabel(yourMessage, yourMessageValue);
  } else {
    setLabel(yourMessage, yourMessageValue);
  }
}

// set message error
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const error = formControl.querySelector(".error");
  error.innerText = message;
  formControl.classList.add("error");
}

// remove message error
function removeError(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
}

// set message success
function setSuccesFor(input) {
  const formControl = input.parentElement;
  const error = formControl.querySelector(".error");
  formControl.classList.add("success");
  error.innerText = "";
}

// remove message success
function removeSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("success");
}

// set label
function setLabel(input, inputValue) {
  const label = input.nextElementSibling;
  if (inputValue === "") {
    label.classList.remove("fill");
  } else {
    label.classList.add("fill");
  }
}

// restriction email
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// restristion nom
function isName(name) {
  return /^([^0-9]*)$/.test(name);
}

// send email
(function () {
  emailjs.init("F6aRZTfGgZtK7Sen5");
})();

function sendMail() {
  const params = {
    name: name.value,
    email: email.value,
    yourMessage: yourMessage.value,
  };
  const serviceID = "service_qndthjf";
  const templateID = "template_04qfk2t";

  emailjs
    .send(serviceID, templateID, params)
    .then(() => {
      name.value = "";
      email.value = "";
      yourMessage.value = "";
    })
    .catch((err) => console.log(err));
}

/* ===================== lightbox ===================== */
/**
 * @property {HTMLElement} element
 * @property {string[]} images
 * @property {string} url Image actuellement affichée
 */
class Lightbox {
  static init() {
    const links = Array.from(
      document.querySelectorAll(
        'a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"]'
      )
    );
    const gallery = links.map((link) => link.getAttribute("href"));

    links.forEach((link) =>
      link.addEventListener("click", (e) => {
        e.preventDefault();
        new Lightbox(e.currentTarget.getAttribute("href"), gallery);
      })
    );
  }

  /**
   * @param {string} url URL de l'image
   * @param {string[]} images chemins des images de la lightbox
   */
  constructor(url, images) {
    this.element = this.buildDOM(url);
    this.images = images;
    this.loadImage(url);
    this.onKeyUp = this.onKeyUp.bind(this);
    document.body.appendChild(this.element);
    disableBodyScroll(this.element);
    document.addEventListener("keyup", this.onKeyUp);
  }

  /**
   * @param {string} url URL de l'image
   *
   */
  loadImage(url) {
    this.url = null;
    const image = new Image();
    const container = this.element.querySelector(".lightbox__container");
    const loader = document.createElement("div");
    loader.classList.add("lightbox__loader");
    container.innerHTML = "";
    container.appendChild(loader);
    image.onload = () => {
      container.removeChild(loader);
      container.appendChild(image);
      this.url = url;
    };
    image.src = url;
  }

  /**
   * @param {KeyboardEvent} e
   *
   */
  onKeyUp(e) {
    if (e.key === "Escape") {
      this.close(e);
    } else if (e.key === "ArrowLeft") {
      this.prev(e);
    } else if (e.key === "ArrowRight") {
      this.next(e);
    }
  }
  /**
   * @param {MouseEvent|KeyboardEvent} e
   * ferme la lightbox
   */
  close(e) {
    e.preventDefault();
    this.element.classList.add("fadeOut");
    enableBodyScroll(this.element);
    window.setTimeout(() => {
      this.element.parentElement.removeChild(this.element);
    }, 500);
    document.removeEventListener("keyup", this.onKeyUp);
  }

  /**
   * @param {MouseEvent|KeyboardEvent} e
   * ferme la lightbox
   */
  next(e) {
    e.preventDefault();
    let i = this.images.findIndex((image) => image === this.url);
    if (i === this.images.length - 1) {
      i = -1;
    }
    this.loadImage(this.images[i + 1]);
  }

  /**
   * @param {MouseEvent|KeyboardEvent} e
   * ferme la lightbox
   */
  prev(e) {
    e.preventDefault();
    let i = this.images.findIndex((image) => image === this.url);
    if (i === 0) {
      i = this.images.length - 1;
    }
    this.loadImage(this.images[i - 1]);
  }

  /**
   * @param {string} url URL de l'image
   * @return {HTMLElement}
   */
  buildDOM(url) {
    const dom = document.createElement("div");
    dom.classList.add("lightbox");
    dom.innerHTML = `<button class="lightbox__next">
      <i class="fa-solid fa-chevron-right"></i>
      </button>
      <button class="lightbox__prev">
      <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button class="lightbox__close">
      <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="lightbox__container"></div>`;
    dom
      .querySelector(".lightbox__close")
      .addEventListener("click", this.close.bind(this));
    dom
      .querySelector(".lightbox__next")
      .addEventListener("click", this.next.bind(this));
    dom
      .querySelector(".lightbox__prev")
      .addEventListener("click", this.prev.bind(this));
    return dom;
  }
}

Lightbox.init();
