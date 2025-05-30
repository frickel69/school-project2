const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
let currentIndex = 0;

function showImage(index) {
  currentIndex = (index + galleryItems.length) % galleryItems.length;
  lightboxImg.src = galleryItems[currentIndex].src;
}

galleryItems.forEach((img, index) => {
  img.addEventListener('click', () => {
    showImage(index);
    lightbox.classList.add('show');
  });
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('show');
  }
});

lightboxPrev.addEventListener('click', (e) => {
  e.stopPropagation();
  showImage(currentIndex - 1);
});

lightboxNext.addEventListener('click', (e) => {
  e.stopPropagation();
  showImage(currentIndex + 1);
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('show')) return;
  if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
  if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  if (e.key === 'Escape') lightbox.classList.remove('show');
});