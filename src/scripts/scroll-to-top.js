const toTop = document.querySelector(".page-content__to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 600) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  }); 