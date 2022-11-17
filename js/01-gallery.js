import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const mapArray = galleryItems
  .map(
    image => `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}" >
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="large-image.jpg"
      alt="${image.description}"
    />
  </a>
</div>`
  )
  .join(' ');

galleryRef.insertAdjacentHTML('beforeend', mapArray);

// ------------------------------------------------------

function filterClick(event) {
  event.preventDefault();
  const dataCheck = event.target.dataset.source;
  if (!dataCheck) {
    return;
  }
  for (const item of galleryItems) {
    if (event.target.alt === item.description) {
      const instance = basicLightbox.create(`
    <img src="${item.original}" width="800" height="600">
`);
      instance.show();
      document.addEventListener('keydown', function (event) {
        if (event.code === 'Escape') {
          instance.close();
        }
      });
    }
  }
}

galleryRef.addEventListener('click', filterClick);
