// ============================================================
// DATA
// ============================================================

const DATA = {
  ingredients: {
    en: [
      { name: "Potassium Bromate", found: "Breads, rolls", banned: "EU, Canada, China", concern: "Kidney damage, thyroid disruption" },
      { name: "Azodicarbonamide", found: "Breads, frozen dinners", banned: "EU, Australia", concern: "Respiratory issues, kidney stress" },
      { name: "BHA & BHT (Butylated Hydroxyanisole & Butylated Hydroxytoluene)", found: "Cereals, preserved foods", banned: "EU, Japan", concern: "Kidney and liver toxicity" },
      { name: "Brominated Vegetable Oil", found: "Citrus drinks", banned: "EU, India", concern: "Accumulates in kidneys" },
      { name: "Red 40 / Yellow 5 / Blue 1", found: "Countless processed foods", banned: "Most of Europe", concern: "Kidney tumors in animal studies" },
      { name: "Titanium Dioxide", found: "Candies, sauces", banned: "EU (since 2022)", concern: "Bowel inflammation, kidney accumulation" },
      { name: "Recombinant Bovine Growth Hormone / Recombinant Bovine Somatotropin", found: "Dairy products", banned: "EU, Canada, Japan", concern: "Hormonal disruption, kidney stress" },
      { name: "Synthetic Phosphate Additives", found: "Processed meats, sodas", banned: "Strictly limited in EU", concern: "Directly damages kidney tubules" }
    ],
    es: [
      { name: "Bromato de Potasio", found: "Panes, bollos", banned: "UE, Canadá, China", concern: "Daño renal, disrupción tiroidea" },
      { name: "Azodicarbonamida", found: "Panes, cenas congeladas", banned: "UE, Australia", concern: "Problemas respiratorios, estrés renal" },
      { name: "BHA y BHT (Hidroxianisol Butilado e Hidroxitolueno Butilado)", found: "Cereales, alimentos conservados", banned: "UE, Japón", concern: "Toxicidad renal y hepática" },
      { name: "Aceite Vegetal Brominado", found: "Bebidas cítricas", banned: "UE, India", concern: "Se acumula en los riñones" },
      { name: "Rojo 40 / Amarillo 5 / Azul 1", found: "Incontables alimentos procesados", banned: "La mayor parte de Europa", concern: "Tumores renales en estudios animales" },
      { name: "Dióxido de Titanio", found: "Dulces, salsas", banned: "UE (desde 2022)", concern: "Inflamación intestinal, acumulación renal" },
      { name: "Hormona de Crecimiento Bovina Recombinante / Somatotropina Bovina Recombinante", found: "Productos lácteos", banned: "UE, Canadá, Japón", concern: "Disrupción hormonal, estrés renal" },
      { name: "Aditivos de Fosfato Sintético", found: "Carnes procesadas, refrescos", banned: "Estrictamente limitado en UE", concern: "Daña directamente los túbulos renales" }
    ]
  },

  evidence: {
    en: [
      { source: "CDC (2023)", finding: "35.5 million American adults have chronic kidney disease; 90% don't know it" },
      { source: "National Institute of Diabetes and Digestive and Kidney Diseases", finding: "Black Americans face 4× higher risk of kidney failure than whites" },
      { source: "Frontiers in Nephrology (2023)", finding: "Hypertension accounts for 25–30% of new end-stage renal disease cases" },
      { source: "National Kidney Foundation", finding: "Ultra-processed foods linked to 24% higher risk of chronic kidney disease" },
      { source: "MedPAC (2025)", finding: "Two companies control 75% of U.S. dialysis centers; profit margins ~17%" },
      { source: "Environmental Protection Agency", finding: "Per- and polyfluoroalkyl substances (forever chemicals) linked to kidney cancer and reduced kidney function" },
      { source: "PMC (2024)", finding: "Arsenic exposure consistently associated with higher rates of chronic kidney disease" },
      { source: "StatPearls", finding: "Non-steroidal anti-inflammatory drug use doubles chronic kidney disease risk; chronic use causes tubulointerstitial nephritis" }
    ],
    es: [
      { source: "CDC (2023)", finding: "35.5 millones de adultos estadounidenses tienen Enfermedad Renal Crónica; el 90% no lo sabe" },
      { source: "Instituto Nacional de Diabetes y Enfermedades Digestivas y Renales", finding: "Los estadounidenses negros tienen un riesgo 4× mayor de insuficiencia renal" },
      { source: "Frontiers in Nephrology (2023)", finding: "La hipertensión representa el 25–30% de los nuevos casos de Enfermedad Renal en Etapa Terminal" },
      { source: "National Kidney Foundation", finding: "Los alimentos ultraprocesados están vinculados a un 24% más de riesgo de Enfermedad Renal Crónica" },
      { source: "MedPAC (2025)", finding: "Dos empresas controlan el 75% de los centros de diálisis de EE.UU." },
      { source: "Agencia de Protección Ambiental", finding: "Las sustancias per- y polifluoroalquilo (químicos eternos) están vinculadas al cáncer renal y función renal reducida" },
      { source: "PMC (2024)", finding: "La exposición al arsénico está consistentemente asociada con mayor incidencia de Enfermedad Renal Crónica" },
      { source: "StatPearls", finding: "El uso de antiinflamatorios no esteroideos duplica el riesgo de Enfermedad Renal Crónica; el uso crónico causa nefritis tubulointersticial" }
    ]
  },

  disparity: {
    en: [
      { stat: "4×", desc: "Black Americans are 4× more likely to develop kidney failure than white Americans." },
      { stat: "2×", desc: "Hispanic Americans face double the risk of kidney failure." },
      { stat: "90%", desc: "90% of chronic kidney disease patients don't know they have it — disproportionately in under-served communities." }
    ],
    es: [
      { stat: "4×", desc: "Los estadounidenses negros tienen 4× más probabilidades de desarrollar insuficiencia renal." },
      { stat: "2×", desc: "Los hispanoamericanos enfrentan el doble del riesgo de insuficiencia renal." },
      { stat: "90%", desc: "El 90% de los pacientes con Enfermedad Renal Crónica no saben que lo tienen — desproporcionadamente en comunidades desatendidas." }
    ]
  },

  pipeline: {
    en: [
      "Allow harmful additives via regulatory capture",
      "Diabetes & hypertension rates skyrocket",
      "35 million Americans develop chronic kidney disease",
      "Pharma manages symptoms, not causes",
      "Kidneys fail → dialysis"
    ],
    es: [
      "Permitir aditivos dañinos",
      "Diabetes e hipertensión se disparan",
      "35 millones con Enfermedad Renal Crónica",
      "Fármacos gestionan síntomas",
      "Riñones fallan → diálisis"
    ]
  },

  phases: {
    en: [
      {
        phase: "Phase 1",
        label: "Liver Support Complex",
        color: "emerald",
        items: [
          { name: "Milk Thistle (Silymarin)", desc: "One of the most researched plants for liver health. Protects liver cells from oxidative stress, supports tissue regeneration, and boosts glutathione — your body's master antioxidant. Clinical evidence shows improved liver function." },
          { name: "Artichoke Leaf", desc: "Stimulates bile production — your body's natural detergent. Better bile flow means more efficient elimination of fat-soluble wastes. Also shown to lower cholesterol and improve liver enzyme profiles." },
          { name: "Dandelion Leaf", desc: "Acts as a gentle diuretic while providing rich antioxidants. In animal studies, protects liver cells from damage and reduces fat accumulation in hepatic tissue." },
          { name: "Yucca Root", desc: "Brings anti-inflammatory compounds that calm systemic inflammation, allowing your detox pathways to operate with greater efficiency." }
        ]
      },
      {
        phase: "Phase 2",
        label: "Kidney & Hydration Base",
        color: "blue",
        items: [
          { name: "Concentrated Aloe Vera", desc: "Soothes the entire digestive tract while providing gentle support for regularity. Its polysaccharides calm inflammation and support the mucosal lining — your first line of defense." },
          { name: "Lemon", desc: "Provides vitamin C for antioxidant support and stimulates digestive juices. Its citrates may help prevent certain kidney stones by binding with calcium in urine." },
          { name: "Shilajit", desc: "A mineral-rich resin from the Himalayan mountains, prized in Ayurvedic medicine for millennia. Its fulvic acid restores cellular energy balance. Third-party tested for heavy metals, standardized for fulvic acid content." }
        ]
      },
      {
        phase: "Phase 3",
        label: "Lipid Protection Complex",
        color: "amber",
        items: [
          { name: "Vitamin E", desc: "Your body's primary fat-soluble antioxidant, protecting cell membranes throughout your brain, nerves, and cardiovascular system from daily oxidative damage." },
          { name: "Safflower Oil", desc: "Provides essential fatty acids that support cardiovascular health, maintain skin barriers, and help your body absorb fat-soluble nutrients more effectively — because many toxins are fat-soluble and require healthy fats to be eliminated." }
        ]
      }
    ],
    es: [
      {
        phase: "Fase 1",
        label: "Complejo de Apoyo Hepático",
        color: "emerald",
        items: [
          { name: "Cardo Mariano (Silimarina)", desc: "Una de las plantas más investigadas para la salud hepática. Protege las células del hígado del estrés oxidativo, apoya la regeneración del tejido y aumenta el glutatión — el antioxidante maestro del cuerpo." },
          { name: "Hoja de Alcachofa", desc: "Estimula la producción de bilis — el detergente natural del cuerpo. Mejor flujo biliar significa eliminación más eficiente de residuos liposolubles. También reduce el colesterol y mejora los perfiles enzimáticos hepáticos." },
          { name: "Hoja de Diente de León", desc: "Actúa como diurético suave mientras proporciona antioxidantes ricos. En estudios animales, protege las células del hígado del daño y reduce la acumulación de grasa en el tejido hepático." },
          { name: "Raíz de Yuca", desc: "Aporta compuestos antiinflamatorios que calman la inflamación sistémica, permitiendo que tus vías de desintoxicación operen con mayor eficiencia." }
        ]
      },
      {
        phase: "Fase 2",
        label: "Base de Riñón e Hidratación",
        color: "blue",
        items: [
          { name: "Aloe Vera Concentrado", desc: "Calma todo el tracto digestivo mientras proporciona apoyo suave para la regularidad. Sus polisacáridos calman la inflamación y apoyan el revestimiento mucoso — tu primera línea de defensa." },
          { name: "Limón", desc: "Proporciona vitamina C para el apoyo antioxidante y estimula los jugos digestivos. Sus citratos pueden ayudar a prevenir ciertos cálculos renales al unirse con el calcio en la orina." },
          { name: "Shilajit", desc: "Una resina rica en minerales de las montañas del Himalaya, valorada en la medicina ayurvédica durante milenios. Su ácido fúlvico restaura el equilibrio energético celular. Probado por terceros para metales pesados." }
        ]
      },
      {
        phase: "Fase 3",
        label: "Complejo de Protección Lipídica",
        color: "amber",
        items: [
          { name: "Vitamina E", desc: "El principal antioxidante liposoluble del cuerpo, que protege las membranas celulares en el cerebro, los nervios y el sistema cardiovascular del daño oxidativo diario." },
          { name: "Aceite de Cártamo", desc: "Proporciona ácidos grasos esenciales que apoyan la salud cardiovascular, mantienen las barreras cutáneas y ayudan a absorber nutrientes liposolubles, ya que muchas toxinas son liposolubles y necesitan grasas saludables para ser eliminadas." }
        ]
      }
    ]
  },

  results: {
    en: [
      { img: "/11_wellness_person_health_vitality.jpg", alt: "Clearer skin", t: "Clearer, More Radiant Skin", d: "As the liver and kidneys begin clearing what was exiting through your pores." },
      { img: "/fatigue-03.jpg", alt: "Natural energy", t: "Return of Natural Energy", d: "Clean, sustained vitality — not the stimulant kind. The kind that comes from a body running efficiently." },
      { img: "/brainfog-01.jpg", alt: "Mental clarity", t: "Mental Clarity & Focus", d: "Brain fog lifts when the internal chemical load lightens and inflammation subsides." },
      { img: "/bloating-01.jpg", alt: "Less bloated", t: "Lighter, Less Bloated", d: "As bile flow improves, digestion becomes more comfortable and efficient." },
      { img: "/swelling-01.jpg", alt: "Reduced puffiness", t: "Reduced Puffiness", d: "Kidneys clearing waste more efficiently — visible in your face and ankles." },
      { img: "/kidney-06.jpg", alt: "Better kidney health", t: "Better Quality Sleep", d: "A calmer, less toxic internal environment supports deeper, more restorative rest." }
    ],
    es: [
      { img: "/11_wellness_person_health_vitality.jpg", alt: "Piel más clara", t: "Piel Más Clara y Radiante", d: "A medida que el hígado y los riñones comienzan a eliminar lo que salía por tus poros." },
      { img: "/fatigue-03.jpg", alt: "Energía natural", t: "Retorno de la Energía Natural", d: "Vitalidad limpia y sostenida — no el tipo de estimulante. El tipo que proviene de un cuerpo que funciona eficientemente." },
      { img: "/brainfog-01.jpg", alt: "Claridad mental", t: "Claridad Mental y Enfoque", d: "La niebla mental se levanta cuando la carga química interna se aligera y la inflamación disminuye." },
      { img: "/bloating-01.jpg", alt: "Menos hinchado", t: "Más Ligero, Menos Hinchado", d: "A medida que mejora el flujo de bilis, la digestión se vuelve más cómoda y eficiente." },
      { img: "/swelling-01.jpg", alt: "Menos hinchazón", t: "Reducción de la Hinchazón", d: "Los riñones eliminan los residuos más eficientemente — visible en tu cara y tobillos." },
      { img: "/kidney-06.jpg", alt: "Mejor salud renal", t: "Mejor Calidad de Sueño", d: "Un ambiente interno más tranquilo y menos tóxico apoya un descanso más profundo y restaurador." }
    ]
  },

  lifestyle: {
    en: [
      { img: "/08_lemon_kidney_health_st_vincents.jpg", alt: "Drink water", t: "Drink Plenty of Filtered Water", d: "Hydration is essential — your kidneys cannot flush waste without adequate fluid." },
      { img: "/07_herb_artichoke_leaf_plant.jpg", alt: "Plant meals", t: "Eat Light, Plant-Forward Meals", d: "Reduce the liver's processing load. Whole foods only during the protocol window." },
      { img: "/06_herb_milk_thistle_blossom.jpg", alt: "Herbal support", t: "Eliminate Alcohol Completely", d: "Let your liver focus entirely on what it's been carrying. No exceptions." },
      { img: "/07_herb_dandelion_spring_sunshine.jpg", alt: "Prioritize rest", t: "Prioritise Sleep", d: "The liver performs its deepest detoxification work between 1–3am while you sleep." }
    ],
    es: [
      { img: "/08_lemon_kidney_health_st_vincents.jpg", alt: "Bebe agua", t: "Bebe Mucha Agua Filtrada", d: "La hidratación es esencial — tus riñones no pueden eliminar desechos sin líquido adecuado." },
      { img: "/07_herb_artichoke_leaf_plant.jpg", alt: "Comidas vegetales", t: "Come Comidas Ligeras y Vegetales", d: "Reduce la carga de procesamiento del hígado. Solo alimentos integrales durante el protocolo." },
      { img: "/06_herb_milk_thistle_blossom.jpg", alt: "Apoyo herbal", t: "Elimina el Alcohol Completamente", d: "Deja que tu hígado se enfoque completamente en lo que ha estado cargando. Sin excepciones." },
      { img: "/07_herb_dandelion_spring_sunshine.jpg", alt: "Prioriza el descanso", t: "Prioriza el Sueño", d: "El hígado realiza su trabajo de desintoxicación más profundo entre la 1–3am mientras duermes." }
    ]
  },

  included: {
    en: [
      "LiverPrep Botanical Powder Blend (Phase 1 — Liver Support)",
      "LiverClean Safflower & Vitamin E Oil (Phase 3 — Lipid Protection)",
      "Pure Lemon Juice (Phase 2 — Kidney Base)",
      "Shilajit & Aloe Vera Complex (Phase 2 — Kidney & Hydration)",
      "7-Day Protocol Guide & Cleanse Calendar",
      "Free Shipping"
    ],
    es: [
      "LiverPrep Mezcla de Polvo Botánico (Fase 1 — Apoyo Hepático)",
      "LiverClean Aceite de Cártamo y Vitamina E (Fase 3 — Protección Lipídica)",
      "Jugo de Limón Puro (Fase 2 — Base Renal)",
      "Complejo Shilajit y Aloe Vera (Fase 2 — Riñón e Hidratación)",
      "Guía del Protocolo de 7 Días y Calendario de Limpieza",
      "Envío Gratis"
    ]
  }
};

// ============================================================
// STATE
// ============================================================
let lang = 'en';
let activePhase = 0;
let formData = {};

// Color config for phases (dot/pill colors used in renderPhaseContent)
const phaseColors = {
  emerald: { dot: '#10b981', pill: 'background: rgba(6,78,59,0.5); border: 1px solid rgba(5,150,105,0.5); color: #34d399;' },
  blue:    { dot: '#3b82f6', pill: 'background: rgba(30,58,138,0.5); border: 1px solid rgba(37,99,235,0.5); color: #93c5fd;' },
  amber:   { dot: '#f59e0b', pill: 'background: rgba(120,53,15,0.5); border: 1px solid rgba(180,83,9,0.5); color: #fbbf24;' },
};

// ============================================================
// RENDER FUNCTIONS
// ============================================================

function renderIngredients() {
  const tbody = document.getElementById('ingredientsBody');
  const items = DATA.ingredients[lang];
  tbody.innerHTML = items.map((item, i) => `
    <tr style="${i % 2 === 0 ? 'background: rgba(255,255,255,0.02)' : ''}">
      <td class="font-semibold text-white" style="font-family:'Lexend Deca',sans-serif;">${item.name}</td>
      <td class="text-slate-400 hidden sm:table-cell">${item.found}</td>
      <td class="text-red-400 font-medium">${item.banned}</td>
      <td class="text-slate-400 hidden md:table-cell">${item.concern}</td>
    </tr>
  `).join('');
}

function renderEvidence() {
  const tbody = document.getElementById('evidenceBody');
  const items = DATA.evidence[lang];
  tbody.innerHTML = items.map((item, i) => `
    <tr style="${i % 2 === 0 ? 'background: rgba(255,255,255,0.03)' : ''}">
      <td class="font-semibold text-amber-300 whitespace-nowrap" style="font-family:'Lexend Deca',sans-serif;">${item.source}</td>
      <td class="text-amber-100/90">${item.finding}</td>
    </tr>
  `).join('');
}

function renderDisparity() {
  const container = document.getElementById('disparityCards');
  const items = DATA.disparity[lang];
  container.innerHTML = items.map((item, i) => `
    <div data-aos="fade-up" data-aos-delay="${i * 100}">
      <div class="glass-card p-7 text-center h-full" style="border-radius:20px;border:1px solid rgba(148,163,184,0.12);background:rgba(15,23,42,0.5);backdrop-filter:blur(14px);transition:transform 350ms cubic-bezier(0.16,1,0.3,1),box-shadow 300ms ease,border-color 300ms ease;">
        <div style="font-family:'Lexend Deca',sans-serif;font-size:3.25rem;font-weight:900;letter-spacing:-0.04em;line-height:1;" class="text-red-400 mb-4" data-countup="${item.stat}">${item.stat}</div>
        <p class="body-sm text-slate-400" style="line-height:1.7;">${item.desc}</p>
      </div>
    </div>
  `).join('');
  if (typeof AOS !== 'undefined') AOS.refresh();
}

function renderPipeline() {
  const container = document.getElementById('pipelineSteps');
  const items = DATA.pipeline[lang];
  container.innerHTML = items.map((step, i) => `
    <div class="pipeline-step" style="border-radius:14px;border:1px solid rgba(148,163,184,0.1);background:rgba(15,23,42,0.45);backdrop-filter:blur(8px);padding:0.75rem 0.6rem;text-align:center;transition:transform 300ms cubic-bezier(0.16,1,0.3,1);">
      <div class="pipeline-num" style="width:1.5rem;height:1.5rem;border-radius:50%;background:linear-gradient(180deg,#ef4444,#dc2626);color:#fff;font-size:0.7rem;font-weight:800;display:flex;align-items:center;justify-content:center;margin:0 auto 0.4rem;">${i + 1}</div>
      <p class="body-sm text-slate-400" style="font-size:0.7rem;line-height:1.4;">${step}</p>
    </div>
  `).join('');
}

function renderPhaseTabs() {
  const container = document.getElementById('phaseTabs');
  const phases = DATA.phases[lang];
  container.innerHTML = phases.map((phase, i) => {
    const isActive = i === activePhase;
    const activeClass = isActive ? `active-${phase.color}` : '';
    return `
      <button onclick="setPhase(${i})" class="phase-tab ${activeClass}">
        ${phase.phase}: ${phase.label}
      </button>
    `;
  }).join('');
}

function renderPhaseContent() {
  const container = document.getElementById('phaseContent');
  const phases = DATA.phases[lang];
  const phase = phases[activePhase];

  const pillColors = {
    emerald: 'background: rgba(6,78,59,0.5); border: 1px solid rgba(5,150,105,0.5); color: #34d399;',
    blue:    'background: rgba(30,58,138,0.5); border: 1px solid rgba(37,99,235,0.5); color: #93c5fd;',
    amber:   'background: rgba(120,53,15,0.5); border: 1px solid rgba(180,83,9,0.5); color: #fbbf24;',
  };
  const dotColors = {
    emerald: '#10b981',
    blue:    '#3b82f6',
    amber:   '#f59e0b',
  };

  container.innerHTML = `
    <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-7"
         style="font-family:'Lexend Deca',sans-serif; ${pillColors[phase.color]}">
      ${phase.phase} — ${phase.label}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-7">
      ${phase.items.map(item => `
        <div class="flex gap-4">
          <div style="width:10px;height:10px;border-radius:50%;background:${dotColors[phase.color]};margin-top:6px;flex-shrink:0;
                      box-shadow: 0 0 8px ${dotColors[phase.color]}60;"></div>
          <div>
            <h4 style="font-family:'Lexend Deca',sans-serif;" class="font-bold text-white mb-2 drop-shadow">${item.name}</h4>
            <p class="body-sm text-amber-100/85 leading-6">${item.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderResults() {
  const container = document.getElementById('resultsGrid');
  const items = DATA.results[lang];
  container.innerHTML = items.map((item, i) => `
    <div data-aos="fade-up" data-aos-delay="${i * 80}">
      <div class="glass-card-amber overflow-hidden" style="border-radius:20px;border:1px solid rgba(255,255,255,0.1);background:rgba(30,20,8,0.55);backdrop-filter:blur(12px);transition:transform 350ms cubic-bezier(0.16,1,0.3,1),box-shadow 300ms ease;">
        <div class="w-full overflow-hidden" style="height:clamp(140px, 22vw, 192px);">
          <img src="${item.img}" alt="${item.alt}" loading="lazy"
               class="w-full h-full object-cover"
               style="transition:transform 0.6s cubic-bezier(0.16,1,0.3,1);"
               onmouseover="this.style.transform='scale(1.06)'"
               onmouseout="this.style.transform='scale(1)'" />
        </div>
        <div class="p-6">
          <h3 style="font-family:'Lexend Deca',sans-serif;letter-spacing:-0.02em;" class="font-bold text-white text-lg mb-2">${item.t}</h3>
          <p class="body-sm text-amber-100/80 leading-6" style="line-height:1.7;">${item.d}</p>
        </div>
      </div>
    </div>
  `).join('');
  if (typeof AOS !== 'undefined') AOS.refresh();
}

function renderLifestyle() {
  const container = document.getElementById('lifestyleCards');
  const items = DATA.lifestyle[lang];
  container.innerHTML = items.map((item, i) => `
    <div class="lifestyle-card" data-aos="fade-up" data-aos-delay="${i * 80}"
         style="border-radius:20px;overflow:hidden;border:1px solid rgba(255,255,255,0.1);background:rgba(30,20,8,0.5);backdrop-filter:blur(10px);transition:transform 350ms cubic-bezier(0.16,1,0.3,1),box-shadow 300ms ease;">
      <div style="height:clamp(120px, 20vw, 160px);overflow:hidden;">
        <img src="${item.img}" alt="${item.alt}" loading="lazy"
             style="width:100%;height:100%;object-fit:cover;transition:transform 0.6s cubic-bezier(0.16,1,0.3,1);"
             onmouseover="this.style.transform='scale(1.06)'"
             onmouseout="this.style.transform='scale(1)'" />
      </div>
      <div class="px-5 py-4">
        <p style="font-family:'Lexend Deca',sans-serif;letter-spacing:-0.01em;" class="font-bold text-white text-sm mb-1.5">${item.t}</p>
        <p class="body-sm text-amber-100/80" style="line-height:1.7;">${item.d}</p>
      </div>
    </div>
  `).join('');
  if (typeof AOS !== 'undefined') AOS.refresh();
}

function renderIncluded() {
  const container = document.getElementById('includedList');
  const items = DATA.included[lang];
  container.innerHTML = items.map(item => `
    <li class="flex items-start gap-3">
      <span class="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
            style="background: rgba(5,150,105,0.15); border: 1px solid rgba(5,150,105,0.3);">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-emerald-600" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </span>
      <span class="body-sm text-emerald-900 leading-6">${item}</span>
    </li>
  `).join('');
}

// ============================================================
// LANGUAGE TRANSLATION
// ============================================================

function updatePageText() {
  // Update all [data-en] / [data-es] elements
  document.querySelectorAll('[data-en]').forEach(el => {
    const text = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-es');
    if (text) el.textContent = text;
  });

  // Update season select options
  const seasonSelect = document.getElementById('seasonSelect');
  if (seasonSelect) {
    Array.from(seasonSelect.options).forEach(opt => {
      const text = lang === 'en' ? opt.getAttribute('data-en') : opt.getAttribute('data-es');
      if (text) opt.textContent = text;
    });
  }

  // Update lang toggle button
  const langBtn = document.getElementById('langToggle');
  langBtn.textContent = lang === 'en' ? '🇪🇸 ES' : '🇺🇸 EN';

  // Re-render dynamic sections
  renderIngredients();
  renderEvidence();
  renderDisparity();
  renderPipeline();
  renderPhaseTabs();
  renderPhaseContent();
  renderResults();
  renderLifestyle();
  renderIncluded();
}

// ============================================================
// PHASE TABS
// ============================================================

function setPhase(index) {
  activePhase = index;
  renderPhaseTabs();
  renderPhaseContent();
}

// ============================================================
// SCROLL EFFECTS
// ============================================================

function handleScroll() {
  const scrollY = window.scrollY;

  // Navbar — toggle .scrolled class
  const nav = document.getElementById('mainNav');
  if (nav) {
    if (scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  // Back to top button
  const btn = document.getElementById('backToTop');
  if (btn) {
    if (scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }
}


// ============================================================
// ORDER FORM
// ============================================================

function submitOrder(event) {
  event.preventDefault();
  const form = event.target;
  const btn = document.getElementById('submitBtn');

  // Collect form data
  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value || '—';
  const address = form.address.value;
  const city = form.city.value;
  const state = form.state.value;
  const zip = form.zip.value;
  const country = form.country.value;
  const qty = form.qty.value;
  const season = form.season.value || 'Not specified';
  const notes = form.notes.value || 'None';

  const total = `$${(parseInt(qty) * 98).toFixed(2)}`;
  const isEn = lang === 'en';

  // Set submitting state
  btn.disabled = true;
  btn.querySelector('span').textContent = isEn ? 'Opening your email...' : 'Abriendo tu correo...';

  const subject = encodeURIComponent(`🌿 Renewal Protocol Reservation Deposit — ${total} — ${name}`);
  const body = encodeURIComponent(`THE RENEWAL PROTOCOL — NEW ORDER
===================================
Total: ${total}  |  Qty: ${qty} × $98
Season: ${season}

CUSTOMER
---------
Name:    ${name}
Email:   ${email}
Phone:   ${phone}

SHIPPING
---------
${address}
${city}, ${state} ${zip}
${country}

Notes: ${notes}
===================================`);

  window.location.href = `mailto:CesarJames@mail.com?subject=${subject}&body=${body}`;

  setTimeout(() => {
    // Show success
    document.getElementById('orderForm').classList.add('hidden');
    const successDiv = document.getElementById('formSuccess');
    successDiv.classList.remove('hidden');

    // Summary
    const summaryDiv = document.getElementById('successSummary');
    summaryDiv.innerHTML = `
      <div class="flex justify-between text-sm mb-2">
        <span class="text-gray-500">${isEn ? 'Name' : 'Nombre'}</span>
        <span class="text-white font-semibold">${name}</span>
      </div>
      <div class="flex justify-between text-sm mb-2">
        <span class="text-gray-500">${isEn ? 'Qty' : 'Cant.'}</span>
        <span class="text-white font-semibold">${qty} kit${parseInt(qty) > 1 ? 's' : ''}</span>
      </div>
      <div class="border-t border-gray-800 pt-2 flex justify-between font-black text-red-400 text-base">
        <span>Total</span>
        <span>${total}</span>
      </div>
    `;

    // Re-enable button
    btn.disabled = false;
    btn.querySelector('span').textContent = isEn ? 'Reserve My Kit — $98 Deposit →' : 'Reservar Mi Kit — Depósito $98 →';
  }, 800);
}

function resetForm() {
  document.getElementById('orderForm').classList.remove('hidden');
  document.getElementById('formSuccess').classList.add('hidden');
  document.getElementById('orderForm').reset();
}

// ============================================================
// INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Language toggle
  document.getElementById('langToggle').addEventListener('click', () => {
    lang = lang === 'en' ? 'es' : 'en';
    activePhase = 0;
    updatePageText();
  });

  // Scroll listener
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Initial renders
  renderIngredients();
  renderEvidence();
  renderDisparity();
  renderPipeline();
  renderPhaseTabs();
  renderPhaseContent();
  renderResults();
  renderLifestyle();
  renderIncluded();

  // AOS refresh after all dynamic content rendered
  if (typeof AOS !== 'undefined') AOS.refresh();
});
