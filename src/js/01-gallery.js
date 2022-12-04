// Add imports above this line
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
galleryContainer.addEventListener("click", event => event.preventDefault());

function createGallary(items) {
    return items.map((item) =>     
    `<a class="gallery__link" href="${item.original}">
    <img class="gallery__image" 
    src="${item.preview}"
    alt="${item.description}"/>
    </a>`)
    .join('');
}

const addGallaryMarkup = createGallary(galleryItems);
galleryContainer.innerHTML = addGallaryMarkup;


new SimpleLightbox('.gallery a', { 
    'captionsData': 'alt',
    'fadeSpeed': 250, 
});