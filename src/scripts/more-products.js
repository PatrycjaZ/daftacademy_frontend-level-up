const buttonAllProducts = document.querySelector('.first-gallery__button--all');
const cnt = document.querySelector('.first-gallery__button-container');

buttonAllProducts.addEventListener('click', (e) => {
    const divPhotos = document.querySelector(".first-gallery__row-lg");
    const newDiv = divPhotos.cloneNode(true);
    cnt.before(newDiv);
});