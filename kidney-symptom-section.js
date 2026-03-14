(function () {
  var SECTION_ID = "kidney-symptom-recognition";

  // ─── Language detection ───────────────────────────────────────────────────
  // The toggle button shows "🇺🇸 EN" when Spanish is active (to switch back).
  function isSpanish() {
    var btn = document.querySelector("button");
    return btn && btn.textContent.includes("EN");
  }

  // ─── Content definitions ──────────────────────────────────────────────────
  var content = {
    en: {
      kicker: "Symptom Recognition",
      title: "DO YOUR KIDNEYS NEED A RESCUE?",
      subtitle: "A Warning You Cannot Afford to Ignore",
      intro1: "Ask Yourself Honestly...",
      intro2: "Do you suffer from any of these?",
      introNote: "(If you check even one box, your kidneys may already be signaling for help.)",
      warningHeading: "\u26a0\ufe0f The Warning Signs Your Kidneys Are Crying Out For Help",
      tableHeader1: "\u274c Do You...",
      tableHeader2: "\u2705 What It Means",
      rows: [
        ["Wake up every morning with puffy eyes or swollen hands?", "Your kidneys are retaining fluid they cannot process\u2014waste is building up overnight while you sleep."],
        ["Feel exhausted no matter how much sleep you get?", "Toxins in your blood are poisoning your cells. Your kidneys are overwhelmed, and your body is fighting a war it cannot win."],
        ["Notice your skin is dry, itchy, or breaking out?", "Your skin has become your \u201cthird kidney\u201d\u2014desperately trying to eliminate what your kidneys cannot. Waste is literally exiting through your pores."],
        ["Get up multiple times at night to urinate?", "Your kidneys cannot concentrate urine properly. They are working overtime when they should be resting."],
        ["Experience brain fog, poor concentration, or memory lapses?", "Waste products in your blood are clouding your brain. You are not \u201cgetting older\u201d\u2014you are getting toxic."],
        ["Have high blood pressure that medication barely touches?", "Your kidneys regulate blood pressure. When they fail, your entire cardiovascular system suffers."],
        ["Feel bloated, especially in your belly and ankles?", "Fluid retention is a sign your kidneys are losing the battle. Your body is drowning in its own waste."],
        ["Notice a metallic taste in your mouth or ammonia breath?", "Urea is building up in your blood. Your kidneys are not filtering properly, and the toxins are backing up into your lungs."],
        ["Suffer from muscle cramps, especially at night?", "Your electrolyte balance is destroyed. Minerals that should be lighting up your cells are instead depleting into nothing."],
        ["Feel cold when others are warm?", "Your kidneys regulate mineral balance that affects circulation. Poor kidney function = poor blood flow = poor oxygenation."],
        ["Have lower back pain that won\u2019t go away?", "Your kidneys are located in your lower back. Pain here is not always muscular\u2014sometimes it is organ distress."],
        ["Experience frequent urinary tract infections?", "A sluggish urinary system cannot flush bacteria effectively. Infections take hold because your defenses are down."]
      ],
      ignoreHeading: "IF YOU IGNORE THESE SIGNS, HERE IS WHAT COMES NEXT.",
      stage1Title: "Stage 1: The Slow Poisoning",
      stage1: [
        "You feel tired. A little puffy. A bit foggy. You blame aging. You blame stress. You ignore it.",
        "Meanwhile, urea and creatinine accumulate in your blood. These are waste products that should be flushed out. Instead, they circulate through every organ, every tissue, every cell\u2014slowly poisoning you from the inside.",
        "You cannot smell it. You cannot taste it. But it is there."
      ],
      stage2Title: "Stage 2: The Body Begins to Break Down",
      stage2Header1: "System",
      stage2Header2: "What Failing Kidneys Do To It",
      stage2Rows: [
        ["Heart &amp; Blood Vessels", "Fluid overload forces your heart to work harder. Blood pressure skyrockets. Your risk of heart attack and stroke multiplies. Kidney patients are more likely to die of heart disease than kidney failure itself."],
        ["Bones", "Kidneys activate vitamin D. When they fail, calcium cannot be absorbed. Your body steals calcium from your bones. They become brittle, weak, prone to fracture. You shrink. You stoop."],
        ["Brain", "Toxins cross the blood-brain barrier. Confusion sets in. Memory deteriorates. In late stages, it is called \u201curemic encephalopathy\u201d\u2014a fancy term for toxic waste clouding your mind until you cannot think clearly anymore."],
        ["Blood", "Kidneys produce erythropoietin (EPO). Without it, red blood cell production plummets. You become severely anemic. Every step leaves you breathless. Every movement drains you."],
        ["Nerves", "Toxins damage nerve endings. You feel tingling, numbness, \u201cpins and needles\u201d in your hands and feet. Eventually, you may lose sensation entirely."],
        ["Skin", "Waste products deposit under your skin. It turns grayish-yellow. Itches uncontrollably. Some patients scratch until they bleed\u2014just for relief that never comes."],
        ["Stomach &amp; Digestion", "Nausea. Vomiting. Loss of appetite. Eating becomes a chore. Weight drops. Muscle wastes away. You become a skeleton of your former self."]
      ],
      stage3Title: "Stage 3: The Machines Take Over",
      stage3: [
        "If you reach end-stage renal disease (ESRD), you do not die immediately.",
        "You are kept alive by machines.",
        "Three times per week. Four hours per session. You sit in a chair while a machine filters your blood because your kidneys no longer can.",
        "You cannot travel freely.",
        "You cannot miss treatments.",
        "You cannot eat the foods you love\u2014potassium, phosphorus, and sodium become enemies.",
        "You watch your life shrink to the size of a dialysis chair."
      ]
    },
    es: {
      kicker: "Reconocimiento de S\u00edntomas",
      title: "\u00bfTUS RI\u00d1ONES NECESITAN UN RESCATE?",
      subtitle: "Una Advertencia Que No Puedes Ignorar",
      intro1: "Preg\u00fantate Honestamente...",
      intro2: "\u00bfSufres alguno de estos s\u00edntomas?",
      introNote: "(Si marcas aunque sea una casilla, tus ri\u00f1ones ya pueden estar pidiendo ayuda.)",
      warningHeading: "\u26a0\ufe0f Las Se\u00f1ales de Advertencia de Que Tus Ri\u00f1ones Est\u00e1n Pidiendo Ayuda",
      tableHeader1: "\u274c \u00bfTe Ocurre...?",
      tableHeader2: "\u2705 Qu\u00e9 Significa",
      rows: [
        ["\u00bfTe despiertas cada ma\u00f1ana con ojos hinchados o manos inflamadas?", "Tus ri\u00f1ones est\u00e1n reteniendo l\u00edquidos que no pueden procesar\u2014los desechos se acumulan durante la noche mientras duermes."],
        ["\u00bfTe sientes agotado sin importar cu\u00e1nto duermas?", "Las toxinas en tu sangre est\u00e1n envenenando tus c\u00e9lulas. Tus ri\u00f1ones est\u00e1n sobrecargados y tu cuerpo est\u00e1 librando una guerra que no puede ganar."],
        ["\u00bfNotas que tu piel est\u00e1 seca, con picaz\u00f3n o con brotes?", "Tu piel se ha convertido en tu \u201ctercer ri\u00f1\u00f3n\u201d\u2014intentando desesperadamente eliminar lo que tus ri\u00f1ones no pueden. Los desechos literalmente salen por tus poros."],
        ["\u00bfTe levantas varias veces por la noche a orinar?", "Tus ri\u00f1ones no pueden concentrar la orina correctamente. Est\u00e1n trabajando horas extra cuando deber\u00edan estar descansando."],
        ["\u00bfExperimentas niebla mental, poca concentraci\u00f3n o lagunas de memoria?", "Los productos de desecho en tu sangre est\u00e1n nublando tu cerebro. No est\u00e1s \u201cenvejeciendo\u201d\u2014te est\u00e1s intoxicando."],
        ["\u00bfTienes presi\u00f3n arterial alta que los medicamentos apenas controlan?", "Tus ri\u00f1ones regulan la presi\u00f3n arterial. Cuando fallan, todo tu sistema cardiovascular sufre."],
        ["\u00bfTe sientes hinchado, especialmente en el vientre y los tobillos?", "La retenci\u00f3n de l\u00edquidos es una se\u00f1al de que tus ri\u00f1ones est\u00e1n perdiendo la batalla. Tu cuerpo se est\u00e1 ahogando en sus propios desechos."],
        ["\u00bfNotas un sabor met\u00e1lico en la boca o aliento a amon\u00edaco?", "La urea se est\u00e1 acumulando en tu sangre. Tus ri\u00f1ones no filtran correctamente y las toxinas se est\u00e1n acumulando en tus pulmones."],
        ["\u00bfSufres de calambres musculares, especialmente por la noche?", "Tu equilibrio electrol\u00edtico est\u00e1 destruido. Los minerales que deber\u00edan activar tus c\u00e9lulas se est\u00e1n agotando."],
        ["\u00bfSientes fr\u00edo cuando otros tienen calor?", "Tus ri\u00f1ones regulan el equilibrio mineral que afecta la circulaci\u00f3n. Funci\u00f3n renal deficiente = flujo sangu\u00edneo deficiente = oxigenaci\u00f3n deficiente."],
        ["\u00bfTienes dolor en la espalda baja que no desaparece?", "Tus ri\u00f1ones est\u00e1n ubicados en tu espalda baja. El dolor aqu\u00ed no siempre es muscular\u2014a veces es angustia org\u00e1nica."],
        ["\u00bfExperimentas infecciones urinarias frecuentes?", "Un sistema urinario lento no puede eliminar las bacterias eficazmente. Las infecciones se establecen porque tus defensas est\u00e1n ba jas."]
      ],
      ignoreHeading: "SI IGNORAS ESTAS SE\u00d1ALES, ESTO ES LO QUE VIENE DESPU\u00c9S.",
      stage1Title: "Etapa 1: El Envenenamiento Lento",
      stage1: [
        "Te sientes cansado. Un poco hinchado. Un poco confundido. Culpas al envejecimiento. Culpas al estr\u00e9s. Lo ignoras.",
        "Mientras tanto, la urea y la creatinina se acumulan en tu sangre. Estos son productos de desecho que deber\u00edan eliminarse. En cambio, circulan por cada \u00f3rgano, cada tejido, cada c\u00e9lula\u2014envenend\u00e1ndote lentamente desde adentro.",
        "No puedes olerlo. No puedes saborearlo. Pero est\u00e1 ah\u00ed."
      ],
      stage2Title: "Etapa 2: El Cuerpo Comienza a Deteriorarse",
      stage2Header1: "Sistema",
      stage2Header2: "Lo Que los Ri\u00f1ones Fallidos Le Hacen",
      stage2Rows: [
        ["Coraz\u00f3n y Vasos Sangu\u00edneos", "La sobrecarga de l\u00edquidos obliga a tu coraz\u00f3n a trabajar m\u00e1s. La presi\u00f3n arterial se dispara. Tu riesgo de ataque card\u00edaco y derrame cerebral se multiplica. Los pacientes renales tienen m\u00e1s probabilidades de morir de enfermedades card\u00edacas que de insuficiencia renal."],
        ["Huesos", "Los ri\u00f1ones activan la vitamina D. Cuando fallan, el calcio no puede absorberse. Tu cuerpo roba calcio de tus huesos. Se vuelven fr\u00e1giles, d\u00e9biles, propensos a fracturas. Te encoges. Te encorvas."],
        ["Cerebro", "Las toxinas cruzan la barrera hematoencef\u00e1lica. La confusi\u00f3n se instala. La memoria se deteriora. En etapas avanzadas se llama \u201cencefalopath\u00eda ur\u00e9mica\u201d\u2014un t\u00e9rmino elegante para los desechos t\u00f3xicos que nublan tu mente hasta que ya no puedes pensar con claridad."],
        ["Sangre", "Los ri\u00f1ones producen eritropoyetina (EPO). Sin ella, la producci\u00f3n de gl\u00f3bulos rojos cae en picada. Te vuelves gravemente an\u00e9mico. Cada paso te deja sin aliento. Cada movimiento te agota."],
        ["Nervios", "Las toxinas da\u00f1an las terminaciones nerviosas. Sientes hormigueo, entumecimiento, \u201cagujas y alfileres\u201d en manos y pies. Con el tiempo, puedes perder la sensaci\u00f3n por completo."],
        ["Piel", "Los productos de desecho se depositan bajo tu piel. Se vuelve amarillo-gris\u00e1cea. Pica incontrolablemente. Algunos pacientes se rascan hasta sangrar\u2014solo para un alivio que nunca llega."],
        ["Est\u00f3mago y Digesti\u00f3n", "N\u00e1useas. V\u00f3mitos. P\u00e9rdida de apetito. Comer se vuelve una carga. El peso baja. Los m\u00fasculos se atrofian. Te conviertes en un esqueleto de lo que eras."]
      ],
      stage3Title: "Etapa 3: Las M\u00e1quinas Toman el Control",
      stage3: [
        "Si llegas a la enfermedad renal en etapa terminal (ESRD), no mueres de inmediato.",
        "Te mantienen vivo con m\u00e1quinas.",
        "Tres veces por semana. Cuatro horas por sesi\u00f3n. Te sientas en una silla mientras una m\u00e1quina filtra tu sangre porque tus ri\u00f1ones ya no pueden hacerlo.",
        "No puedes viajar libremente.",
        "No puedes perderte los tratamientos.",
        "No puedes comer los alimentos que amas\u2014el potasio, el f\u00f3sforo y el sodio se convierten en enemigos.",
        "Ves c\u00f3mo tu vida se reduce al tama\u00f1o de una silla de di\u00e1lisis."
      ]
    }
  };

  // ─── HTML builder ─────────────────────────────────────────────────────────
  function buildHTML(lang) {
    var t = content[lang];

    var warningRows = t.rows.map(function (row) {
      return "<tr><td>" + row[0] + "</td><td>" + row[1] + "</td></tr>";
    }).join("");

    var stage2Rows = t.stage2Rows.map(function (row) {
      return "<tr><td>" + row[0] + "</td><td>" + row[1] + "</td></tr>";
    }).join("");

    var stage1Paras = t.stage1.map(function (p) { return "<p>" + p + "</p>"; }).join("");
    var stage3Paras = t.stage3.map(function (p) { return "<p>" + p + "</p>"; }).join("");

    return '<div class="kidney-symptom-wrap">'
      + '<span class="kidney-symptom-kicker">' + t.kicker + '</span>'
      + '<h2 class="kidney-symptom-title">' + t.title + '</h2>'
      + '<p class="kidney-symptom-subtitle">' + t.subtitle + '</p>'
      + '<div class="kidney-symptom-intro">'
      + '<p>' + t.intro1 + '</p>'
      + '<p>' + t.intro2 + '</p>'
      + '<p class="kidney-symptom-note">' + t.introNote + '</p>'
      + '</div>'
      + '<h3 class="kidney-symptom-heading">' + t.warningHeading + '</h3>'
      + '<div class="kidney-symptom-table-wrap">'
      + '<table class="kidney-symptom-table">'
      + '<thead><tr><th>' + t.tableHeader1 + '</th><th>' + t.tableHeader2 + '</th></tr></thead>'
      + '<tbody>' + warningRows + '</tbody>'
      + '</table>'
      + '</div>'
      + '<h3 class="kidney-symptom-heading kidney-symptom-heading-next">' + t.ignoreHeading + '</h3>'
      + '<article class="kidney-stage-card">'
      + '<h4>' + t.stage1Title + '</h4>'
      + stage1Paras
      + '</article>'
      + '<article class="kidney-stage-card">'
      + '<h4>' + t.stage2Title + '</h4>'
      + '<div class="kidney-symptom-table-wrap">'
      + '<table class="kidney-symptom-table kidney-impact-table">'
      + '<thead><tr><th>' + t.stage2Header1 + '</th><th>' + t.stage2Header2 + '</th></tr></thead>'
      + '<tbody>' + stage2Rows + '</tbody>'
      + '</table>'
      + '</div>'
      + '</article>'
      + '<article class="kidney-stage-card kidney-stage-final">'
      + '<h4>' + t.stage3Title + '</h4>'
      + stage3Paras
      + '</article>'
      + '</div>';
  }

  // ─── Update section language ──────────────────────────────────────────────
  function updateLanguage() {
    var section = document.getElementById(SECTION_ID);
    if (!section) return;
    var lang = isSpanish() ? "es" : "en";
    section.innerHTML = buildHTML(lang);
  }

  // ─── Insert section ───────────────────────────────────────────────────────
  function insertSection() {
    if (document.getElementById(SECTION_ID)) return true;

    var rootContainer = document.querySelector("#root > div");
    if (!rootContainer) return false;

    var sections = rootContainer.querySelectorAll(":scope > section");
    if (sections.length < 2) return false;

    var section = document.createElement("section");
    section.id = SECTION_ID;
    section.className = "kidney-symptom-section";
    section.innerHTML = buildHTML(isSpanish() ? "es" : "en");

    var secondSection = sections[1];
    if (secondSection.nextElementSibling) {
      secondSection.parentNode.insertBefore(section, secondSection.nextElementSibling);
    } else {
      secondSection.parentNode.appendChild(section);
    }

    return true;
  }

  // ─── Watch for language toggle clicks ────────────────────────────────────
  function watchLanguageToggle() {
    // Use MutationObserver to detect when the button text changes
    var observer = new MutationObserver(function () {
      updateLanguage();
    });

    function attachObserver() {
      var btn = document.querySelector("button");
      if (btn) {
        observer.observe(btn, { childList: true, subtree: true, characterData: true });
      }
    }

    // Also listen for click on the button directly
    document.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (btn && (btn.textContent.includes("ES") || btn.textContent.includes("EN"))) {
        // Small delay to let React re-render first
        setTimeout(updateLanguage, 100);
        setTimeout(updateLanguage, 300);
        setTimeout(updateLanguage, 600);
      }
    }, true);

    attachObserver();
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
