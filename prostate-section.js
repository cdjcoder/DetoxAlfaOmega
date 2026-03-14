(function () {
  const SECTION_ID = "prostate-truth";

  // Bilingual content object
  const CONTENT = {
    en: {
      kicker: "Prostate Truth Briefing",
      title: 'The <span class="accent">"Hidden Clog"</span> They Don\'t Want You to Know About',
      lead: 'In 2023, researchers at Fukushima Medical University reported findings that should have dominated health headlines: the modern male <span class="pk">prostate</span> appears to be under constant pressure from cumulative environmental toxin exposure. Microplastics. Phthalates. Chemical runoff from processed foods. These compounds do not simply pass through the body. Over time, they can contribute to inflammatory stagnation in sensitive <span class="pk">prostate tissue</span>.',
      copy1: 'This is the overlooked pattern behind <span class="pk">enlarged prostate</span> symptoms, <span class="pk">nighttime urgency</span>, and chronic discomfort for many men. Meanwhile, the conventional system often focuses on lifetime symptom management while rarely discussing the upstream toxic burden.',
      card1Title: "The Two Ingredients Big Pharma Hopes You Ignore",
      card1Text: 'While common medications can target hormones or muscle tone, this protocol emphasizes nutritional support aimed at the source: inflammation, oxidative stress, and toxic load on the <span class="pk">prostate</span> and kidneys.',
      card2Title: 'Aloe Vera + Shilajit: Source-Level <span class="pk">Prostate</span> Support',
      card2Text: 'Aloe Vera has been studied for support in <span class="pk">BPH</span> and chronic <span class="pk">prostatitis</span> contexts, while Shilajit\'s fulvic-acid profile is valued for antioxidant and cellular energy support in traditional and modern men\'s <span class="pk">prostate wellness</span> formulations.',
      cleansTitle: "The Cleanse That Clears the Clog",
      cleansText: 'This is not a daily dependency model. It is a strategic reset: twice per year—Spring and Fall—commit to a focused 7-day renewal window to support your <span class="pk">prostate</span>, kidneys, and liver.',
      listItem1: '<strong>Milk Thistle, Artichoke, and Dandelion</strong> support liver detox pathways before compounds can recirculate and settle in <span class="pk">prostate tissue</span>.',
      listItem2: '<strong>Dandelion\'s gentle diuretic action</strong> helps kidney clearance of water-soluble wastes that burden <span class="pk">prostate health</span>.',
      listItem3: '<strong>Aloe Vera and Shilajit</strong> deliver anti-inflammatory and antioxidant support to male <span class="pk">genitourinary</span> and <span class="pk">prostate</span> wellness.',
      listItem4: '<strong>Vitamin C, Vitamin E, and Magnesium</strong> help shield cells from oxidative stress associated with toxic burden on the <span class="pk">prostate</span>.',
      bannerLabel: 'Supporting <span class="pk-light">Prostate</span> &amp; Kidney Health Naturally',
      tableHeader1: "The Industry's Answer",
      tableHeader2: "The Renewal Protocol Approach",
      tableRow1Col1: 'Daily <span class="pk">prostate</span> medication for life',
      tableRow1Col2: '7 days, twice per year',
      tableRow2Col1: 'Manage <span class="pk">prostate</span> symptoms',
      tableRow2Col2: 'Address root toxic burden',
      tableRow3Col1: 'Manipulate hormones',
      tableRow3Col2: 'Support natural detoxification pathways',
      tableRow4Col1: 'Treat the <span class="pk">prostate</span> in isolation',
      tableRow4Col2: 'Support liver, kidney, and <span class="pk">prostate</span> together',
      ctaText1: '<strong>Your <span class="pk">prostate</span> did not ask for this fight.</strong> You did not choose microplastics, phthalates, and additive-heavy food systems. But now that you know about the hidden clog model, you can choose a different path for your <span class="pk">prostate health</span>.',
      ctaText2: 'Spring. Fall. Seven days each. Give your body the tools to do what it was designed to do: clean house.',
      btnReserve: 'Reserve The Protocol',
      btnReview: 'Review The 3-Phase System'
    },
    es: {
      kicker: "Verdad sobre la Próstata",
      title: 'El <span class="accent">"Atasco Oculto"</span> Que No Quieren Que Sepas',
      lead: 'En 2023, investigadores de la Universidad Médica de Fukushima reportaron hallazgos que deberían haber dominado los titulares de salud: la <span class="pk">próstata</span> masculina moderna parece estar bajo presión constante por exposición acumulativa a toxinas ambientales. Microplásticos. Ftalatos. Escurrimiento químico de alimentos procesados. Estos compuestos no simplemente pasan a través del cuerpo. Con el tiempo, pueden contribuir al estancamiento inflamatorio en sensible <span class="pk">tejido prostático</span>.',
      copy1: 'Este es el patrón pasado por alto detrás de síntomas de <span class="pk">próstata agrandada</span>, <span class="pk">urgencia nocturna</span>, e incomodidad crónica para muchos hombres. Mientras tanto, el sistema convencional a menudo se enfoca en la gestión de síntomas de por vida mientras rara vez discute la carga tóxica ascendente.',
      card1Title: "Los Dos Ingredientes Que Big Pharma Espera Que Ignores",
      card1Text: 'Mientras que los medicamentos comunes pueden dirigirse a hormonas o tono muscular, este protocolo enfatiza el apoyo nutricional dirigido a la fuente: inflamación, estrés oxidativo, y carga tóxica en la <span class="pk">próstata</span> y riñones.',
      card2Title: 'Aloe Vera + Shilajit: Apoyo Prostático a Nivel de Fuente',
      card2Text: 'El Aloe Vera ha sido estudiado para apoyo en contextos de <span class="pk">HBP</span> y <span class="pk">prostatitis</span> crónica, mientras que el perfil de ácido fúlvico de Shilajit es valorado por apoyo antioxidante y energía celular en formulaciones tradicionales y modernas de <span class="pk">bienestar prostático</span> masculino.',
      cleansTitle: "La Limpieza Que Despeja el Atasco",
      cleansText: 'Este no es un modelo de dependencia diaria. Es un reinicio estratégico: dos veces al año—Primavera y Otoño—comprométete a una ventana de renovación enfocada de 7 días para apoyar tu <span class="pk">próstata</span>, riñones e hígado.',
      listItem1: '<strong>Cardo Mariano, Alcachofa y Diente de León</strong> apoyan vías de desintoxicación hepática antes de que los compuestos puedan recircular y asentarse en <span class="pk">tejido prostático</span>.',
      listItem2: '<strong>La acción diurética suave del Diente de León</strong> ayuda a la depuración renal de desechos solubles en agua que cargan la <span class="pk">salud prostática</span>.',
      listItem3: '<strong>Aloe Vera y Shilajit</strong> proporcionan apoyo antiinflamatorio y antioxidante al <span class="pk">bienestar genitourinario</span> y <span class="pk">prostático</span> masculino.',
      listItem4: '<strong>Vitamina C, Vitamina E y Magnesio</strong> ayudan a proteger las células del estrés oxidativo asociado con la carga tóxica en la <span class="pk">próstata</span>.',
      bannerLabel: 'Apoyando la Salud de la <span class="pk-light">Próstata</span> y Riñones Naturalmente',
      tableHeader1: "La Respuesta de la Industria",
      tableHeader2: "El Enfoque del Protocolo de Renovación",
      tableRow1Col1: 'Medicamento <span class="pk">prostático</span> diario de por vida',
      tableRow1Col2: '7 días, dos veces al año',
      tableRow2Col1: 'Gestionar síntomas <span class="pk">prostáticos</span>',
      tableRow2Col2: 'Abordar la carga tóxica raíz',
      tableRow3Col1: 'Manipular hormonas',
      tableRow3Col2: 'Apoyar vías naturales de desintoxicación',
      tableRow4Col1: 'Tratar la <span class="pk">próstata</span> de forma aislada',
      tableRow4Col2: 'Apoyar hígado, riñón y <span class="pk">próstata</span> juntos',
      ctaText1: '<strong>Tu <span class="pk">próstata</span> no pidió esta lucha.</strong> No elegiste microplásticos, ftalatos, y sistemas de alimentos cargados de aditivos. Pero ahora que sabes sobre el modelo del atasco oculto, puedes elegir un camino diferente para tu <span class="pk">salud prostática</span>.',
      ctaText2: 'Primavera. Otoño. Siete días cada uno. Dale a tu cuerpo las herramientas para hacer lo que fue diseñado para hacer: limpiar la casa.',
      btnReserve: 'Reserva El Protocolo',
      btnReview: 'Revisa El Sistema de 3 Fases'
    }
  };

  function isSpanishMode() {
    // Check for button with US flag emoji (English mode indicator)
    // When toggle shows 🇺🇸 EN, we're in English mode (Spanish mode = false)
    // When toggle shows 🇲🇽 ES, we're in Spanish mode (Spanish mode = true)
    var buttons = document.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      var text = buttons[i].textContent || '';
      if (text.includes('🇺🇸')) return false; // US flag = English mode
      if (text.includes('🇲🇽')) return true;  // Mexican flag = Spanish mode
    }
    return false; // Default to English if no flag found
  }

  function createProstateSection(lang = 'en') {
    const c = CONTENT[lang] || CONTENT.en;
    const section = document.createElement("section");
    section.id = SECTION_ID;
    section.className = "prostate-section";
    section.setAttribute('data-lang', lang);

    section.innerHTML = `
      <div class="prostate-wrap">
        <span class="prostate-kicker">
          <span class="prostate-kicker-dot"></span>
          ${c.kicker}
        </span>

        <div class="prostate-hero-visual">
          <div class="prostate-hero-img-wrap">
            <img src="./kidney-03.jpg"
                 alt="Detailed kidney anatomical illustration" class="prostate-hero-img" />
            <div class="prostate-hero-img-overlay"></div>
          </div>
          <div class="prostate-hero-text">
            <h2 class="prostate-title">
              ${c.title}
            </h2>
            <p class="prostate-lead">
              ${c.lead}
            </p>
          </div>
        </div>

        <div class="prostate-copy">
          <p>
            ${c.copy1}
          </p>
        </div>

        <div class="prostate-grid">
          <article class="prostate-card">
            <div class="prostate-card-img-wrap">
              <img src="./prostate-04.jpg"
                   alt="BPH enlarged prostate diagram" class="prostate-card-img" />
            </div>
            <h3>${c.card1Title}</h3>
            <p>
              ${c.card1Text}
            </p>
          </article>
          <article class="prostate-card">
            <div class="prostate-card-img-wrap">
              <img src="./12_product_milk_thistle_nccih.jpg"
                   alt="Milk thistle supplement" class="prostate-card-img" />
            </div>
            <h3>${c.card2Title}</h3>
            <p>
              ${c.card2Text}
            </p>
          </article>
        </div>

        <div class="prostate-copy">
          <h3 class="prostate-title" style="font-size:clamp(1.6rem,1.3rem + 1.4vw,2.6rem);margin-bottom:0.4rem;">
            ${c.cleansTitle}
          </h3>
          <p>
            ${c.cleansText}
          </p>
          <ul class="prostate-list">
            <li>${c.listItem1}</li>
            <li>${c.listItem2}</li>
            <li>${c.listItem3}</li>
            <li>${c.listItem4}</li>
          </ul>
        </div>

        <div class="prostate-img-banner">
          <img src="./protocol-kidneys.jpg"
               alt="Kidney protocol illustration" class="prostate-banner-img" />
          <div class="prostate-banner-overlay">
            <span class="prostate-banner-label">${c.bannerLabel}</span>
          </div>
        </div>

        <div class="prostate-table-wrap">
          <table class="prostate-table">
            <thead>
              <tr>
                <th>${c.tableHeader1}</th>
                <th>${c.tableHeader2}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${c.tableRow1Col1}</td>
                <td>${c.tableRow1Col2}</td>
              </tr>
              <tr>
                <td>${c.tableRow2Col1}</td>
                <td>${c.tableRow2Col2}</td>
              </tr>
              <tr>
                <td>${c.tableRow3Col1}</td>
                <td>${c.tableRow3Col2}</td>
              </tr>
              <tr>
                <td>${c.tableRow4Col1}</td>
                <td>${c.tableRow4Col2}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="prostate-cta">
          <p>
            ${c.ctaText1}
          </p>
          <p>
            ${c.ctaText2}
          </p>
          <div class="prostate-actions">
            <a href="#order" class="prostate-btn prostate-btn-primary">${c.btnReserve}</a>
            <a href="#protocol" class="prostate-btn prostate-btn-secondary">${c.btnReview}</a>
          </div>
        </div>
      </div>
    `;

    return section;
  }

  function updateProstateLanguage() {
    var existingSection = document.getElementById(SECTION_ID);
    if (!existingSection) return;

    var lang = isSpanishMode() ? 'es' : 'en';
    var currentLang = existingSection.getAttribute('data-lang');
    
    if (currentLang === lang) return; // Already in correct language

    var parent = existingSection.parentNode;
    var newSection = createProstateSection(lang);
    parent.replaceChild(newSection, existingSection);

    if (window.AOS && typeof window.AOS.refreshHard === "function") {
      window.AOS.refreshHard();
    } else if (window.AOS && typeof window.AOS.refresh === "function") {
      window.AOS.refresh();
    }
  }

  function insertSection() {
    if (document.getElementById(SECTION_ID)) return;

    const rootContainer = document.querySelector("#root > div");
    if (!rootContainer) return;

    const protocolAnchor = document.getElementById("protocol");
    const protocolSection = protocolAnchor ? protocolAnchor.closest("section") : null;
    const lang = isSpanishMode() ? 'es' : 'en';
    const newSection = createProstateSection(lang);

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

  // Watch for language toggle changes
  document.addEventListener('click', function() {
    setTimeout(updateProstateLanguage, 100);
  }, true);

  // Also watch for DOM mutations (React updates)
  var observer = new MutationObserver(function() {
    updateProstateLanguage();
  });

  observer.observe(document.body, { childList: true, subtree: true, characterData: true });
})();
