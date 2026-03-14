(function () {
  const SECTION_ID = "dialysis-business-model";

  function createDialysisSection() {
    const section = document.createElement("section");
    section.id = SECTION_ID;
    section.className = "dialysis-section";
    section.style.cssText = "padding: 6rem 0; background: linear-gradient(176deg, rgb(11, 18, 48) 0%, rgb(6, 10, 24) 100%);";

    section.innerHTML = `
      <div style="max-width: 80rem; margin: 0 auto; padding: 0 1.5rem;">
        <div style="text-align: center; margin-bottom: 3.5rem;">
          <span style="color: rgb(239, 68, 68); font-weight: bold; letter-spacing: 0.1em; text-transform: uppercase; font-size: 0.875rem; font-family: 'Lexend Deca', sans-serif; display: block; margin-bottom: 1rem;">The Perfect Business Model</span>
          <h2 style="font-size: 2.25rem; font-weight: 900; margin-top: 0.75rem; margin-bottom: 1.5rem; line-height: 1.2; font-family: 'Lexend Deca', sans-serif; letter-spacing: -0.03em; color: white;">The Dialysis Machine: A $90,000/Year Recurring Revenue Stream</h2>
        </div>
        <div style="display: grid; grid-template-columns: 1fr; gap: 2.5rem; align-items: start; margin-bottom: 3.5rem;">
          <div style="animation: fadeInUp 0.6s ease-out 0.1s both;">
            <div style="color: rgb(209, 213, 219); line-height: 1.75; font-size: 1.125rem;">
              <p style="margin-bottom: 1.5rem;">In 1972, Medicare established the ESRD entitlement program, guaranteeing dialysis coverage regardless of age — creating a guaranteed payment stream for dialysis providers.</p>
              <p style="margin-bottom: 1.5rem;">Today, Medicare spends ~$8.1 billion annually on outpatient dialysis. Each patient generates over $90,000/year. Two companies — Fresenius Medical Care and DaVita — control ~75% of all U.S. dialysis centers.</p>
              <div style="background: rgba(0, 0, 0, 0.5); border-radius: 1rem; padding: 2rem; margin: 2rem 0; border-left: 4px solid rgb(239, 68, 68);">
                <p style="color: rgb(254, 167, 127); font-size: 1.25rem; font-weight: bold; margin: 0; font-style: italic;">"This is not a healthcare system. This is a duopoly with guaranteed government reimbursement."</p>
              </div>
              <p style="margin-bottom: 1.5rem;">From late 2021 to mid-2023, the U.S. lost ~215 dialysis clinics — not because fewer people need dialysis, but because smaller operators cannot compete with the duopoly's infrastructure and government contracts.</p>
              <p style="margin-bottom: 1.5rem;">The system is not broken. It is working exactly as designed — to keep people sick and dependent.</p>
            </div>
          </div>
        </div>
      </div>
    `;

    return section;
  }

  function insertSection() {
    if (document.getElementById(SECTION_ID)) return true;

    const rootContainer = document.querySelector("#root > div");
    if (!rootContainer) return false;

    const sections = rootContainer.querySelectorAll(":scope > section");
    const newSection = createDialysisSection();

    // Insert after the Symptom Recognition section (which is at index 2)
    if (sections.length >= 3) {
      const symptomSection = sections[2];
      if (symptomSection.nextElementSibling) {
        symptomSection.parentNode.insertBefore(newSection, symptomSection.nextElementSibling);
      } else {
        symptomSection.parentNode.appendChild(newSection);
      }
    } else if (sections.length >= 2) {
      const secondSection = sections[1];
      if (secondSection.nextElementSibling) {
        secondSection.parentNode.insertBefore(newSection, secondSection.nextElementSibling);
      } else {
        secondSection.parentNode.appendChild(newSection);
      }
    } else if (sections.length === 1) {
      const firstSection = sections[0];
      if (firstSection.nextElementSibling) {
        firstSection.parentNode.insertBefore(newSection, firstSection.nextElementSibling);
      } else {
        firstSection.parentNode.appendChild(newSection);
      }
    } else {
      rootContainer.appendChild(newSection);
    }

    return true;
  }

  function initWhenReady() {
    let retries = 0;
    const maxRetries = 60;

    const attemptInsert = () => {
      const didInsert = insertSection();
      if (!didInsert && retries < maxRetries) {
        retries += 1;
        window.requestAnimationFrame(attemptInsert);
        return;
      }

      if (window.AOS && typeof window.AOS.refreshHard === "function") {
        window.AOS.refreshHard();
      } else if (window.AOS && typeof window.AOS.refresh === "function") {
        window.AOS.refresh();
      }
    };

    window.requestAnimationFrame(attemptInsert);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWhenReady, { once: true });
  } else {
    initWhenReady();
  }
})();
