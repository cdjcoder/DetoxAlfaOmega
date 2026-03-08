(() => {
  const EMBED_HTML = `
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/0G9pJl5OxdY?si=XFByN6PbHxI4FLDt"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      loading="lazy"
      style="position:absolute;inset:0;width:100%;height:100%;border:0;"
    ></iframe>
  `;

  const ensureReservationVideo = () => {
    const orderSection = document.getElementById('order');
    if (!orderSection) return;

    const container =
      orderSection.querySelector(':scope > div') ||
      orderSection.querySelector('.max-w-4xl, .max-w-5xl, .max-w-6xl, .max-w-7xl');

    if (!container || container.querySelector('.reservation-video-wrap')) return;

    const videoWrap = document.createElement('div');
    videoWrap.className = 'reservation-video-wrap mb-6 rounded-2xl overflow-hidden';
    videoWrap.innerHTML = `
      <div style="position:relative;width:100%;padding-top:56.25%;background:#000;">
        ${EMBED_HTML}
      </div>
    `;

    container.prepend(videoWrap);
  };

  const boot = () => {
    ensureReservationVideo();

    const root = document.getElementById('root');
    if (!root) return;

    const observer = new MutationObserver(() => {
      ensureReservationVideo();
    });

    observer.observe(root, { childList: true, subtree: true });
    window.addEventListener('beforeunload', () => observer.disconnect(), { once: true });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
