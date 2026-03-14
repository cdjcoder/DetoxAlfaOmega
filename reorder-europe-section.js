(function () {
  // This script moves the "Why Europe Said No and America Said Yes" section
  // (The Forbidden Ingredients) down by one position, placing it after
  // the section that currently follows it.

  function reorderSections() {
    const rootContainer = document.querySelector("#root > div");
    if (!rootContainer) return false;

    const sections = rootContainer.querySelectorAll(":scope > section");

    // We need at least 5 sections to perform the swap
    if (sections.length < 5) return false;

    // Find the "Forbidden Ingredients / Why Europe Said No" section by content
    let europeSection = null;
    let europeSectionIndex = -1;

    for (let i = 0; i < sections.length; i++) {
      const text = (sections[i].innerText || sections[i].textContent || "");
      if (text.includes("Europe Said No") || text.includes("Forbidden Ingredients") || text.includes("Forbidden")) {
        europeSection = sections[i];
        europeSectionIndex = i;
        break;
      }
    }

    if (!europeSection || europeSectionIndex === -1) return false;

    // Get the section immediately after it
    const nextSection = sections[europeSectionIndex + 1];
    if (!nextSection) return false;

    // Perform the swap: move europeSection to after nextSection
    const parent = europeSection.parentNode;
    const afterNext = nextSection.nextElementSibling;

    if (afterNext) {
      parent.insertBefore(europeSection, afterNext);
    } else {
      parent.appendChild(europeSection);
    }

    return true;
  }

  function initWhenReady() {
    let retries = 0;
    const maxRetries = 80;

    const attemptReorder = () => {
      const didReorder = reorderSections();
      if (!didReorder && retries < maxRetries) {
        retries += 1;
        window.requestAnimationFrame(attemptReorder);
        return;
      }

      if (window.AOS && typeof window.AOS.refreshHard === "function") {
        window.AOS.refreshHard();
      } else if (window.AOS && typeof window.AOS.refresh === "function") {
        window.AOS.refresh();
      }
    };

    // Wait for React to render and dynamic sections to be injected
    setTimeout(() => {
      window.requestAnimationFrame(attemptReorder);
    }, 1500);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWhenReady, { once: true });
  } else {
    initWhenReady();
  }
})();
