(function () {
  // This script moves the "Why Europe Said No and America Said Yes" section
  // (currently 3rd section) down by one position, placing it after
  // the "Who Bears the Burden?" section (currently 4th section).

  function reorderSections() {
    const rootContainer = document.querySelector("#root > div");
    if (!rootContainer) return false;

    const sections = rootContainer.querySelectorAll(":scope > section");

    // We need at least 4 sections to perform the swap
    if (sections.length < 4) return false;

    // Section indices (0-based):
    // 0 = Hero
    // 1 = The 24% Problem
    // 2 = Why Europe Said No (Forbidden Ingredients) — move this DOWN
    // 3 = Who Bears the Burden? — this moves UP
    // 4+ = rest

    const europeSection = sections[2];  // "Why Europe Said No"
    const burdenSection = sections[3];  // "Who Bears the Burden?"

    // Verify we have the right sections by checking for known text
    const europeSectionText = europeSection.innerText || europeSection.textContent || "";
    const burdenSectionText = burdenSection.innerText || burdenSection.textContent || "";

    const isEuropeSection = europeSectionText.includes("Europe Said No") || europeSectionText.includes("Forbidden");
    const isBurdenSection = burdenSectionText.includes("Bears the Burden") || burdenSectionText.includes("Disparity");

    if (!isEuropeSection || !isBurdenSection) {
      // Sections not yet rendered, retry
      return false;
    }

    // Perform the swap: insert europeSection after burdenSection
    // burdenSection is currently at index 3, europeSection at index 2
    // After swap: burdenSection at index 2, europeSection at index 3
    const parent = europeSection.parentNode;
    const afterBurden = burdenSection.nextElementSibling;

    if (afterBurden) {
      parent.insertBefore(europeSection, afterBurden);
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

    window.requestAnimationFrame(attemptReorder);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWhenReady, { once: true });
  } else {
    initWhenReady();
  }
})();
