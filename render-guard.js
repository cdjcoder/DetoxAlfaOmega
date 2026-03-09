(() => {
  window.setTimeout(() => {
    const root = document.getElementById('root');
    if (!root || root.children.length > 0 || document.readyState !== 'complete') return;

    root.innerHTML = `
      <div style="min-height:60vh;display:grid;place-items:center;padding:2rem;background:#0b1220;color:#e2e8f0;font-family:system-ui,sans-serif;">
        <div style="max-width:680px;text-align:center;">
          <h1 style="font-size:1.6rem;margin:0 0 .8rem;">Alfa Omega Detox</h1>
          <p style="opacity:.9;line-height:1.6;margin:0 0 1rem;">The page is taking longer than expected to load. Please refresh this page.</p>
        </div>
      </div>
    `;
  }, 12000);
})();
