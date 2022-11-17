import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    image => `
  <a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>
`
  )
  .join(' ');

galleryRef.insertAdjacentHTML('beforeend', markup);
// ---------------------------------------------------

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
console.log(lightbox.captionType);
