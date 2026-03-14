(function () {
  'use strict';

  // ─── 1. Mexican flag patch for the language toggle ────────────────────────
  // The React bundle renders the toggle button with 🇪🇸 ES / 🇺🇸 EN.
  // We replace 🇪🇸 with 🇲🇽 so Spanish mode shows the Mexican flag.

  function patchToggleFlag() {
    var btns = document.querySelectorAll('button');
    btns.forEach(function (btn) {
      var t = btn.textContent;
      if (t && t.includes('\uD83C\uDDEA\uD83C\uDDF8')) {
        // Contains 🇪🇸 — replace with 🇲🇽
        btn.textContent = t.replace('\uD83C\uDDEA\uD83C\uDDF8', '\uD83C\uDDF2\uD83C\uDDFD');
      }
    });
  }

  // Run immediately and watch for React re-renders
  patchToggleFlag();

  var observer = new MutationObserver(function () {
    patchToggleFlag();
  });

  observer.observe(document.body, { childList: true, subtree: true, characterData: true });

  // Also re-patch after every click (React updates text after click)
  document.addEventListener('click', function () {
    setTimeout(patchToggleFlag, 80);
    setTimeout(patchToggleFlag, 250);
  }, true);

  // ─── 2. Return-to-top button — fix position ───────────────────────────────
  // Inject CSS that forces the button to stay in the bottom-right corner,
  // fully visible, with a safe margin from the edge.

  function injectBackToTopStyles() {
    if (document.getElementById('btt-fix-styles')) return;
    var style = document.createElement('style');
    style.id = 'btt-fix-styles';
    style.textContent = [
      '#backToTop {',
      '  position: fixed !important;',
      '  bottom: 1.5rem !important;',
      '  right: 1.5rem !important;',
      '  left: auto !important;',
      '  top: auto !important;',
      '  z-index: 99999 !important;',
      '  width: 52px !important;',
      '  height: 52px !important;',
      '  border-radius: 50% !important;',
      '  background: #dc2626 !important;',
      '  color: #fff !important;',
      '  font-size: 1.375rem !important;',
      '  font-weight: 900 !important;',
      '  border: 2px solid rgba(255,255,255,0.25) !important;',
      '  box-shadow: 0 4px 20px rgba(220,38,38,0.55), 0 2px 8px rgba(0,0,0,0.5) !important;',
      '  cursor: pointer !important;',
      '  display: flex !important;',
      '  align-items: center !important;',
      '  justify-content: center !important;',
      '  opacity: 0 !important;',
      '  pointer-events: none !important;',
      '  transform: translateY(12px) !important;',
      '  transition: opacity 0.3s ease, transform 0.3s ease !important;',
      '}',
      '#backToTop.visible {',
      '  opacity: 1 !important;',
      '  pointer-events: auto !important;',
      '  transform: translateY(0) !important;',
      '}',
      '#backToTop:hover {',
      '  background: #b91c1c !important;',
      '  transform: translateY(-3px) !important;',
      '}',
      '@media (max-width: 480px) {',
      '  #backToTop {',
      '    bottom: 1rem !important;',
      '    right: 1rem !important;',
      '    width: 46px !important;',
      '    height: 46px !important;',
      '    font-size: 1.125rem !important;',
      '  }',
      '}'
    ].join('\n');
    document.head.appendChild(style);
  }

  // Ensure the button has the ↑ arrow icon inside it
  function ensureBackToTopContent() {
    var btn = document.getElementById('backToTop');
    if (!btn) return;
    if (!btn.innerHTML.trim()) {
      btn.innerHTML = '&#8679;'; // ⇧ upward arrow
    }
  }

  injectBackToTopStyles();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      ensureBackToTopContent();
      patchToggleFlag();
    }, { once: true });
  } else {
    ensureBackToTopContent();
  }
})();
