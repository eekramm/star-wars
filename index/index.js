// Toggle the menu
let menu = document.querySelector(".menu");
let menuButton = document.querySelector(".fa-bars");
let closeMenu = document.querySelector(".close-menu");

function toggleMenu() {
  console.log("Clicked Menu Button");
  menu.classList.toggle("menu-show");
  menuButton.classList.toggle("fa-bars-hide");
}

menuButton.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);
