(function () {
  'use strict';

  // ─── Urgency Pricing Banner for "Reserve Your Kit" section ────────────────
  // Injects a pricing urgency block above the order form showing:
  //   - Original retail value: $1,565
  //   - Special Spring price:  $575
  //   - Savings:               $990 (63% off)
  //   - Urgency CTA to act before price resets
  // Supports English and Spanish via the same language toggle mechanism.

  var CONTENT = {
    en: {
      badge:        '🌸 LIMITED SPRING OFFER',
      tagline:      'This Price Disappears When the Season Ends',
      retailLabel:  'Original Retail Value',
      retailPrice:  '$1,565',
      springLabel:  'Your Spring Price Today',
      springPrice:  '$575',
      savingsLine:  'You Save',
      savingsAmt:   '$990',
      savingsPct:   '63% OFF',
      urgency:      'This special Spring pricing is strictly temporary. Once the season closes, the kit returns to its full retail price of $1,565. Every day you wait is a day your kidneys continue to process the chemical load they were never designed to handle.',
      cta:          '⚡ Act Now — Lock In the $575 Spring Price Before It\'s Gone',
      subCta:       'Price resets to $1,565 at the end of the Spring season. No extensions. No exceptions.',
    },
    es: {
      badge:        '🌸 OFERTA LIMITADA DE PRIMAVERA',
      tagline:      'Este Precio Desaparece Cuando Termine la Temporada',
      retailLabel:  'Valor Original al Por Menor',
      retailPrice:  '$1,565',
      springLabel:  'Tu Precio de Primavera Hoy',
      springPrice:  '$575',
      savingsLine:  'Ahorras',
      savingsAmt:   '$990',
      savingsPct:   '63% DE DESCUENTO',
      urgency:      'Este precio especial de Primavera es estrictamente temporal. Una vez que cierre la temporada, el kit regresa a su precio completo de $1,565. Cada día que esperas es un día más en que tus riñones continúan procesando la carga química para la que nunca fueron diseñados.',
      cta:          '⚡ Actúa Ahora — Asegura el Precio de $575 Antes de Que Desaparezca',
      subCta:       'El precio vuelve a $1,565 al final de la temporada de Primavera. Sin extensiones. Sin excepciones.',
    }
  };

  function isSpanish() {
    // Check the toggle button — if it shows 🇺🇸 EN, Spanish is active
    var btns = document.querySelectorAll('button');
    for (var i = 0; i < btns.length; i++) {
      var t = btns[i].textContent || '';
      if (t.includes('\uD83C\uDDFA\uD83C\uDDF8') || t.includes('🇺🇸')) return true; // 🇺🇸 EN = Spanish mode active
    }
    return false;
  }

  function buildBanner(lang) {
    var c = CONTENT[lang];
    return [
      '<div id="pricing-urgency-banner" style="',
        'background: linear-gradient(135deg, #0f2e0f 0%, #14532d 40%, #166534 70%, #15803d 100%);',
        'border: 2px solid #16a34a;',
        'border-radius: 20px;',
        'padding: 2rem 2rem 1.75rem;',
        'margin-bottom: 2rem;',
        'position: relative;',
        'overflow: hidden;',
        'box-shadow: 0 8px 40px rgba(22,163,74,0.3), 0 2px 12px rgba(0,0,0,0.4);',
      '">',

      // Decorative glow
      '<div style="position:absolute;top:-60px;right:-60px;width:200px;height:200px;',
        'background:radial-gradient(circle,rgba(74,222,128,0.18) 0%,transparent 70%);',
        'pointer-events:none;"></div>',

      // Badge
      '<div style="',
        'display:inline-block;',
        'background:linear-gradient(135deg,#dc2626,#b91c1c);',
        'color:#fff;',
        'font-size:0.72rem;',
        'font-weight:900;',
        'letter-spacing:0.12em;',
        'text-transform:uppercase;',
        'padding:0.35rem 1rem;',
        'border-radius:999px;',
        'margin-bottom:0.85rem;',
        'font-family:\'Lexend Deca\',sans-serif;',
        'box-shadow:0 2px 10px rgba(220,38,38,0.5);',
      '">',
        c.badge,
      '</div>',

      // Tagline
      '<div style="',
        'color:#bbf7d0;',
        'font-size:1.05rem;',
        'font-weight:700;',
        'margin-bottom:1.5rem;',
        'font-family:\'Lexend Deca\',sans-serif;',
        'letter-spacing:-0.01em;',
      '">',
        c.tagline,
      '</div>',

      // Price comparison row
      '<div style="',
        'display:flex;',
        'flex-wrap:wrap;',
        'gap:1rem;',
        'align-items:center;',
        'margin-bottom:1.5rem;',
      '">',

        // Original price (struck through)
        '<div style="',
          'background:rgba(0,0,0,0.3);',
          'border:1px solid rgba(255,255,255,0.12);',
          'border-radius:14px;',
          'padding:1rem 1.5rem;',
          'text-align:center;',
          'flex:1;',
          'min-width:130px;',
        '">',
          '<div style="color:#9ca3af;font-size:0.72rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:0.3rem;font-family:\'Lexend Deca\',sans-serif;">',
            c.retailLabel,
          '</div>',
          '<div style="',
            'color:#ef4444;',
            'font-size:2rem;',
            'font-weight:900;',
            'font-family:\'Lexend Deca\',sans-serif;',
            'text-decoration:line-through;',
            'text-decoration-color:#ef4444;',
            'text-decoration-thickness:3px;',
            'opacity:0.75;',
          '">',
            c.retailPrice,
          '</div>',
        '</div>',

        // Arrow
        '<div style="color:#4ade80;font-size:1.5rem;font-weight:900;flex-shrink:0;">→</div>',

        // Spring price (highlighted)
        '<div style="',
          'background:linear-gradient(135deg,rgba(22,163,74,0.35),rgba(20,83,45,0.5));',
          'border:2px solid #4ade80;',
          'border-radius:14px;',
          'padding:1rem 1.5rem;',
          'text-align:center;',
          'flex:1;',
          'min-width:130px;',
          'box-shadow:0 0 20px rgba(74,222,128,0.25);',
        '">',
          '<div style="color:#86efac;font-size:0.72rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:0.3rem;font-family:\'Lexend Deca\',sans-serif;">',
            c.springLabel,
          '</div>',
          '<div style="',
            'color:#4ade80;',
            'font-size:2.4rem;',
            'font-weight:900;',
            'font-family:\'Lexend Deca\',sans-serif;',
            'line-height:1;',
          '">',
            c.springPrice,
          '</div>',
        '</div>',

        // Savings pill
        '<div style="',
          'background:linear-gradient(135deg,#dc2626,#b91c1c);',
          'border-radius:14px;',
          'padding:1rem 1.25rem;',
          'text-align:center;',
          'flex-shrink:0;',
          'box-shadow:0 4px 16px rgba(220,38,38,0.4);',
        '">',
          '<div style="color:#fca5a5;font-size:0.68rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;font-family:\'Lexend Deca\',sans-serif;">',
            c.savingsLine,
          '</div>',
          '<div style="color:#fff;font-size:1.5rem;font-weight:900;font-family:\'Lexend Deca\',sans-serif;line-height:1.1;">',
            c.savingsAmt,
          '</div>',
          '<div style="color:#fca5a5;font-size:0.78rem;font-weight:800;font-family:\'Lexend Deca\',sans-serif;">',
            c.savingsPct,
          '</div>',
        '</div>',

      '</div>',

      // Urgency paragraph
      '<p style="',
        'color:#bbf7d0;',
        'font-size:0.9rem;',
        'line-height:1.7;',
        'margin-bottom:1.25rem;',
        'border-left:3px solid #4ade80;',
        'padding-left:1rem;',
      '">',
        c.urgency,
      '</p>',

      // CTA button
      '<a href="#order-form" style="',
        'display:block;',
        'background:linear-gradient(135deg,#dc2626,#b91c1c);',
        'color:#fff;',
        'font-weight:900;',
        'font-size:1rem;',
        'font-family:\'Lexend Deca\',sans-serif;',
        'text-align:center;',
        'padding:1rem 1.5rem;',
        'border-radius:14px;',
        'text-decoration:none;',
        'margin-bottom:0.6rem;',
        'box-shadow:0 4px 20px rgba(220,38,38,0.5);',
        'transition:all 0.2s;',
        'letter-spacing:-0.01em;',
      '">',
        c.cta,
      '</a>',

      // Sub-CTA note
      '<p style="',
        'color:#6ee7b7;',
        'font-size:0.75rem;',
        'text-align:center;',
        'margin:0;',
        'font-weight:600;',
      '">',
        '⏰ ', c.subCta,
      '</p>',

      '</div>'
    ].join('');
  }

  function injectOrUpdateBanner() {
    var lang = isSpanish() ? 'es' : 'en';

    // Find the order section
    var orderSection = document.getElementById('order');
    if (!orderSection) return false;

    // Find or update the banner
    var existing = document.getElementById('pricing-urgency-banner');
    if (existing) {
      var wrapper2 = document.createElement('div');
      wrapper2.innerHTML = buildBanner(lang);
      existing.replaceWith(wrapper2.firstChild);
      return true;
    }

    // Find the grid (the two-column layout with kit details + form)
    var grid = orderSection.querySelector('.grid.grid-cols-1.lg\\:grid-cols-2');
    if (!grid) {
      // Fallback: any grid inside the order section
      grid = orderSection.querySelector('.grid');
    }
    if (!grid) return false;

    var wrapper = document.createElement('div');
    wrapper.innerHTML = buildBanner(lang);
    var banner = wrapper.firstChild;

    // Insert before the grid (inside the max-w-5xl container)
    grid.parentNode.insertBefore(banner, grid);
    return true;
  }

  // Run after DOM is ready
  function init() {
    var success = injectOrUpdateBanner();
    if (!success) {
      // Retry until the section is rendered
      var attempts = 0;
      var interval = setInterval(function () {
        attempts++;
        if (injectOrUpdateBanner() || attempts > 60) {
          clearInterval(interval);
        }
      }, 200);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }

  // Re-render when language toggle is clicked
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('button');
    if (!btn) return;
    var t = btn.textContent || '';
    if (t.includes('ES') || t.includes('EN')) {
      setTimeout(function () {
        var existing = document.getElementById('pricing-urgency-banner');
        if (existing) {
          var lang = isSpanish() ? 'es' : 'en';
          var wrapper = document.createElement('div');
          wrapper.innerHTML = buildBanner(lang);
          existing.replaceWith(wrapper.firstChild);
        }
      }, 150);
    }
  }, true);

})();
