// burger
const menuBtn = document.querySelector(".burger__menu"),
  submenu = document.querySelector(".menu"),
  burgerClose = document.querySelector(".burger-close");

function toggleMenu() {
  menuBtn.classList.toggle("opened-burger");
  submenu.classList.toggle("vis__menu");
}



// activeLink
let links = document.querySelectorAll('.menu__link');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(otherLink => {
      otherLink.classList.remove('active__link');
    });
    link.classList.add('active__link');
  });
});


// modalWindow
const modalOverlay = document.querySelector(".modal-overlay");
const modals = document.querySelectorAll(".modal");
const modalBtns = document.querySelectorAll(".modalBtn");
const formBtns = document.querySelectorAll('.form__btn');

modalBtns.forEach((el) => {
  el.addEventListener("click", (e) => {
    let path = e.currentTarget.getAttribute("data-path");

    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });

    document
      .querySelector(`[data-target='${path}']`)
      .classList.add("modal--visible");
    modalOverlay.classList.add("modal-overlay--visible");
  });
});

modalOverlay.addEventListener("click", (e) => {

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code == "Escape") {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
  }
});

// cancelBtn.forEach((canc) => {
//   canc.addEventListener("click", () => {
//     modalOverlay.classList.remove("modal-overlay--visible");
//     modals.forEach((el) => {
//       el.classList.remove("modal--visible");
//     });
//   });
// });