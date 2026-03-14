(function () {
  'use strict';
  var SECTION_ID = 'kidney-symptom-recognition';

  // ─── Language detection ───────────────────────────────────────────────────
  function isSpanish() {
    var btns = document.querySelectorAll('button');
    for (var i = 0; i < btns.length; i++) {
      var t = btns[i].textContent || '';
      if (t.includes('\uD83C\uDDFA\uD83C\uDDF8') || t.includes('🇺🇸')) return true;
    }
    return false;
  }

  // ─── Inject CSS ───────────────────────────────────────────────────────────
  function injectStyles() {
    if (document.getElementById('ks-styles')) return;
    var style = document.createElement('style');
    style.id = 'ks-styles';
    style.textContent = `
      /* ── Base (shared mobile + desktop) ── */
      #${SECTION_ID} {
        background: linear-gradient(180deg, #0a0a14 0%, #0d1117 50%, #0a0a14 100%);
        padding: 5rem 0 4rem;
        position: relative;
        overflow: hidden;
      }
      #${SECTION_ID}::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(239,68,68,0.07) 0%, transparent 70%);
        pointer-events: none;
      }
      .ks-wrap { max-width: 72rem; margin: 0 auto; padding: 0 1.25rem; }
      .ks-kicker {
        display: block; color: #ef4444; font-weight: 700; letter-spacing: .1em;
        text-transform: uppercase; font-size: .8125rem;
        font-family: 'Lexend Deca',sans-serif; margin-bottom: .75rem; text-align: center;
      }
      .ks-title {
        font-size: clamp(1.6rem, 5vw, 2.75rem); font-weight: 900; color: #fff;
        font-family: 'Lexend Deca',sans-serif; letter-spacing: -.02em;
        line-height: 1.15; text-align: center; margin: 0 0 .75rem;
      }
      .ks-subtitle {
        color: #fca5a5; font-size: clamp(.9rem, 2.5vw, 1.125rem);
        text-align: center; margin: 0 0 1.5rem; font-family: 'Poppins',sans-serif;
      }
      .ks-intro { text-align: center; color: #d1d5db; font-family: 'Poppins',sans-serif; font-size: 1rem; margin-bottom: 2rem; }
      .ks-intro p { margin: .35rem 0; }
      .ks-intro .ks-note { color: #9ca3af; font-size: .875rem; font-style: italic; }
      .ks-heading {
        font-size: clamp(1rem, 3vw, 1.375rem); font-weight: 800; color: #fff;
        font-family: 'Lexend Deca',sans-serif; margin: 2.5rem 0 1.25rem; text-align: center;
      }
      .ks-heading-danger { color: #ef4444; }

      /* ── Mobile symptom cards (default) ── */
      .ks-cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr));
        gap: 1rem; margin-bottom: 2rem;
      }
      .ks-card {
        background: #111827; border: 1px solid #1f2937;
        border-radius: 1rem; padding: 1.125rem 1.25rem;
      }
      .ks-card-q {
        color: #f87171; font-weight: 700; font-size: .9375rem;
        font-family: 'Lexend Deca',sans-serif; margin: 0 0 .5rem; line-height: 1.4;
      }
      .ks-card-a {
        color: #d1d5db; font-size: .875rem;
        font-family: 'Poppins',sans-serif; line-height: 1.65; margin: 0;
      }

      /* ── Mobile stage cards (default) ── */
      .ks-stage {
        background: rgba(0,0,0,.45); border: 1px solid #1f2937;
        border-radius: 1rem; padding: 1.5rem; margin-bottom: 1.25rem;
      }
      .ks-stage h4 {
        font-size: clamp(1rem, 3vw, 1.25rem); font-weight: 800; color: #f87171;
        font-family: 'Lexend Deca',sans-serif; margin: 0 0 1rem;
      }
      .ks-stage p {
        color: #d1d5db; font-size: .9375rem;
        font-family: 'Poppins',sans-serif; line-height: 1.7; margin: 0 0 .75rem;
      }
      .ks-stage p:last-child { margin-bottom: 0; }
      .ks-impact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
        gap: .875rem;
      }
      .ks-impact-card {
        background: #0d1525; border: 1px solid #1f2937;
        border-radius: .875rem; padding: 1rem 1.125rem;
      }
      .ks-impact-sys {
        color: #60a5fa; font-weight: 700; font-size: .875rem;
        font-family: 'Lexend Deca',sans-serif; margin: 0 0 .4rem;
        text-transform: uppercase; letter-spacing: .05em;
      }
      .ks-impact-desc {
        color: #9ca3af; font-size: .8125rem;
        font-family: 'Poppins',sans-serif; line-height: 1.65; margin: 0;
      }
      .ks-stage-final p { font-size: clamp(.9rem, 2.5vw, 1rem); }

      @media (max-width: 480px) {
        .ks-stage { padding: 1.125rem 1rem; }
        .ks-card { padding: .875rem 1rem; }
      }

      /* ════════════════════════════════════════════════════════════════════
         DESKTOP ENHANCEMENTS — only apply at ≥768px
         ════════════════════════════════════════════════════════════════════ */
      @media (min-width: 768px) {

        /* ── Animated entrance ── */
        .ks-fade-in {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .65s ease, transform .65s ease;
        }
        .ks-fade-in.ks-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Hero two-column header ── */
        .ks-hero {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 3rem;
          align-items: center;
          margin-bottom: 3.5rem;
          padding: 2.5rem 2rem;
          background: linear-gradient(135deg, rgba(127,29,29,0.18) 0%, rgba(15,23,42,0.6) 60%);
          border: 1px solid rgba(239,68,68,0.25);
          border-radius: 1.5rem;
          box-shadow: 0 8px 40px rgba(239,68,68,0.1);
          position: relative;
          overflow: hidden;
        }
        .ks-hero::after {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 320px; height: 320px;
          background: radial-gradient(circle, rgba(239,68,68,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .ks-hero-text .ks-kicker { text-align: left; }
        .ks-hero-text .ks-title { text-align: left; font-size: clamp(1.8rem, 3.5vw, 3rem); }
        .ks-hero-text .ks-subtitle { text-align: left; }
        .ks-hero-text .ks-intro { text-align: left; }
        .ks-hero-img {
          position: relative;
          border-radius: 1.25rem;
          overflow: hidden;
          box-shadow: 0 12px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(239,68,68,0.2);
        }
        .ks-hero-img img {
          width: 100%; height: 360px;
          object-fit: cover; display: block;
          border-radius: 1.25rem;
        }
        .ks-hero-img-badge {
          position: absolute; bottom: 1rem; left: 1rem;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(239,68,68,0.4);
          border-radius: .75rem;
          padding: .5rem .875rem;
          color: #fca5a5;
          font-size: .75rem;
          font-weight: 700;
          font-family: 'Lexend Deca',sans-serif;
          letter-spacing: .05em;
          text-transform: uppercase;
        }

        /* ── Pulse warning icon ── */
        @keyframes ks-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(239,68,68,0.5); }
          50% { box-shadow: 0 0 0 10px rgba(239,68,68,0); }
        }
        .ks-warning-icon {
          display: inline-flex;
          align-items: center; justify-content: center;
          width: 3.5rem; height: 3.5rem;
          background: rgba(239,68,68,0.15);
          border: 2px solid rgba(239,68,68,0.4);
          border-radius: 50%;
          font-size: 1.5rem;
          margin: 0 auto 1rem;
          animation: ks-pulse 2s infinite;
        }

        /* ── Desktop symptom cards with images ── */
        .ks-cards {
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .ks-card {
          background: linear-gradient(160deg, #111827 0%, #0d1525 100%);
          border: 1px solid rgba(239,68,68,0.15);
          border-radius: 1.25rem;
          padding: 0;
          overflow: hidden;
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
          cursor: default;
        }
        .ks-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(239,68,68,0.15);
          border-color: rgba(239,68,68,0.4);
        }
        .ks-card-img {
          width: 100%; height: 160px;
          object-fit: cover; display: block;
          filter: brightness(0.85) saturate(0.9);
          transition: filter .3s ease;
        }
        .ks-card:hover .ks-card-img {
          filter: brightness(1) saturate(1.1);
        }
        .ks-card-body { padding: 1.125rem 1.25rem; }
        .ks-card-q { font-size: .9rem; }
        .ks-card-a { font-size: .825rem; }

        /* ── "If you ignore" heading with dramatic styling ── */
        .ks-ignore-banner {
          background: linear-gradient(135deg, #7f1d1d, #991b1b);
          border-radius: 1.25rem;
          padding: 2rem 2.5rem;
          text-align: center;
          margin: 3rem 0 2.5rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(127,29,29,0.4);
        }
        .ks-ignore-banner::before {
          content: '⚠';
          position: absolute;
          font-size: 8rem;
          opacity: .06;
          top: -1rem; right: 1rem;
          line-height: 1;
          pointer-events: none;
        }
        .ks-ignore-banner h3 {
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          font-weight: 900;
          color: #fff;
          font-family: 'Lexend Deca',sans-serif;
          margin: 0;
          letter-spacing: .02em;
        }

        /* ── Stage 1: full-width cinematic panel ── */
        .ks-stage-1-desktop {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border-radius: 1.5rem;
          overflow: hidden;
          margin-bottom: 2rem;
          box-shadow: 0 12px 48px rgba(0,0,0,0.5);
        }
        .ks-stage-1-img {
          position: relative;
          min-height: 320px;
        }
        .ks-stage-1-img img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          filter: brightness(0.7) saturate(0.8);
        }
        .ks-stage-1-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent 60%, rgba(10,10,20,0.95) 100%);
        }
        .ks-stage-1-text {
          background: linear-gradient(135deg, #0d1117, #111827);
          padding: 2.5rem 2.5rem;
          display: flex; flex-direction: column; justify-content: center;
          border-left: 3px solid #ef4444;
        }
        .ks-stage-1-text h4 {
          font-size: 1.5rem; font-weight: 900; color: #f87171;
          font-family: 'Lexend Deca',sans-serif; margin: 0 0 1.25rem;
        }
        .ks-stage-1-text p {
          color: #d1d5db; font-size: .9375rem;
          font-family: 'Poppins',sans-serif; line-height: 1.75;
          margin: 0 0 .875rem;
        }
        .ks-stage-1-text p:last-child { margin-bottom: 0; }

        /* ── Stage 2: body systems grid ── */
        .ks-stage-2-header {
          display: flex; align-items: center; gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .ks-stage-2-header h4 {
          font-size: 1.375rem; font-weight: 900; color: #f87171;
          font-family: 'Lexend Deca',sans-serif; margin: 0;
        }
        .ks-stage-2-line {
          flex: 1; height: 2px;
          background: linear-gradient(90deg, rgba(239,68,68,0.5), transparent);
        }
        .ks-impact-grid {
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1rem;
        }
        .ks-impact-card {
          background: linear-gradient(160deg, #0d1525, #111827);
          border: 1px solid rgba(96,165,250,0.2);
          border-radius: 1rem;
          padding: 1.25rem;
          transition: transform .2s ease, border-color .2s ease;
        }
        .ks-impact-card:hover {
          transform: translateY(-3px);
          border-color: rgba(96,165,250,0.5);
        }
        .ks-impact-icon {
          font-size: 1.75rem; margin-bottom: .5rem; display: block;
        }
        .ks-impact-sys { font-size: .9rem; }
        .ks-impact-desc { font-size: .8375rem; }

        /* ── Stage 3: dialysis machine panel ── */
        .ks-stage-3-desktop {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border-radius: 1.5rem;
          overflow: hidden;
          margin-top: 2rem;
          box-shadow: 0 12px 48px rgba(0,0,0,0.5);
        }
        .ks-stage-3-text {
          background: linear-gradient(135deg, #0d1117, #111827);
          padding: 2.5rem;
          display: flex; flex-direction: column; justify-content: center;
          border-right: 3px solid #ef4444;
        }
        .ks-stage-3-text h4 {
          font-size: 1.5rem; font-weight: 900; color: #f87171;
          font-family: 'Lexend Deca',sans-serif; margin: 0 0 1.25rem;
        }
        .ks-stage-3-text p {
          color: #d1d5db; font-size: .9375rem;
          font-family: 'Poppins',sans-serif; line-height: 1.75;
          margin: 0 0 .5rem;
        }
        .ks-stage-3-text p:last-child { margin-bottom: 0; }
        .ks-stage-3-text .ks-stage-3-cannot {
          color: #fca5a5; font-weight: 600;
        }
        .ks-stage-3-img {
          position: relative; min-height: 320px;
        }
        .ks-stage-3-img img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          filter: brightness(0.65) saturate(0.7);
        }
        .ks-stage-3-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(270deg, transparent 50%, rgba(10,10,20,0.9) 100%);
        }
        .ks-stage-3-img-caption {
          position: absolute; bottom: 1.25rem; right: 1.25rem;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(239,68,68,0.35);
          border-radius: .75rem;
          padding: .6rem 1rem;
          color: #fca5a5;
          font-size: .72rem; font-weight: 700;
          font-family: 'Lexend Deca',sans-serif;
          letter-spacing: .06em; text-transform: uppercase;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // ─── Content ──────────────────────────────────────────────────────────────
  var content = {
    en: {
      kicker: 'Symptom Recognition',
      title: 'DO YOUR KIDNEYS NEED A RESCUE?',
      subtitle: 'A Warning You Cannot Afford to Ignore',
      intro1: 'Ask Yourself Honestly...',
      intro2: 'Do you suffer from any of these?',
      introNote: '(If you check even one box, your kidneys may already be signaling for help.)',
      warningHeading: '\u26a0\ufe0f The Warning Signs Your Kidneys Are Crying Out For Help',
      rows: [
        ['Wake up every morning with puffy eyes or swollen hands?', 'Your kidneys are retaining fluid they cannot process\u2014waste is building up overnight while you sleep.', 'swelling-01.jpg'],
        ['Feel exhausted no matter how much sleep you get?', 'Toxins in your blood are poisoning your cells. Your kidneys are overwhelmed, and your body is fighting a war it cannot win.', 'FATIGUE_03_woman_exhausted_desk.jpg'],
        ['Notice your skin is dry, itchy, or breaking out?', 'Your skin has become your \u201cthird kidney\u201d\u2014desperately trying to eliminate what your kidneys cannot. Waste is literally exiting through your pores.', 'res-skin.jpg'],
        ['Get up multiple times at night to urinate?', 'Your kidneys cannot concentrate urine properly. They are working overtime when they should be resting.', 'img-sleep.jpg'],
        ['Experience brain fog, poor concentration, or memory lapses?', 'Waste products in your blood are clouding your brain. You are not \u201cgetting older\u201d\u2014you are getting toxic.', 'SYMPTOM_brainfog_01_hydration_clarity.jpg'],
        ['Have high blood pressure that medication barely touches?', 'Your kidneys regulate blood pressure. When they fail, your entire cardiovascular system suffers.', 'KIDNEY_04_damage_illustration.jpg'],
        ['Feel bloated, especially in your belly and ankles?', 'Fluid retention is a sign your kidneys are losing the battle. Your body is drowning in its own waste.', 'BLOATING_03_man_stomach_pain_pexels.jpg'],
        ['Notice a metallic taste in your mouth or ammonia breath?', 'Urea is building up in your blood. Your kidneys are not filtering properly, and the toxins are backing up into your lungs.', 'KIDNEY_03_detailed_anatomical_illustration.jpg'],
        ['Suffer from muscle cramps, especially at night?', 'Your electrolyte balance is destroyed. Minerals that should be lighting up your cells are instead depleting into nothing.', 'SWELLING_03_foot_swelling_redness.jpg'],
        ['Feel cold when others are warm?', 'Your kidneys regulate mineral balance that affects circulation. Poor kidney function = poor blood flow = poor oxygenation.', 'FATIGUE_04_man_head_down_table.jpg'],
        ['Have lower back pain that won\u2019t go away?', 'Your kidneys are located in your lower back. Pain here is not always muscular\u2014sometimes it is organ distress.', 'KIDNEY_02_blausen_anatomy_external.jpg'],
        ['Experience frequent urinary tract infections?', 'A sluggish urinary system cannot flush bacteria effectively. Infections take hold because your defenses are down.', 'BLOATING_04_epigastric_pain_stomach.jpg']
      ],
      ignoreHeading: 'IF YOU IGNORE THESE SIGNS, HERE IS WHAT COMES NEXT.',
      stage1Title: 'Stage 1: The Slow Poisoning',
      stage1: [
        'You feel tired. A little puffy. A bit foggy. You blame aging. You blame stress. You ignore it.',
        'Meanwhile, urea and creatinine accumulate in your blood. These are waste products that should be flushed out. Instead, they circulate through every organ, every tissue, every cell\u2014slowly poisoning you from the inside.',
        'You cannot smell it. You cannot taste it. But it is there.'
      ],
      stage1ImgAlt: 'Exhausted person — early kidney distress',
      stage2Title: 'Stage 2: The Body Begins to Break Down',
      stage2Rows: [
        ['\u2764\ufe0f', 'Heart & Blood Vessels', 'Fluid overload forces your heart to work harder. Blood pressure skyrockets. Your risk of heart attack and stroke multiplies. Kidney patients are more likely to die of heart disease than kidney failure itself.'],
        ['\uD83E\uDDB4', 'Bones', 'Kidneys activate vitamin D. When they fail, calcium cannot be absorbed. Your body steals calcium from your bones. They become brittle, weak, prone to fracture. You shrink. You stoop.'],
        ['\uD83E\uDDE0', 'Brain', 'Toxins cross the blood-brain barrier. Confusion sets in. Memory deteriorates. In late stages, it is called \u201curemic encephalopathy\u201d\u2014a fancy term for toxic waste clouding your mind.'],
        ['\uD83E\uDE78', 'Blood', 'Kidneys produce erythropoietin (EPO). Without it, red blood cell production plummets. You become severely anemic. Every step leaves you breathless.'],
        ['\u26a1', 'Nerves', 'Toxins damage nerve endings. You feel tingling, numbness, \u201cpins and needles\u201d in your hands and feet. Eventually, you may lose sensation entirely.'],
        ['\uD83E\uDDB5', 'Skin', 'Waste products deposit under your skin. It turns grayish-yellow. Itches uncontrollably. Some patients scratch until they bleed\u2014just for relief that never comes.'],
        ['\uD83E\uDEB4', 'Stomach & Digestion', 'Nausea. Vomiting. Loss of appetite. Eating becomes a chore. Weight drops. Muscle wastes away. You become a skeleton of your former self.']
      ],
      stage3Title: 'Stage 3: The Machines Take Over',
      stage3: [
        'If you reach end-stage renal disease (ESRD), you do not die immediately.',
        'You are kept alive by machines.',
        'Three times per week. Four hours per session. You sit in a chair while a machine filters your blood because your kidneys no longer can.',
        'You cannot travel freely.',
        'You cannot miss treatments.',
        'You cannot eat the foods you love\u2014potassium, phosphorus, and sodium become enemies.',
        'You watch your life shrink to the size of a dialysis chair.'
      ],
      stage3Caption: 'End-Stage Renal Disease — Dialysis Dependency'
    },
    es: {
      kicker: 'Reconocimiento de S\u00edntomas',
      title: '\u00bfTUS RI\u00d1ONES NECESITAN UN RESCATE?',
      subtitle: 'Una Advertencia Que No Puedes Ignorar',
      intro1: 'Preg\u00fantate Honestamente...',
      intro2: '\u00bfSufres alguno de estos s\u00edntomas?',
      introNote: '(Si marcas aunque sea una casilla, tus ri\u00f1ones ya pueden estar pidiendo ayuda.)',
      warningHeading: '\u26a0\ufe0f Las Se\u00f1ales de Advertencia de Que Tus Ri\u00f1ones Est\u00e1n Pidiendo Ayuda',
      rows: [
        ['\u00bfTe despiertas cada ma\u00f1ana con ojos hinchados o manos inflamadas?', 'Tus ri\u00f1ones est\u00e1n reteniendo l\u00edquidos que no pueden procesar\u2014los desechos se acumulan durante la noche mientras duermes.', 'swelling-01.jpg'],
        ['\u00bfTe sientes agotado sin importar cu\u00e1nto duermas?', 'Las toxinas en tu sangre est\u00e1n envenenando tus c\u00e9lulas. Tus ri\u00f1ones est\u00e1n sobrecargados y tu cuerpo est\u00e1 librando una guerra que no puede ganar.', 'FATIGUE_03_woman_exhausted_desk.jpg'],
        ['\u00bfNotas que tu piel est\u00e1 seca, con picaz\u00f3n o con brotes?', 'Tu piel se ha convertido en tu \u201ctercer ri\u00f1\u00f3n\u201d\u2014intentando desesperadamente eliminar lo que tus ri\u00f1ones no pueden.', 'res-skin.jpg'],
        ['\u00bfTe levantas varias veces por la noche a orinar?', 'Tus ri\u00f1ones no pueden concentrar la orina correctamente. Est\u00e1n trabajando horas extra cuando deber\u00edan estar descansando.', 'img-sleep.jpg'],
        ['\u00bfExperimentas niebla mental, poca concentraci\u00f3n o lagunas de memoria?', 'Los productos de desecho en tu sangre est\u00e1n nublando tu cerebro. No est\u00e1s \u201cenvejeciendo\u201d\u2014te est\u00e1s intoxicando.', 'SYMPTOM_brainfog_01_hydration_clarity.jpg'],
        ['\u00bfTienes presi\u00f3n arterial alta que los medicamentos apenas controlan?', 'Tus ri\u00f1ones regulan la presi\u00f3n arterial. Cuando fallan, todo tu sistema cardiovascular sufre.', 'KIDNEY_04_damage_illustration.jpg'],
        ['\u00bfTe sientes hinchado, especialmente en el vientre y los tobillos?', 'La retenci\u00f3n de l\u00edquidos es una se\u00f1al de que tus ri\u00f1ones est\u00e1n perdiendo la batalla.', 'BLOATING_03_man_stomach_pain_pexels.jpg'],
        ['\u00bfNotas un sabor met\u00e1lico en la boca o aliento a amon\u00edaco?', 'La urea se est\u00e1 acumulando en tu sangre. Tus ri\u00f1ones no filtran correctamente y las toxinas se est\u00e1n acumulando en tus pulmones.', 'KIDNEY_03_detailed_anatomical_illustration.jpg'],
        ['\u00bfSufres de calambres musculares, especialmente por la noche?', 'Tu equilibrio electrol\u00edtico est\u00e1 destruido. Los minerales que deber\u00edan activar tus c\u00e9lulas se est\u00e1n agotando.', 'SWELLING_03_foot_swelling_redness.jpg'],
        ['\u00bfSientes fr\u00edo cuando otros tienen calor?', 'Tus ri\u00f1ones regulan el equilibrio mineral que afecta la circulaci\u00f3n. Funci\u00f3n renal deficiente = flujo sangu\u00edneo deficiente = oxigenaci\u00f3n deficiente.', 'FATIGUE_04_man_head_down_table.jpg'],
        ['\u00bfTienes dolor en la espalda baja que no desaparece?', 'Tus ri\u00f1ones est\u00e1n ubicados en tu espalda baja. El dolor aqu\u00ed no siempre es muscular\u2014a veces es angustia org\u00e1nica.', 'KIDNEY_02_blausen_anatomy_external.jpg'],
        ['\u00bfExperimentas infecciones urinarias frecuentes?', 'Un sistema urinario lento no puede eliminar las bacterias eficazmente. Las infecciones se establecen porque tus defensas est\u00e1n bajas.', 'BLOATING_04_epigastric_pain_stomach.jpg']
      ],
      ignoreHeading: 'SI IGNORAS ESTAS SE\u00d1ALES, ESTO ES LO QUE VIENE DESPU\u00c9S.',
      stage1Title: 'Etapa 1: El Envenenamiento Lento',
      stage1: [
        'Te sientes cansado. Un poco hinchado. Un poco confundido. Culpas al envejecimiento. Culpas al estr\u00e9s. Lo ignoras.',
        'Mientras tanto, la urea y la creatinina se acumulan en tu sangre. Estos son productos de desecho que deber\u00edan eliminarse. En cambio, circulan por cada \u00f3rgano, cada tejido, cada c\u00e9lula\u2014envenend\u00e1ndote lentamente desde adentro.',
        'No puedes olerlo. No puedes saborearlo. Pero est\u00e1 ah\u00ed.'
      ],
      stage1ImgAlt: 'Persona agotada \u2014 estr\u00e9s renal temprano',
      stage2Title: 'Etapa 2: El Cuerpo Comienza a Deteriorarse',
      stage2Rows: [
        ['\u2764\ufe0f', 'Coraz\u00f3n y Vasos', 'La sobrecarga de l\u00edquidos obliga a tu coraz\u00f3n a trabajar m\u00e1s. La presi\u00f3n arterial se dispara. Tu riesgo de ataque card\u00edaco y derrame cerebral se multiplica.'],
        ['\uD83E\uDDB4', 'Huesos', 'Los ri\u00f1ones activan la vitamina D. Cuando fallan, el calcio no puede absorberse. Tu cuerpo roba calcio de tus huesos. Se vuelven fr\u00e1giles y propensos a fracturas.'],
        ['\uD83E\uDDE0', 'Cerebro', 'Las toxinas cruzan la barrera hematoencef\u00e1lica. La confusi\u00f3n se instala. La memoria se deteriora. En etapas avanzadas se llama \u201cencefalopatia ur\u00e9mica\u201d.'],
        ['\uD83E\uDE78', 'Sangre', 'Los ri\u00f1ones producen eritropoyetina (EPO). Sin ella, la producci\u00f3n de gl\u00f3bulos rojos cae en picada. Te vuelves gravemente an\u00e9mico.'],
        ['\u26a1', 'Nervios', 'Las toxinas da\u00f1an las terminaciones nerviosas. Sientes hormigueo, entumecimiento, \u201cagujas\u201d en manos y pies. Eventualmente puedes perder la sensaci\u00f3n.'],
        ['\uD83E\uDDB5', 'Piel', 'Los desechos se depositan bajo tu piel. Se vuelve amarillo-gris\u00e1cea. Pica incontrolablemente. Algunos pacientes se rascan hasta sangrar.'],
        ['\uD83E\uDEB4', 'Est\u00f3mago', 'N\u00e1useas. V\u00f3mitos. P\u00e9rdida de apetito. Comer se vuelve una carga. El peso cae. El m\u00fasculo se consume.']
      ],
      stage3Title: 'Etapa 3: Las M\u00e1quinas Toman el Control',
      stage3: [
        'Si llegas a la enfermedad renal en etapa terminal (ERCT), no mueres inmediatamente.',
        'Te mantienen vivo con m\u00e1quinas.',
        'Tres veces por semana. Cuatro horas por sesi\u00f3n. Te sientas en una silla mientras una m\u00e1quina filtra tu sangre porque tus ri\u00f1ones ya no pueden.',
        'No puedes viajar libremente.',
        'No puedes faltar a los tratamientos.',
        'No puedes comer los alimentos que amas\u2014el potasio, el f\u00f3sforo y el sodio se convierten en enemigos.',
        'Ves c\u00f3mo tu vida se reduce al tama\u00f1o de una silla de di\u00e1lisis.'
      ],
      stage3Caption: 'Enfermedad Renal Terminal \u2014 Dependencia de Di\u00e1lisis'
    }
  };

  // ─── Build HTML ───────────────────────────────────────────────────────────
  function buildHTML(lang) {
    var c = content[lang];
    var isDesktop = window.innerWidth >= 768;

    var symptomCards = c.rows.map(function (row) {
      var q = row[0], a = row[1], img = row[2];
      if (isDesktop) {
        return '<div class="ks-card ks-fade-in">' +
          '<img class="ks-card-img" src="./' + img + '" alt="' + q.replace(/"/g, '') + '" loading="lazy" onerror="this.style.display=\'none\'">' +
          '<div class="ks-card-body">' +
          '<p class="ks-card-q">\u274c ' + q + '</p>' +
          '<p class="ks-card-a">\u2705 ' + a + '</p>' +
          '</div></div>';
      } else {
        return '<div class="ks-card">' +
          '<p class="ks-card-q">\u274c ' + q + '</p>' +
          '<p class="ks-card-a">\u2705 ' + a + '</p>' +
          '</div>';
      }
    }).join('');

    var stage2Cards = c.stage2Rows.map(function (row) {
      return '<div class="ks-impact-card' + (isDesktop ? ' ks-fade-in' : '') + '">' +
        (isDesktop ? '<span class="ks-impact-icon">' + row[0] + '</span>' : '') +
        '<p class="ks-impact-sys">' + row[1] + '</p>' +
        '<p class="ks-impact-desc">' + row[2] + '</p>' +
        '</div>';
    }).join('');

    var stage3Lines = c.stage3.map(function (p, i) {
      var cls = (i >= 3 && i <= 5) ? ' class="ks-stage-3-cannot"' : '';
      return '<p' + cls + '>' + p + '</p>';
    }).join('');

    if (isDesktop) {
      return [
        // Hero two-column header
        '<div class="ks-hero ks-fade-in">',
          '<div class="ks-hero-text">',
            '<span class="ks-kicker">' + c.kicker + '</span>',
            '<h2 class="ks-title">' + c.title + '</h2>',
            '<p class="ks-subtitle">' + c.subtitle + '</p>',
            '<div class="ks-intro">',
              '<p>' + c.intro1 + '</p>',
              '<p>' + c.intro2 + '</p>',
              '<p class="ks-note">' + c.introNote + '</p>',
            '</div>',
          '</div>',
          '<div class="ks-hero-img">',
            '<img src="./KIDNEY_01_3d_medical_animation_layers.jpg" alt="Kidney anatomy" loading="lazy">',
            '<div class="ks-hero-img-badge">\uD83D\uDEA8 ' + (lang === 'en' ? 'Your Kidneys Under Threat' : 'Tus Ri\u00f1ones Bajo Amenaza') + '</div>',
          '</div>',
        '</div>',

        // Warning heading with pulse icon
        '<div class="ks-heading ks-heading-danger ks-fade-in">',
          '<div class="ks-warning-icon">\u26a0\ufe0f</div>',
          c.warningHeading,
        '</div>',

        // Symptom cards grid
        '<div class="ks-cards">' + symptomCards + '</div>',

        // "If you ignore" banner
        '<div class="ks-ignore-banner ks-fade-in">',
          '<h3>' + c.ignoreHeading + '</h3>',
        '</div>',

        // Stage 1 — cinematic two-column
        '<div class="ks-stage-1-desktop ks-fade-in">',
          '<div class="ks-stage-1-img">',
            '<img src="./FATIGUE_06_tired_woman_sleeping_desk2.jpg" alt="' + c.stage1ImgAlt + '" loading="lazy">',
            '<div class="ks-stage-1-img-overlay"></div>',
          '</div>',
          '<div class="ks-stage-1-text">',
            '<h4>' + c.stage1Title + '</h4>',
            c.stage1.map(function (p) { return '<p>' + p + '</p>'; }).join(''),
          '</div>',
        '</div>',

        // Stage 2 — body systems
        '<div class="ks-stage ks-fade-in" style="background:linear-gradient(160deg,#0d1525,#111827);border:1px solid rgba(96,165,250,0.2);">',
          '<div class="ks-stage-2-header">',
            '<h4>' + c.stage2Title + '</h4>',
            '<div class="ks-stage-2-line"></div>',
          '</div>',
          '<div class="ks-impact-grid">' + stage2Cards + '</div>',
        '</div>',

        // Stage 3 — dialysis panel
        '<div class="ks-stage-3-desktop ks-fade-in">',
          '<div class="ks-stage-3-text">',
            '<h4>' + c.stage3Title + '</h4>',
            stage3Lines,
          '</div>',
          '<div class="ks-stage-3-img">',
            '<img src="./hero-patient-dialysis.jpg" alt="Dialysis machine" loading="lazy">',
            '<div class="ks-stage-3-img-overlay"></div>',
            '<div class="ks-stage-3-img-caption">' + c.stage3Caption + '</div>',
          '</div>',
        '</div>'
      ].join('');
    } else {
      // ── Mobile layout (unchanged) ──
      var stage3Lines_m = c.stage3.map(function (p) { return '<p>' + p + '</p>'; }).join('');
      return [
        '<span class="ks-kicker">' + c.kicker + '</span>',
        '<h2 class="ks-title">' + c.title + '</h2>',
        '<p class="ks-subtitle">' + c.subtitle + '</p>',
        '<div class="ks-intro">',
          '<p>' + c.intro1 + '</p>',
          '<p>' + c.intro2 + '</p>',
          '<p class="ks-note">' + c.introNote + '</p>',
        '</div>',
        '<h3 class="ks-heading ks-heading-danger">' + c.warningHeading + '</h3>',
        '<div class="ks-cards">' + symptomCards + '</div>',
        '<h3 class="ks-heading ks-heading-danger">' + c.ignoreHeading + '</h3>',
        '<div class="ks-stage"><h4>' + c.stage1Title + '</h4>' + c.stage1.map(function (p) { return '<p>' + p + '</p>'; }).join('') + '</div>',
        '<div class="ks-stage"><h4>' + c.stage2Title + '</h4><div class="ks-impact-grid">' + stage2Cards + '</div></div>',
        '<div class="ks-stage ks-stage-final"><h4>' + c.stage3Title + '</h4>' + stage3Lines_m + '</div>'
      ].join('');
    }
  }

  // ─── Animate on scroll ────────────────────────────────────────────────────
  function initAnimations() {
    if (!window.IntersectionObserver) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('ks-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    var section = document.getElementById(SECTION_ID);
    if (!section) return;
    var fadeEls = section.querySelectorAll('.ks-fade-in');
    var delay = 0;
    fadeEls.forEach(function (el) {
      el.style.transitionDelay = delay + 'ms';
      observer.observe(el);
      delay = Math.min(delay + 80, 400);
    });
  }

  // ─── Render ───────────────────────────────────────────────────────────────
  function render() {
    var section = document.getElementById(SECTION_ID);
    if (!section) return;
    var lang = isSpanish() ? 'es' : 'en';
    var wrap = section.querySelector('.ks-wrap');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'ks-wrap';
      section.appendChild(wrap);
    }
    wrap.innerHTML = buildHTML(lang);
    setTimeout(initAnimations, 50);
  }

  // ─── Inject section into DOM ──────────────────────────────────────────────
  function injectSection() {
    if (document.getElementById(SECTION_ID)) {
      render();
      return true;
    }

    // Find the symptom recognition section rendered by React
    var sections = document.querySelectorAll('section');
    var targetSection = null;
    for (var i = 0; i < sections.length; i++) {
      var text = sections[i].textContent || '';
      if (text.includes('KIDNEYS NEED A RESCUE') || text.includes('RIÑONES NECESITAN') || text.includes('Symptom Recognition') || text.includes('Reconocimiento')) {
        targetSection = sections[i];
        break;
      }
    }

    if (!targetSection) return false;

    // Replace the section
    targetSection.id = SECTION_ID;
    targetSection.innerHTML = '';
    var wrap = document.createElement('div');
    wrap.className = 'ks-wrap';
    targetSection.appendChild(wrap);
    injectStyles();
    render();
    return true;
  }

  // ─── Init ─────────────────────────────────────────────────────────────────
  function init() {
    if (!injectSection()) {
      var attempts = 0;
      var interval = setInterval(function () {
        attempts++;
        if (injectSection() || attempts > 40) clearInterval(interval);
      }, 250);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }

  // Re-render on language toggle
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('button');
    if (!btn) return;
    var t = btn.textContent || '';
    if (t.includes('ES') || t.includes('EN')) {
      setTimeout(render, 200);
    }
  }, true);

  // Re-render on resize (desktop <-> mobile switch)
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(render, 300);
  });

})();
