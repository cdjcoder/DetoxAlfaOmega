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

  const isEnglishView = () => {
    const langToggleText = Array.from(document.querySelectorAll('button'))
      .map((btn) => (btn.textContent || '').trim())
      .find((txt) => txt.includes('🇪🇸 ES') || txt.includes('🇺🇸 EN'));

    if (!langToggleText) return true;
    return langToggleText.includes('🇪🇸 ES');
  };

  const renderReservationVideo = () => {
    const orderSection = document.getElementById('order');
    if (!orderSection) return;

    const container = orderSection.firstElementChild;
    if (!container) return;

    const existing = container.querySelector('.reservation-video-wrap');
    if (!isEnglishView()) {
      existing?.remove();
      return;
    }

    if (existing) return;

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
    renderReservationVideo();

    let attempts = 0;
    const mountRetry = window.setInterval(() => {
      renderReservationVideo();
      attempts += 1;
      if (attempts >= 30) window.clearInterval(mountRetry);
    }, 250);

    document.addEventListener('click', (event) => {
      const button = event.target.closest('button');
      if (!button) return;

      const label = (button.textContent || '').trim();
      if (label.includes('🇪🇸 ES') || label.includes('🇺🇸 EN')) {
        window.setTimeout(renderReservationVideo, 60);
      }
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
