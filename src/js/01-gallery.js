import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
};

const createMarkup = ({ preview, original, description }) => `
<div class="gallery__item">
		<a class="gallery__link" href="${original}">
			<img
				class="gallery__image"
				src="${preview}"
				alt="${description}"
			/>
		</a>
	</div>`;

const renderGalleryMarckup = array => {
  refs.gallery.innerHTML = array.map(item => createMarkup(item)).join('');
};

renderGalleryMarckup(galleryItems);

new SimpleLightbox('.gallery .gallery__link', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
