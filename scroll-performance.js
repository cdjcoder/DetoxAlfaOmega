(() => {
  let scrollTimer;

  const setScrolling = () => {
    document.body.classList.add('is-scrolling');
    window.clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout(() => {
      document.body.classList.remove('is-scrolling');
    }, 120);
  };

  window.addEventListener('scroll', setScrolling, { passive: true });
})();
