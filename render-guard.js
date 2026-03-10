(() => {
  const showGuard = () => {
    const root = document.getElementById('root');
    if (!root || root.children.length > 0) return;
    if (document.getElementById('renderGuardNotice')) return;

    const notice = document.createElement('div');
    notice.id = 'renderGuardNotice';
    notice.setAttribute('role', 'status');
    notice.style.cssText = [
      'position:fixed',
      'left:50%',
      'bottom:16px',
      'transform:translateX(-50%)',
      'z-index:100000',
      'background:rgba(11,18,32,.92)',
      'color:#e2e8f0',
      'padding:10px 14px',
      'border-radius:10px',
      'font:500 14px/1.4 system-ui,sans-serif',
      'box-shadow:0 10px 30px rgba(0,0,0,.35)'
    ].join(';');
    notice.textContent = 'Still loading… if this persists, please refresh.';
    document.body.appendChild(notice);
  };

  const hideGuard = () => {
    const notice = document.getElementById('renderGuardNotice');
    if (notice) notice.remove();
  };

  window.setTimeout(() => {
    if (document.readyState !== 'complete') return;
    showGuard();
  }, 12000);

  const observer = new MutationObserver(() => {
    const root = document.getElementById('root');
    if (root && root.children.length > 0) {
      hideGuard();
      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
  window.addEventListener('beforeunload', () => observer.disconnect(), { once: true });
})();
