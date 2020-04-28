const container = document.querySelector(".container-carousel");
const slides = document.querySelector(".inner");
const prev = document.querySelector(".carousel-button--prev");
const next = document.querySelector(".carousel-button--nex");


container.addEventListener("click", e => {
  if (e.target.classList.contains("carousel-button--prev")) {
    slides.style.transform = "translateX(-33.33333333333333%)";
  } else if (e.target.classList.contains("carousel-button--next")) {
    slides.style.transform = "translatex(-66.6666666667%)";
  }
});