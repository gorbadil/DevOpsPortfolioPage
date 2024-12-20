// Variables
const light_dark = document.querySelector("#light-dark");
const navbar = document.querySelector(".navbar");
// const link = document.querySelectorAll(".link")
const sections = document.querySelectorAll("section");
const hamburger = document.querySelector(".hamburger");
const hamburgerLinks = document.querySelector(".hamburger-links");

// Functions
function changeTheme() {
  const root = document.querySelector(":root");

  if (light_dark.innerHTML === "⏾") {
    root.style.setProperty("--main-bg", getComputedStyle(root).getPropertyValue("--light-bg"));
    root.style.setProperty("--main-text", getComputedStyle(root).getPropertyValue("--light-text"));
    root.style.setProperty("--main-shadow", getComputedStyle(root).getPropertyValue("--light-shadow"));
    light_dark.innerHTML = "☀︎";
  } else {
    root.style.setProperty("--main-bg", getComputedStyle(root).getPropertyValue("--dark-bg"));
    root.style.setProperty("--main-text", getComputedStyle(root).getPropertyValue("--dark-text"));
    root.style.setProperty("--main-shadow", getComputedStyle(root).getPropertyValue("--dark-shadow"));
    light_dark.innerHTML = "⏾";
  }
}

function navbarScroll() {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

function toggleMenu() {
  const nav = document.querySelector("nav");
  hamburgerLinks.classList.toggle("show");
}

function accentLink() {
  sections.forEach((section) => {
    const id = section.getAttribute("id");
    const link = document.querySelector(`[href="#${id}"]`);
    const rect = section.getBoundingClientRect();
    if (rect.top <= 270 && rect.bottom >= 270) {
      link.classList.add("accented");
      console.log(link);
    } else {
      link.classList.remove("accented");
    }
  });
}

// Event Listeners
light_dark.addEventListener("click", changeTheme);
window.addEventListener("scroll", () => {
  navbarScroll();
  accentLink();
});

hamburger.addEventListener("click", toggleMenu);
hamburgerLinks.addEventListener("click", toggleMenu);