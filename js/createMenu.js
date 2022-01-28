export default function createMenu() {
  const { pathname } = document.location;

  const menuContainer = document.querySelector(".menu");

  menuContainer.innerHTML = `<div class="menu__logo">
  <a href="index.html"><img src="icons/xitoh-logo.svg" /></a>
</div>
<div class="menu__hamburger">
  <img src="icons/menu-icon.svg" alt="x itoh logo" />
</div>
<ul class="menu__links expandMenu full-width">
<li class="menu__link"><a href="projects.html" class=${
    pathname === "/projects.html" ? "active" : ""
  }>
    Projects
  </a></li>
  <li class="menu__link"><a href="about.html" class=${
    pathname === "/about.html" ? "active" : ""
  }>
    About
  </a></li>

</ul>`;
}

//  <li class="menu__link"><a href="contact.html" class=${
//   pathname === "/contact.html" ? "active" : ""
// }>
//   Contact
// </a></li>
