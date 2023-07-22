const menuBtn = document.querySelector(".burger__menu"),
  submenu = document.querySelector(".menu"),
  burgerClose = document.querySelector(".burger-close");

function toggleMenu() {
  menuBtn.classList.toggle("opened-burger");
  submenu.classList.toggle("vis__menu");
}