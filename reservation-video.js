(function () {
  var EMBED_IFRAME = '<iframe width="560" height="315" src="https://www.youtube.com/embed/0G9pJl5OxdY?si=XFByN6PbHxI4FLDt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>';

  function getLangToggleLabel() {
    var buttons = document.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i += 1) {
      var txt = (buttons[i].textContent || '').trim();
      if (txt.indexOf('🇪🇸 ES') !== -1 || txt.indexOf('🇺🇸 EN') !== -1) {
        return txt;
      }
    }
    return '';
  }

  function isEnglishView() {
    var label = getLangToggleLabel();
    if (!label) return true;
    return label.indexOf('🇪🇸 ES') !== -1;
  }

  function renderReservationVideo() {
    var orderSection = document.getElementById('order');
    if (!orderSection) return;

    var container = orderSection.firstElementChild;
    if (!container) return;

    var existing = container.querySelector('.reservation-video-wrap');

    if (!isEnglishView()) {
      if (existing) existing.remove();
      return;
    }

    if (existing) return;

    var wrap = document.createElement('div');
    wrap.className = 'reservation-video-wrap mb-6 rounded-2xl overflow-hidden';
    wrap.innerHTML = '<div style="position:relative;width:100%;padding-top:56.25%;background:#000;">' + EMBED_IFRAME + '</div>';
    container.insertBefore(wrap, container.firstChild);
  }

  function boot() {
    // Delay slightly to let the app mount fully, then render once.
    window.setTimeout(renderReservationVideo, 250);

    document.addEventListener('click', function (event) {
      var button = event.target.closest('button');
      if (!button) return;

      var label = (button.textContent || '').trim();
      if (label.indexOf('🇪🇸 ES') !== -1 || label.indexOf('🇺🇸 EN') !== -1) {
        window.setTimeout(renderReservationVideo, 150);
      }
    });
  }
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
    const langToggle = Array.from(document.querySelectorAll('button'))
      .map((btn) => (btn.textContent || '').trim())
      .find((txt) => txt.includes('🇪🇸 ES') || txt.includes('🇺🇸 EN'));

    if (langToggle?.includes('🇺🇸 EN')) return false;
    if (langToggle?.includes('🇪🇸 ES')) return true;

    return true;
  };


  const ensureReservationVideo = () => {
    const orderSection = document.getElementById('order');
    if (!orderSection) return;

    const container =
      orderSection.querySelector(':scope > div') ||
      orderSection.querySelector('.max-w-4xl, .max-w-5xl, .max-w-6xl, .max-w-7xl');

    if (!container) return;

    const existingVideo = container.querySelector('.reservation-video-wrap');
    if (!isEnglishView()) {
      existingVideo?.remove();
      return;
    }

    if (existingVideo) return;

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


    document.addEventListener('click', (event) => {
      const button = event.target.closest('button');
      if (!button) return;
      const label = (button.textContent || '').trim();
      if (label.includes('🇪🇸 ES') || label.includes('🇺🇸 EN')) {
        window.setTimeout(ensureReservationVideo, 0);
        window.setTimeout(ensureReservationVideo, 300);
      }
    });
    window.addEventListener('beforeunload', () => observer.disconnect(), { once: true });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
