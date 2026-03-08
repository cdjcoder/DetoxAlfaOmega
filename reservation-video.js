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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
