(function () {
  var EMBED_IFRAME_EN = '<iframe src="https://player.vimeo.com/video/1171498475?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;border:0;" title="Kidney Detox"></iframe>';
  var EMBED_IFRAME_ES = '<iframe width="560" height="315" src="https://www.youtube.com/embed/uzxFkSD3cGs?si=GrOistQTpq73wdcc&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>';

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

  function isSpanishView() {
    var label = getLangToggleLabel();
    if (!label) return false;
    return label.indexOf('🇺🇸 EN') !== -1;
  }

  function renderReservationVideo() {
    var orderSection = document.getElementById('order');
    if (!orderSection) return;

    var container = orderSection.firstElementChild;
    if (!container) return;

    var existing = container.querySelector('.reservation-video-wrap');

    // Show video for both English and Spanish views
    var shouldShowVideo = isEnglishView() || isSpanishView();
    if (!shouldShowVideo) {
      if (existing) existing.remove();
      return;
    }

    // Remove existing video to replace it with the correct language version
    if (existing) existing.remove();

    var wrap = document.createElement('div');
    wrap.className = 'reservation-video-wrap mb-6 rounded-2xl overflow-hidden';
    var embedIframe = isSpanishView() ? EMBED_IFRAME_ES : EMBED_IFRAME_EN;
    wrap.innerHTML = '<div style="position:relative;width:100%;padding-top:56.25%;background:#000;">' + embedIframe + '</div>';
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
