(function () {
  const SECTION_ID = "dialysis-business-model";

  function isSpanish() {
    try {
      if (document.documentElement.lang === "es") return true;
      if (localStorage && localStorage.getItem("lang") === "es") return true;
      if (document.cookie && document.cookie.includes("lang=es")) return true;
      const root = document.getElementById("root");
      if (root && root.getAttribute("data-lang") === "es") return true;
    } catch (e) {}
    return false;
  }

  function buildStepCards(steps) {
    return steps.map(function (text, i) {
      return '<div style="background:#111827;border:1px solid #1f2937;border-radius:0.75rem;padding:0.75rem;text-align:center;">'
        + '<div style="width:1.75rem;height:1.75rem;border-radius:50%;background:#b91c1c;color:white;font-weight:900;font-size:0.75rem;display:flex;align-items:center;justify-content:center;margin:0 auto 0.5rem auto;">' + (i + 1) + '</div>'
        + '<p style="color:#9ca3af;font-size:0.8125rem;line-height:1.4;font-family:\'Poppins\',sans-serif;margin:0;">' + text + '</p>'
        + '</div>';
    }).join("");
  }

  function createDialysisSection() {
    var g = !isSpanish(); // true = English

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
    var stepsHTML = buildStepCards(steps);

    var section = document.createElement("section");
    section.id = SECTION_ID;
    section.className = "dialysis-section";
    section.style.cssText = "padding: 6rem 0; background: linear-gradient(176deg, #0b1230 0%, #060a18 100%);";

    section.innerHTML = '<div style="max-width: 72rem; margin: 0 auto; padding: 0 1.5rem;">'

      // Header
      + '<div style="text-align: center; margin-bottom: 3.5rem;">'
      + '<span style="color: #ef4444; font-weight: bold; letter-spacing: 0.1em; text-transform: uppercase; font-size: 0.875rem; font-family: \'Lexend Deca\', sans-serif; display: block; margin-bottom: 1rem;">'
      + (g ? "The Perfect Business Model" : "El Modelo de Negocio Perfecto")
      + '</span>'
      + '<h2 style="font-size: clamp(1.75rem, 4vw, 3rem); font-weight: 900; margin-top: 0.75rem; margin-bottom: 1.5rem; line-height: 1.2; font-family: \'Lexend Deca\', sans-serif; letter-spacing: -0.03em; color: white;">'
      + (g ? "The Dialysis Machine: A $90,000/Year Recurring Revenue Stream" : "La M\u00e1quina de Di\u00e1lisis: Un Flujo de Ingresos de $90,000/A\u00f1o")
      + '</h2>'
      + '</div>'

      // Two-column grid
      + '<div id="dialysis-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; align-items: start; margin-bottom: 3.5rem;">'

      // Left column: text
      + '<div style="color: #d1d5db; line-height: 1.75; font-size: 1.0625rem; font-family: \'Poppins\', sans-serif;">'
      + '<p style="margin-bottom: 1.5rem;">'
      + (g
        ? "In 1972, Medicare established the ESRD entitlement program, guaranteeing dialysis coverage regardless of age \u2014 creating a guaranteed payment stream for dialysis providers."
        : "En 1972, Medicare estableci\u00f3 el programa ESRD, garantizando cobertura de di\u00e1lisis sin importar la edad \u2014 creando un flujo de pago garantizado para los proveedores.")
      + '</p>'
      + '<p style="margin-bottom: 1.5rem;">'
      + (g
        ? "Today, Medicare spends ~$8.1 billion annually on outpatient dialysis. Each patient generates over $90,000/year. Two companies \u2014 Fresenius Medical Care and DaVita \u2014 control ~75% of all U.S. dialysis centers."
        : "Hoy, Medicare gasta ~$8.1 mil millones anuales en di\u00e1lisis ambulatoria. Cada paciente genera m\u00e1s de $90,000/a\u00f1o. Dos empresas controlan el ~75% de los centros de di\u00e1lisis de EE.UU.")
      + '</p>'
      + '<div style="background: rgba(0,0,0,0.6); border: 1px solid #7f1d1d; border-radius: 1rem; padding: 1.5rem; margin: 1.5rem 0;">'
      + '<p style="color: #fca5a5; font-weight: bold; font-size: 1.0625rem; margin: 0; font-style: italic; font-family: \'Lexend Deca\', sans-serif; line-height: 1.6;">'
      + (g
        ? '&ldquo;This is not a healthcare system. This is a duopoly with guaranteed government reimbursement.&rdquo;'
        : '&ldquo;Esto no es un sistema de salud. Es un duopolio con reembolso gubernamental garantizado.&rdquo;')
      + '</p>'
      + '</div>'
      + '<p style="color: #9ca3af; font-size: 0.9375rem; line-height: 1.7; margin-bottom: 1.5rem;">'
      + (g
        ? "From late 2021 to mid-2023, the U.S. lost ~215 dialysis clinics \u2014 not because fewer people need dialysis, but because the corporations are optimizing portfolios for profit maximization."
        : "Entre finales de 2021 y mediados de 2023, EE.UU. perdi\u00f3 ~215 cl\u00ednicas de di\u00e1lisis \u2014 no porque menos personas necesiten di\u00e1lisis, sino porque las corporaciones est\u00e1n optimizando carteras para maximizar ganancias.")
      + '</p>'
      + '<p style="color: #d1d5db; font-size: 1.0625rem; line-height: 1.75; margin-bottom: 0;">'
      + (g
        ? "The system is not broken. It is working exactly as designed \u2014 to keep people sick and dependent."
        : "El sistema no est\u00e1 roto. Est\u00e1 funcionando exactamente como fue dise\u00f1ado \u2014 para mantener a las personas enfermas y dependientes.")
      + '</p>'
      + '</div>'

      // Right column: image + step cards
      + '<div>'
      + '<div style="border-radius: 1.25rem; overflow: hidden; border: 1px solid #1f2937; margin-bottom: 1.5rem;">'
      + '<img src="./04_dialysis_patient_icu_machine.jpg" alt="' + (g ? "Dialysis patient and machine" : "Paciente en di\u00e1lisis") + '" '
      + 'style="width: 100%; object-fit: cover; height: clamp(200px, 30vw, 320px); border-radius: 1.25rem; display: block;" loading="lazy" />'
      + '</div>'
      + '<div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.5rem;">'
      + stepsHTML
      + '</div>'
      + '</div>'

      + '</div>' // end grid
      + '</div>'; // end max-width container

    return section;
  }

  function insertSection() {
    if (document.getElementById(SECTION_ID)) return true;

    var rootContainer = document.querySelector("#root > div");
    if (!rootContainer) return false;

    var sections = rootContainer.querySelectorAll(":scope > section");
    if (sections.length < 3) return false;

    var newSection = createDialysisSection();

    // Insert after the Symptom Recognition section (index 2)
    var symptomSection = sections[2];
    if (symptomSection.nextElementSibling) {
      symptomSection.parentNode.insertBefore(newSection, symptomSection.nextElementSibling);
    } else {
      symptomSection.parentNode.appendChild(newSection);
    }

    // Add responsive CSS
    if (!document.getElementById("dialysis-responsive-style")) {
      var style = document.createElement("style");
      style.id = "dialysis-responsive-style";
      style.textContent = "@media (max-width: 768px) { #dialysis-grid { grid-template-columns: 1fr !important; } }";
      document.head.appendChild(style);
    }

    return true;
  }

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
