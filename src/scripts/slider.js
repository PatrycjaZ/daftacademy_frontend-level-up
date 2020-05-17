export default function (carouselItems) {
  carouselItems.forEach(element => {
    const carousel = document.querySelector('.slider__body'),
      content = document.querySelector('.slider__content'),
      next = document.querySelector('.slider__button--next'),
      prev = document.querySelector('.slider__button--prev');
    
    let sliderItem = document.createElement('div');
    sliderItem.classList.add('slider__item');

    let sliderImage = document.createElement('img');
    sliderImage.classList.add('slider__image');
    sliderImage.src = `http://${element.imageUrl}`;

    let sliderItemDesc = document.createElement('p');
    sliderItemDesc.classList.add('slider__item__desc');

    let sliderItemName = document.createElement('span');
    sliderItemName.classList.add('slider__item__name');
    sliderItemName.classList.add('slider__item--transition');
    sliderItemName.innerHTML = element.name;

    let sliderBreak = document.createElement('br');

    let sliderItemPrice = document.createElement('span');
    sliderItemPrice.classList.add('slider__item__price');
    sliderItemPrice.classList.add('slider__item--transition');
    sliderItemPrice.innerHTML = element.price;

    let sliderItemOverlay = document.createElement('div');
    sliderItemOverlay.classList.add('slider__item__overlay');
    sliderItemOverlay.classList.add('slider__item--transition');

    sliderItemDesc.appendChild(sliderItemName);
    sliderItemDesc.appendChild(sliderBreak);
    sliderItemDesc.appendChild(sliderItemPrice);
    sliderItem.appendChild(sliderImage);
    sliderItem.appendChild(sliderItemDesc);
    sliderItem.appendChild(sliderItemOverlay);
    content.appendChild(sliderItem);

    const gap = 30;
  
    next.addEventListener('click', e => {
      carousel.scrollBy(width + gap, 0);
      if (carousel.scrollWidth !== 0) {
        prev.style.display = 'block';
      }
      if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = 'none';
      }
    });
    prev.addEventListener('click', e => {
      carousel.scrollBy(-(width + gap), 0);
      if (carousel.scrollLeft - width - gap <= 0) {
        prev.style.display = 'none';
      }
      if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = 'block';
      }
    });
  
    let width = carousel.offsetWidth;
    window.addEventListener('resize', e => (width = carousel.offsetWidth));
})};