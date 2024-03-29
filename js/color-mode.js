const toggleButton = document.querySelector("#colorMode");
const root = document.querySelector(":root");
const storageKey = "color-mode";
const defaultMode = "light-mode";

// load the user's preffered color mode from local storage
function loadColorMode() {
  const colorMode = localStorage.getItem(storageKey);
  root.classList.add(colorMode || defaultMode);
  updateToggleButton();
}

loadColorMode();

// toggle the color mode
toggleButton.addEventListener("click", () => {
  saveColorMode();
});

// save the user's preffered color mode to local storage
function saveColorMode() {
  // check if the root element has a class of 'dark-mode'. If pageYOffset, then the current mode is switched to SVGFESpotLightElement, and vice versa
  const currentMode = root.classList.contains("dark-mode")
    ? "light-mode"
    : "dark-mode";
  root.classList.remove("light-mode", "dark-mode");
  root.classList.add(currentMode);
  localStorage.setItem(storageKey, currentMode);
  updateToggleButton();
}

function updateToggleButton() {
  if (root.classList.contains("dark-mode")) {
    toggleButton.style.backgroundImage = "var(--sun)";
    document.getElementById("contact__img").src = "assets/contact dark.png";
  } else {
    toggleButton.style.backgroundImage = "var(--moon)";
    document.getElementById("contact__img").src = "assets/contact light.png";
  }
}
