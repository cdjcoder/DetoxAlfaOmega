(() => {
  const scripts = [
    './parallax.js',
    'https://unpkg.com/aos@2.3.4/dist/aos.js',
    './brand-motion.js',
    './prostate-section.js',
    './countup.js',
    './scroll-performance.js',
    './reservation-video.js',
    './image-lightbox.js',
    'https://player.vimeo.com/api/player.js',
    'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'
  ];

  const loadScript = (src) => new Promise((resolve) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.body.appendChild(script);
  });

  const initJotform = () => {
    if (typeof window.jotformEmbedHandler !== 'function') return;
    window.jotformEmbedHandler("iframe[id='JotFormIFrame-260597174818065']", 'https://form.jotform.com/');
  };

  const boot = async () => {
    for (const src of scripts) {
      // eslint-disable-next-line no-await-in-loop
      await loadScript(src);
    }
    initJotform();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();
