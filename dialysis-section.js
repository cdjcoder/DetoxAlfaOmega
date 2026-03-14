(function () {
  var SECTION_ID = "dialysis-business-model";

  // ─── Language detection ───────────────────────────────────────────────────
  function isSpanish() {
    var btn = document.querySelector("button");
    return btn && btn.textContent.includes("EN");
  }

  // ─── Inject responsive CSS once ──────────────────────────────────────────
  function injectStyles() {
    if (document.getElementById("dm-styles")) return;
    var style = document.createElement("style");
    style.id = "dm-styles";
    style.textContent = [
      ".dm-wrap { max-width: 72rem; margin: 0 auto; padding: 0 1.25rem; box-sizing: border-box; }",
      ".dm-header { text-align: center; margin-bottom: 3rem; }",
      ".dm-kicker { display: block; color: #ef4444; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; font-size: .8125rem; font-family: 'Lexend Deca',sans-serif; margin-bottom: .75rem; }",
      ".dm-title { font-size: clamp(1.5rem, 4.5vw, 2.75rem); font-weight: 900; color: #fff; font-family: 'Lexend Deca',sans-serif; letter-spacing: -.02em; line-height: 1.2; margin: 0; word-break: break-word; overflow-wrap: break-word; }",
      /* Two-column grid — collapses to 1 col on mobile */
      ".dm-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; align-items: start; }",
      "@media (max-width: 700px) { .dm-grid { grid-template-columns: 1fr; gap: 2rem; } }",
      /* Text column */
      ".dm-text { color: #d1d5db; font-family: 'Poppins',sans-serif; font-size: clamp(.875rem, 2.5vw, 1.0625rem); line-height: 1.75; word-break: break-word; overflow-wrap: break-word; }",
      ".dm-text p { margin: 0 0 1.25rem; }",
      ".dm-text p:last-child { margin-bottom: 0; }",
      ".dm-quote { background: rgba(0,0,0,.6); border: 1px solid #7f1d1d; border-radius: 1rem; padding: 1.25rem 1.5rem; margin: 1.25rem 0; }",
      ".dm-quote p { color: #fca5a5; font-weight: 700; font-size: clamp(.875rem, 2.5vw, 1.0625rem); margin: 0; font-style: italic; font-family: 'Lexend Deca',sans-serif; line-height: 1.6; }",
      ".dm-text .dm-muted { color: #9ca3af; font-size: clamp(.8125rem, 2vw, .9375rem); }",
      /* Image column */
      ".dm-img-col { display: flex; flex-direction: column; gap: 1.25rem; }",
      ".dm-img-wrap { border-radius: 1.25rem; overflow: hidden; border: 1px solid #1f2937; }",
      ".dm-img-wrap img { width: 100%; height: auto; max-height: 320px; object-fit: cover; display: block; border-radius: 1.25rem; }",
      /* Step pipeline */
      ".dm-steps { display: grid; grid-template-columns: repeat(5, 1fr); gap: .5rem; }",
      "@media (max-width: 700px) { .dm-steps { grid-template-columns: 1fr 1fr; } }",
      "@media (max-width: 360px) { .dm-steps { grid-template-columns: 1fr; } }",
      ".dm-step { background: #111827; border: 1px solid #1f2937; border-radius: .75rem; padding: .75rem .625rem; text-align: center; }",
      ".dm-step-num { width: 1.75rem; height: 1.75rem; border-radius: 50%; background: #b91c1c; color: #fff; font-weight: 900; font-size: .75rem; display: flex; align-items: center; justify-content: center; margin: 0 auto .5rem; }",
      ".dm-step p { color: #9ca3af; font-size: .75rem; line-height: 1.45; font-family: 'Poppins',sans-serif; margin: 0; word-break: break-word; overflow-wrap: break-word; }"
    ].join("\n");
    document.head.appendChild(style);
  }

  // ─── Build step cards ─────────────────────────────────────────────────────
  function buildSteps(steps) {
    return steps.map(function (text, i) {
      return '<div class="dm-step">'
        + '<div class="dm-step-num">' + (i + 1) + '</div>'
        + '<p>' + text + '</p>'
        + '</div>';
    }).join("");
  }

  // ─── Build section HTML ───────────────────────────────────────────────────
  function buildHTML(lang) {
    var g = lang === "en";

    var stepsEN = [
      "Allow harmful additives via regulatory capture",
      "Diabetes & hypertension rates skyrocket",
      "35M Americans develop CKD",
      "Pharma manages symptoms, not causes",
      "Kidneys fail \u2192 dialysis"
    ];
    var stepsES = [
      "Permitir aditivos da\u00f1inos",
      "Diabetes e hipertensi\u00f3n se disparan",
      "35M con ERC",
      "F\u00e1rmacos gestionan s\u00edntomas",
      "Ri\u00f1ones fallan \u2192 di\u00e1lisis"
    ];
    var steps = g ? stepsEN : stepsES;

    return '<div class="dm-wrap">'
      + '<div class="dm-header">'
      + '<span class="dm-kicker">' + (g ? "The Perfect Business Model" : "El Modelo de Negocio Perfecto") + '</span>'
      + '<h2 class="dm-title">' + (g
        ? "The Dialysis Machine: A $90,000/Year Recurring Revenue Stream"
        : "La M\u00e1quina de Di\u00e1lisis: Un Flujo de Ingresos de $90,000/A\u00f1o") + '</h2>'
      + '</div>'
      + '<div class="dm-grid">'

      // Left — text
      + '<div class="dm-text">'
      + '<p>' + (g
        ? "In 1972, Medicare established the ESRD entitlement program, guaranteeing dialysis coverage regardless of age \u2014 creating a guaranteed payment stream for dialysis providers."
        : "En 1972, Medicare estableci\u00f3 el programa ESRD, garantizando cobertura de di\u00e1lisis sin importar la edad \u2014 creando un flujo de pago garantizado para los proveedores.") + '</p>'
      + '<p>' + (g
        ? "Today, Medicare spends ~$8.1 billion annually on outpatient dialysis. Each patient generates over $90,000/year. Two companies \u2014 Fresenius Medical Care and DaVita \u2014 control ~75% of all U.S. dialysis centers."
        : "Hoy, Medicare gasta ~$8.1 mil millones anuales en di\u00e1lisis ambulatoria. Cada paciente genera m\u00e1s de $90,000/a\u00f1o. Dos empresas controlan el ~75% de los centros de di\u00e1lisis de EE.UU.") + '</p>'
      + '<div class="dm-quote"><p>&ldquo;' + (g
        ? "This is not a healthcare system. This is a duopoly with guaranteed government reimbursement."
        : "Esto no es un sistema de salud. Es un duopolio con reembolso gubernamental garantizado.") + '&rdquo;</p></div>'
      + '<p class="dm-muted">' + (g
        ? "From late 2021 to mid-2023, the U.S. lost ~215 dialysis clinics \u2014 not because fewer people need dialysis, but because the corporations are optimizing portfolios for profit maximization."
        : "Entre finales de 2021 y mediados de 2023, EE.UU. perdi\u00f3 ~215 cl\u00ednicas de di\u00e1lisis \u2014 no porque menos personas necesiten di\u00e1lisis, sino porque las corporaciones est\u00e1n optimizando carteras para maximizar ganancias.") + '</p>'
      + '<p>' + (g
        ? "The system is not broken. It is working exactly as designed \u2014 to keep people sick and dependent."
        : "El sistema no est\u00e1 roto. Est\u00e1 funcionando exactamente como fue dise\u00f1ado \u2014 para mantener a las personas enfermas y dependientes.") + '</p>'
      + '</div>'

      // Right — image + steps
      + '<div class="dm-img-col">'
      + '<div class="dm-img-wrap">'
      + '<img src="./04_dialysis_patient_icu_machine.jpg" alt="' + (g ? "Dialysis patient and machine" : "Paciente en di\u00e1lisis") + '" loading="lazy" />'
      + '</div>'
      + '<div class="dm-steps">' + buildSteps(steps) + '</div>'
      + '</div>'

      + '</div>' // end dm-grid
      + '</div>'; // end dm-wrap
  }

  // ─── Update language ──────────────────────────────────────────────────────
  function updateLanguage() {
    var section = document.getElementById(SECTION_ID);
    if (!section) return;
    section.innerHTML = buildHTML(isSpanish() ? "es" : "en");
  }

  // ─── Insert section ───────────────────────────────────────────────────────
  function insertSection() {
    if (document.getElementById(SECTION_ID)) return true;

    var rootContainer = document.querySelector("#root > div");
    if (!rootContainer) return false;

    var sections = rootContainer.querySelectorAll(":scope > section");
    if (sections.length < 3) return false;

    injectStyles();

    var section = document.createElement("section");
    section.id = SECTION_ID;
    section.className = "dialysis-section";
    section.style.cssText = "padding: 5rem 0; background: linear-gradient(176deg, #0b1230 0%, #060a18 100%); overflow: hidden;";
    section.innerHTML = buildHTML(isSpanish() ? "es" : "en");

    // Insert after the Symptom Recognition section (index 2)
    var symptomSection = sections[2];
    if (symptomSection.nextElementSibling) {
      symptomSection.parentNode.insertBefore(section, symptomSection.nextElementSibling);
    } else {
      symptomSection.parentNode.appendChild(section);
    }

    return true;
  }

  // ─── Watch language toggle ────────────────────────────────────────────────
  function watchLanguageToggle() {
    document.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (btn && (btn.textContent.includes("ES") || btn.textContent.includes("EN"))) {
        setTimeout(updateLanguage, 120);
        setTimeout(updateLanguage, 400);
      }
    }, true);
  }

  // ─── Init ─────────────────────────────────────────────────────────────────
  function initWhenReady() {
    var retries = 0;
    var maxRetries = 80;

    function attemptInsert() {
      var didInsert = insertSection();
      if (!didInsert && retries < maxRetries) {
        retries += 1;
        window.requestAnimationFrame(attemptInsert);
        return;
      }
      watchLanguageToggle();
      if (window.AOS && typeof window.AOS.refreshHard === "function") {
        window.AOS.refreshHard();
      } else if (window.AOS && typeof window.AOS.refresh === "function") {
        window.AOS.refresh();
      }
    }

    window.requestAnimationFrame(attemptInsert);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWhenReady, { once: true });
  } else {
    initWhenReady();
  }
})();
