let btn = document.querySelectorAll("button"),
  menuBtn = document.querySelector("menu__button"),
  modal = document.querySelector(".modal"),
  modalBtn = document.querySelector(".modal__butto"),
  close = document.querySelector(".modal__close-button"),
  inputName = document.querySelector(".input__name"),
  inputPhone = document.querySelector(".input__phone"),
  inputMail = document.querySelector(".input__mail");


  

// open
btn.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.stopPropagation();
    modal.classList.add("modal__visible");
  });
});
// close
close.addEventListener("click", () => {
  modal.classList.remove("modal__visible");
});

document.addEventListener("keydown", (event) => {
  if (event.code == 'Escape') {
    modal.classList.remove("modal__visible");
  } 
});

document.addEventListener("click", (event) => {
  if (
    modal.classList.contains("modal__visible") &&
    !event.target.closest(".modal__form")
  ) {
    modal.classList.remove("modal__visible");
  }
});

$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    var id = $(this).attr("href"),
      top = $(id).offset().top; 

    $("body,html").animate(
      {
        scrollTop: top,
      },
      1500
    );
  });
});
$(document).ready(function () {
  $("#footer-menu").on("click", "a", function (event) {

    var id = $(this).attr("href"),
      top = $(id).offset().top; 

    $("body,html").animate(
      {
        scrollTop: top,
      },
      1500
    );
  });
});

// submit handler









// slider
let swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
});