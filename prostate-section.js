(function () {
  const SECTION_ID = "prostate-truth";

  function createProstateSection() {
    const section = document.createElement("section");
    section.id = SECTION_ID;
    section.className = "prostate-section";

    section.innerHTML = `
      <div class="prostate-wrap">
        <span class="prostate-kicker">Prostate Truth Briefing</span>
        <h2 class="prostate-title">
          The <span class="accent">"Hidden Clog"</span> They Don't Want You to Know About
        </h2>

        <p class="prostate-lead">
          In 2023, researchers at Fukushima Medical University reported findings that should have dominated health headlines:
          the modern male prostate appears to be under constant pressure from cumulative environmental toxin exposure.
          Microplastics. Phthalates. Chemical runoff from processed foods. These compounds do not simply pass through the body.
          Over time, they can contribute to inflammatory stagnation in sensitive prostate tissue.
        </p>

        <div class="prostate-copy">
          <p>
            This is the overlooked pattern behind enlarged prostate symptoms, nighttime urgency, and chronic discomfort for many men.
            Meanwhile, the conventional system often focuses on lifetime symptom management while rarely discussing the upstream toxic burden.
          </p>
        </div>

        <div class="prostate-grid">
          <article class="prostate-card">
            <h3>The Two Ingredients Big Pharma Hopes You Ignore</h3>
            <p>
              While common medications can target hormones or muscle tone, this protocol emphasizes nutritional support aimed at the source:
              inflammation, oxidative stress, and toxic load.
            </p>
          </article>
          <article class="prostate-card">
            <h3>Aloe Vera + Shilajit: Source-Level Support</h3>
            <p>
              Aloe Vera has been studied for support in BPH and chronic prostatitis contexts, while Shilajit's fulvic-acid profile is valued
              for antioxidant and cellular energy support in traditional and modern men's wellness formulations.
            </p>
          </article>
        </div>

        <div class="prostate-copy">
          <h3 class="prostate-title" style="font-size:clamp(1.6rem,1.3rem + 1.4vw,2.6rem);margin-bottom:0.4rem;">
            The Cleanse That Clears the Clog
          </h3>
          <p>
            This is not a daily dependency model. It is a strategic reset: twice per year—Spring and Fall—commit to a focused 7-day renewal window.
          </p>
          <ul class="prostate-list">
            <li><strong>Milk Thistle, Artichoke, and Dandelion</strong> support liver detox pathways before compounds can recirculate and settle.</li>
            <li><strong>Dandelion's gentle diuretic action</strong> helps kidney clearance of water-soluble wastes.</li>
            <li><strong>Aloe Vera and Shilajit</strong> deliver anti-inflammatory and antioxidant support to male genitourinary wellness.</li>
            <li><strong>Vitamin C, Vitamin E, and Magnesium</strong> help shield cells from oxidative stress associated with toxic burden.</li>
          </ul>
        </div>

        <div class="prostate-table-wrap">
          <table class="prostate-table">
            <thead>
              <tr>
                <th>The Industry's Answer</th>
                <th>The Renewal Protocol Approach</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Daily medication for life</td>
                <td>7 days, twice per year</td>
              </tr>
              <tr>
                <td>Manage symptoms</td>
                <td>Address root toxic burden</td>
              </tr>
              <tr>
                <td>Manipulate hormones</td>
                <td>Support natural detoxification pathways</td>
              </tr>
              <tr>
                <td>Treat the prostate in isolation</td>
                <td>Support liver, kidney, and prostate together</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="prostate-cta">
          <p>
            <strong>Your prostate did not ask for this fight.</strong> You did not choose microplastics, phthalates, and additive-heavy food systems.
            But now that you know about the hidden clog model, you can choose a different path.
          </p>
          <p>
            Spring. Fall. Seven days each. Give your body the tools to do what it was designed to do: clean house.
          </p>
          <div class="prostate-actions">
            <a href="#order" class="prostate-btn prostate-btn-primary">Reserve The Protocol</a>
            <a href="#protocol" class="prostate-btn prostate-btn-secondary">Review The 3-Phase System</a>
          </div>
        </div>
      </div>
    `;

    return section;
  }

  function insertSection() {
    if (document.getElementById(SECTION_ID)) return;

    const rootContainer = document.querySelector("#root > div");
    if (!rootContainer) return;

    const protocolAnchor = document.getElementById("protocol");
    const protocolSection = protocolAnchor ? protocolAnchor.closest("section") : null;
    const newSection = createProstateSection();

    if (protocolSection && protocolSection.parentNode) {
      protocolSection.parentNode.insertBefore(newSection, protocolSection);
    } else {
      rootContainer.appendChild(newSection);
    }
  }

  function initWhenReady() {
    window.requestAnimationFrame(() => {
      insertSection();
      if (window.AOS && typeof window.AOS.refreshHard === "function") {
        window.AOS.refreshHard();
      } else if (window.AOS && typeof window.AOS.refresh === "function") {
        window.AOS.refresh();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWhenReady);
  } else {
    initWhenReady();
  }
})();
