(() => {
  const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/0G9pJl5OxdY';

  const mountVideo = () => {
    const orderSection = document.getElementById('order');
    if (!orderSection || orderSection.querySelector('.reservation-video-wrap')) return;

    const container = orderSection.querySelector('.max-w-4xl, .max-w-5xl, .max-w-6xl, .max-w-7xl') || orderSection.firstElementChild;
    if (!container) return;

    const videoWrap = document.createElement('div');
    videoWrap.className = 'reservation-video-wrap mb-6 rounded-2xl overflow-hidden';
    videoWrap.innerHTML = `
      <div style="position:relative;width:100%;padding-top:56.25%;background:#000;">
        <iframe
          src="${YOUTUBE_EMBED_URL}"
          title="Alfa Omega Detox Video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          style="position:absolute;inset:0;width:100%;height:100%;border:0;"
        ></iframe>
      </div>
    `;

    const insertBeforeTarget = container.querySelector('h2, h3, .mb-6, iframe#JotFormIFrame-260597174818065')?.nextElementSibling || container.firstElementChild;
    container.insertBefore(videoWrap, insertBeforeTarget);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountVideo);
  } else {
    mountVideo();
  }

  window.addEventListener('load', mountVideo);
})();
