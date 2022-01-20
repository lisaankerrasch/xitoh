const hamburger = document.querySelector(".menu__hamburger");
const menuLinks = document.querySelector(".menu__links");

hamburger.onclick = function showMenu() {
  menuLinks.classList.toggle("expandMenu");
};
