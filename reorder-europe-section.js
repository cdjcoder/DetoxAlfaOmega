(function () {
  // This script ensures the correct section order:
  // ... → Symptom Recognition → The Perfect Business Model (Dialysis) → The Forbidden Ingredients → ...
  // It finds both sections by ID/content and inserts Dialysis immediately before Forbidden Ingredients.

  function reorderSections() {
    // Find the Forbidden Ingredients / Europe section
    var europeSection = null;
    var sections = document.querySelectorAll('section');
    for (var i = 0; i < sections.length; i++) {
      var text = sections[i].innerText || sections[i].textContent || '';
      if (
        text.includes('Europe Said No') ||
        text.includes('Forbidden Ingredients') ||
        sections[i].id === 'truth'
      ) {
        europeSection = sections[i];
        break;
      }
    }
    if (!europeSection) return false;

    // Find the Dialysis section
    var dialysisSection = document.getElementById('dialysis-business-model');
    if (!dialysisSection) {
      for (var j = 0; j < sections.length; j++) {
        var t = sections[j].innerText || sections[j].textContent || '';
        if (t.includes('Dialysis Machine') || t.includes('$90,000') || t.includes('ESRD')) {
          dialysisSection = sections[j];
          break;
        }
      }
    }
    if (!dialysisSection) return false;

    // Check if they are already in the correct order (Dialysis immediately before Europe)
    if (europeSection.previousElementSibling === dialysisSection) {
      return true; // Already correct
    }

    // Move Dialysis to immediately before the Europe/Forbidden section
    europeSection.parentNode.insertBefore(dialysisSection, europeSection);

    if (window.AOS) {
      if (typeof window.AOS.refreshHard === 'function') window.AOS.refreshHard();
      else if (typeof window.AOS.refresh === 'function') window.AOS.refresh();
    }

    return true;
  }

  function initWhenReady() {
    var retries = 0;
    var maxRetries = 80;

    function attemptReorder() {
      var done = reorderSections();
      if (!done && retries < maxRetries) {
        retries++;
        window.requestAnimationFrame(attemptReorder);
      }
    }

    // Wait for React + all dynamic section injections to complete
    // Use 3000ms to ensure kidney-symptom-section.js has already injected its section
    setTimeout(function () {
      window.requestAnimationFrame(attemptReorder);
    }, 3000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWhenReady, { once: true });
  } else {
    initWhenReady();
  }
})();
