// DARK MODE
const checkbox = document.querySelector('input[name=theme]')
checkbox.addEventListener('change', function() {
  if(this.checked) {
    trans()
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    trans()
    document.documentElement.setAttribute('data-theme', 'light')
  }
})
let trans = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition')
    document.documentElement.removeAttribute("class");
  }, 1000)
}

//TRADUCTION
const langEl = document.querySelector('.langWrap')
const link = document.querySelectorAll('.langWrap a')
const titleEl = document.querySelectorAll('.card-title')
const descrEl = document.querySelectorAll('.card-text a')
const swiperEl = document.querySelectorAll('.swiper1 .swiper-slide a')


link.forEach(el => {
  el.addEventListener('click', () => {
    langEl.querySelector('.active').classList.remove('active')
    el.classList.add('active')

    const attr = el.getAttribute('language')
    console.log(data[attr].description1)
    
    titleEl[0].textContent = data[attr].title1
    descrEl[0].textContent = data[attr].description1
    titleEl[1].textContent = data[attr].title2
    descrEl[1].textContent = data[attr].description2
    titleEl[2].textContent = data[attr].title3
    descrEl[2].textContent = data[attr].description3

  })
})

const data = {
  "english": {
    "title1": "Snowboard",
    "description1": "Winter sport, we can't wait for the holidays to find yourself in the Alps to ride like a deglingo",
    "title2": "Skateboard",
    "description2": "Urban sport, while waiting to be able to ride in powder or on water",
    "title3": "Surf",
    "description3": "Normally wakeboarding, but this image was more stylish"
  },
  "french": {
    "title1": "Snowboard",
    "description1": "Sport d'hiver, vivement les vacances pour se retrouver dans les Alpes à rider comme un déglingo",
    "title2": "Skateboard",
    "description2": "Sport urbain, en attendant de pouvoir rider dans la poudreuse ou sur l'eau",
    "title3": "Surf",
    "description3": "Normalement du wakeboard, mais cette image était plus stylée"
  }
}

// INITIALIZE SWIPER1
const swiper1 = new Swiper('.swiper1', {
  spaceBetween: 0,
  speed: 1500,
  centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// INITIALIZE SWIPER2
var swiper2 = new Swiper('.swiper2', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
  rotate: 0,
  stretch: 0,
  depth: 100,
  modifier: 2,
  slideShadows: true,
  },
  loop: true,
});

// INITIALIZE VANILLA TILT
VanillaTilt.init(document.querySelectorAll(".transparentCard"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 1,
});

// PROGRESS BAR
// valeur en pourcentage
const percentage = document.getElementsByClassName('percentage')
// number of cards
const cardSkill = document.querySelectorAll('.transparentCard')

for(let i = 0; i < cardSkill.length; i++) {
  // length progressbar
  const lengthBar = cardSkill[i].querySelector('circle:nth-child(2)')
  lengthBar.style.strokeDashoffset = 630 - (630*percentage[i].innerHTML) / 100;
}

// INITIALIZE POPPER.JS + TIPPY.JS
tippy('[data-tippy-content]', {
  placement: 'top-end',
});


// FORM VALIDATION CLIENT SIDE
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const commentaires = document.getElementById('commentaires');
// check on typing
username.addEventListener('input', validateName);
email.addEventListener('input', validateEmail);
commentaires.addEventListener('input', validateComment);
// check on submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateName ();
  validateEmail ();
  validateComment ();
})
// conditions nom
function validateName (e) {
  const usernameValue = username.value.trim();
  if(usernameValue === '') {
    setErrorFor(username, 'le nom ne peut pas être vide');
    removeSuccess(username)
  } else if(!isName(usernameValue)) {
    setErrorFor(username, 'le nom n\'est pas valide')
    removeSuccess(username)
  } else {
    setSuccesFor(username);
    removeError(username)
  }
}
// conditions email
function validateEmail (e) {
  const emailValue = email.value.trim();
  if(emailValue === '') {
    setErrorFor(email, 'l\'email ne peut pas être vide');
    removeSuccess(email)
  } else if(!isEmail(emailValue)) {
    setErrorFor(email, 'l\'email n\'est pas valide')
    removeSuccess(email)
  } else {
    setSuccesFor(email)
    removeError(email)
  }
}
// conditions commentaire
function validateComment (e) {
  const commentValue = commentaires.value.trim();
  if(commentValue === '') {
    setErrorFor(commentaires, 'le champs commentaire ne peut pas être vide');
    removeSuccess(commentaires)
  } else {
    setSuccesFor(commentaires)
    removeError(commentaires)
  }
}
// set message error
function setErrorFor (input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.classList.add ('error');
}
// remove message error
function removeError (input, message) {
  const formControl = input.parentElement;
  formControl.classList.remove ('error');
}
// set message success
function setSuccesFor (input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.classList.add ('success');
  small.innerText = '';
}
// remove message success
function removeSuccess (input, message) {  
  const formControl = input.parentElement;
  formControl.classList.remove ('success');
}
// restriction email
function isEmail(email) {return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);}
// restristion nom
function isName(username) {return /^([^0-9]*)$/.test(username);}

// INITIALIZE EKKO LIGHTBOX 
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
