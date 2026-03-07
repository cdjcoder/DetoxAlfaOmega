(() => {
  const root = document.getElementById('root');
  if (!root) return;

  const overlay = document.createElement('div');
  overlay.className = 'image-lightbox-overlay';
  overlay.innerHTML = `
    <button type="button" class="image-lightbox-close" aria-label="Close image preview">✕</button>
    <img class="image-lightbox-image" alt="Expanded preview" />
  `;

  const closeButton = overlay.querySelector('.image-lightbox-close');
  const previewImage = overlay.querySelector('.image-lightbox-image');

  const closeLightbox = () => {
    overlay.classList.remove('is-open');
    previewImage.removeAttribute('src');
    document.body.classList.remove('lightbox-open');
  };

  const openLightbox = (img) => {
    const src = img.currentSrc || img.src;
    if (!src) return;

    previewImage.src = src;
    previewImage.alt = img.alt || 'Expanded image';
    overlay.classList.add('is-open');
    document.body.classList.add('lightbox-open');
  };

  document.body.appendChild(overlay);

  root.addEventListener('click', (event) => {
    const image = event.target.closest('img');
    if (!image || !root.contains(image) || overlay.contains(image)) return;
    openLightbox(image);
  });

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay || event.target === closeButton) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeLightbox();
    }
  });
})();
