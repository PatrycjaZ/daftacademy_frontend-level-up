const buttonAllProducts = document.querySelector('.button--all-products');
const cnt = document.querySelector('.button-container');

buttonAllProducts.addEventListener('click', (e) => {
    const divPhotos = document.querySelector(".row-gallery");
    const newDiv = divPhotos.cloneNode(true);
    cnt.before(newDiv);
});