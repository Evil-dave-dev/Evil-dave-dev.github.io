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

  /* ===================== sticky navbar ===================== */
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /* ===================== remove toggle icon and navbar when click navbar link ===================== */
  menuIcon.classList.remove("active");
  navbar.classList.remove("active");
};

/* ===================== check form on typing/submit ===================== */
const form = document.getElementById("form");
const lastname = document.getElementById("lastname");
const firstname = document.getElementById("firstname");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const yourMessage = document.getElementById("yourMessage");

// check on typing
lastname.addEventListener("input", validateLastName);
firstname.addEventListener("input", validateFirstName);
email.addEventListener("input", validateEmail);
phoneNumber.addEventListener("input", validatePhoneNumber);
yourMessage.addEventListener("input", validateYourMessage);

// check on submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateLastName();
  validateFirstName();
  validateEmail();
  validatePhoneNumber();
});

// conditions nom
function validateLastName(e) {
  const lastnameValue = lastname.value.trim();
  if (lastnameValue === "") {
    setErrorFor(lastname, "le nom ne peut pas être vide");
    removeSuccess(lastname);
    setLabel(lastname, lastnameValue);
  } else if (!isName(lastnameValue)) {
    setErrorFor(lastname, "le nom n'est pas valide");
    removeSuccess(lastname);
    setLabel(lastname, lastnameValue);
  } else {
    setSuccesFor(lastname);
    removeError(lastname);
    setLabel(lastname, lastnameValue);
  }
}

// conditions prenom
function validateFirstName(e) {
  const firstnameValue = firstname.value.trim();
  if (firstnameValue === "") {
    setErrorFor(firstname, "le prénom ne peut pas être vide");
    removeSuccess(firstname);
    setLabel(firstname, firstnameValue);
  } else if (!isName(firstnameValue)) {
    setErrorFor(firstname, "le prénom n'est pas valide");
    removeSuccess(firstname);
    setLabel(firstname, firstnameValue);
  } else {
    setSuccesFor(firstname);
    removeError(firstname);
    setLabel(firstname, firstnameValue);
  }
}

// conditions email
function validateEmail(e) {
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

// conditions phone number
function validatePhoneNumber(e) {
  const phoneNumberValue = phoneNumber.value.trim();
  if (phoneNumberValue === "") {
    setErrorFor(phoneNumber, "le numéro ne peut pas être vide");
    removeSuccess(phoneNumber);
    setLabel(phoneNumber, phoneNumberValue);
  } else if (!isNumber(phoneNumberValue)) {
    setErrorFor(phoneNumber, "le numéro doit être en chiffre");
    removeSuccess(phoneNumber);
    setLabel(phoneNumber, phoneNumberValue);
  } else {
    setSuccesFor(phoneNumber);
    removeError(phoneNumber);
    setLabel(phoneNumber, phoneNumberValue);
  }
}

// conditions your message
function validateYourMessage(e) {
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

// restristion numéro
function isNumber(number) {
  return /^((\+)33|0|0033)[1-9](\d{2}){4}$/.test(number);
}
