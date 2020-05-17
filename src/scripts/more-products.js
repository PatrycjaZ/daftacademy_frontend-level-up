export default function (firstGalleryItems) {
        const firstGallery = document.querySelector('.first-gallery__container');

        let firstGalleryRow = document.createElement('div');
        firstGalleryRow.classList.add('first-gallery__row');
        firstGalleryRow.classList.add('row');
        firstGalleryRow.classList.add('justify-content-center');
        firstGalleryRow.classList.add('row-gallery');
        firstGalleryRow.classList.add('first-gallery__row-lg');

        let showItemsOnPage = 8;
        let currentPage = 1;
        const pagesCounter = Math.ceil(firstGalleryItems.length / showItemsOnPage);
        showProducts(currentPage - 1, showItemsOnPage);

        function showProducts(startIndex, endIndex) {
            let elements = firstGalleryItems.slice(startIndex, endIndex);

            elements.forEach(element => {
                let firstGalleryItem = document.createElement('div');
            firstGalleryItem.classList.add('col-6');
            firstGalleryItem.classList.add('col-lg-3');
            firstGalleryItem.classList.add('first-gallery__card');

            let firstGalleryImage = document.createElement('img');
            firstGalleryImage.classList.add('img-fluid');
            firstGalleryImage.classList.add('first-gallery__image');
            firstGalleryImage.src = `http://${element.imageUrl}`;

            let firstGalleryName = document.createElement('p');
            firstGalleryName.classList.add('first-gallery__name');
            firstGalleryName.innerHTML = element.name;

            let firstGalleryPrice = document.createElement('p');
            firstGalleryPrice.classList.add('first-gallery__price');
            firstGalleryPrice.innerHTML = element.price;

            firstGalleryItem.appendChild(firstGalleryImage);
            firstGalleryItem.appendChild(firstGalleryName);
            firstGalleryItem.appendChild(firstGalleryPrice);
            firstGalleryRow.appendChild(firstGalleryItem);
            })
        }

        firstGallery.appendChild(firstGalleryRow);

        let firstGalleryButContainer = document.createElement('div');
        firstGalleryButContainer.classList.add('row');
        firstGalleryButContainer.classList.add('first-gallery__button-container');
        
        let firstGalleryButton = document.createElement('button');
        firstGalleryButton.classList.add('first-gallery__button--all');
        firstGalleryButton.classList.add('first-gallery__button');
        firstGalleryButton.innerHTML = 'All products';

        firstGalleryButContainer.appendChild(firstGalleryButton);
        firstGallery.appendChild(firstGalleryButContainer);

        firstGalleryButton.onclick = () => {
            showProducts(currentPage * showItemsOnPage, (++currentPage * showItemsOnPage));
            if (currentPage == pagesCounter) {
                firstGalleryButton.style.display = "none";
            }
        } 
};