(function () {
  // This script ensures the correct section order:
  // ... → Symptom Recognition → The Perfect Business Model (Dialysis) → The Forbidden Ingredients → ...
  //
  // It runs ONCE at 3500ms (after all dynamic sections are injected) and
  // places Dialysis immediately before Forbidden Ingredients.
  // It does NOT retry after success to avoid re-ordering already-correct sections.

  function reorderSections() {
    // Find the Forbidden Ingredients / Europe section
    var europeSection = document.getElementById('truth');
    if (!europeSection) {
      var sections = document.querySelectorAll('section');
      for (var i = 0; i < sections.length; i++) {
        var text = sections[i].innerText || sections[i].textContent || '';
        if (text.includes('Europe Said No') || text.includes('Forbidden Ingredients')) {
          europeSection = sections[i];
          break;
        }
      }
    }
    if (!europeSection) return false;

    // Find the Dialysis section
    var dialysisSection = document.getElementById('dialysis-business-model');
    if (!dialysisSection) {
      var allSections = document.querySelectorAll('section');
      for (var j = 0; j < allSections.length; j++) {
        var t = allSections[j].innerText || allSections[j].textContent || '';
        if (t.includes('Dialysis Machine') || t.includes('$90,000') || t.includes('ESRD entitlement')) {
          dialysisSection = allSections[j];
          break;
        }
      }
    }
    if (!dialysisSection) return false;

    // Check if Dialysis is already immediately before Forbidden Ingredients
    if (europeSection.previousElementSibling === dialysisSection) {
      return true; // Already correct, do nothing
    }

    // Move Dialysis to immediately before Forbidden Ingredients
    europeSection.parentNode.insertBefore(dialysisSection, europeSection);

    if (window.AOS) {
      if (typeof window.AOS.refreshHard === 'function') window.AOS.refreshHard();
      else if (typeof window.AOS.refresh === 'function') window.AOS.refresh();
    }

    return true;
  }

  function initWhenReady() {
    // Run once at 3500ms — after all dynamic sections (dialysis + kidney symptom) are injected
    setTimeout(function () {
      reorderSections();
    }, 3500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWhenReady, { once: true });
  } else {
    initWhenReady();
  }
})();
