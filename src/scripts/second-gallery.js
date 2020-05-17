export default function (secondGalleryItems) {
    const leftImage = document.querySelector('.second-gallery__card__image--left');
    leftImage.src = `http://${secondGalleryItems[0].imageUrl}`;

    const RightFirstImage = document.querySelector('.second-gallery__card__image--right-1');
    RightFirstImage.src = `http://${secondGalleryItems[1].imageUrl}`;

    const RightSecondImage = document.querySelector('.second-gallery__card__image--right-2');
    RightSecondImage.src = `http://${secondGalleryItems[2].imageUrl}`;

    const RightBottomImage = document.querySelector('.second-gallery__card__image--right-bottom');
    RightBottomImage.src = `http://${secondGalleryItems[3].imageUrl}`;
};