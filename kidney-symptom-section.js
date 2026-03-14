(function () {
  const SECTION_ID = "kidney-symptom-recognition";

  function createKidneySymptomSection() {
    const section = document.createElement("section");
    section.id = SECTION_ID;
    section.className = "kidney-symptom-section";

    section.innerHTML = `
      <div class="kidney-symptom-wrap">
        <span class="kidney-symptom-kicker">Symptom Recognition</span>

        <h2 class="kidney-symptom-title">DO YOUR KIDNEYS NEED A RESCUE?</h2>
        <p class="kidney-symptom-subtitle">A Warning You Cannot Afford to Ignore</p>

        <div class="kidney-symptom-intro">
          <p>Ask Yourself Honestly...</p>
          <p>Do you suffer from any of these?</p>
          <p class="kidney-symptom-note">(If you check even one box, your kidneys may already be signaling for help.)</p>
        </div>

        <h3 class="kidney-symptom-heading">⚠️ The Warning Signs Your Kidneys Are Crying Out For Help</h3>

        <div class="kidney-symptom-table-wrap">
          <table class="kidney-symptom-table">
            <thead>
              <tr>
                <th>❌ Do You...</th>
                <th>✅ What It Means</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wake up every morning with puffy eyes or swollen hands?</td>
                <td>Your kidneys are retaining fluid they cannot process—waste is building up overnight while you sleep.</td>
              </tr>
              <tr>
                <td>Feel exhausted no matter how much sleep you get?</td>
                <td>Toxins in your blood are poisoning your cells. Your kidneys are overwhelmed, and your body is fighting a war it cannot win.</td>
              </tr>
              <tr>
                <td>Notice your skin is dry, itchy, or breaking out?</td>
                <td>Your skin has become your "third kidney"—desperately trying to eliminate what your kidneys cannot. Waste is literally exiting through your pores.</td>
              </tr>
              <tr>
                <td>Get up multiple times at night to urinate?</td>
                <td>Your kidneys cannot concentrate urine properly. They are working overtime when they should be resting.</td>
              </tr>
              <tr>
                <td>Experience brain fog, poor concentration, or memory lapses?</td>
                <td>Waste products in your blood are clouding your brain. You are not "getting older"—you are getting toxic.</td>
              </tr>
              <tr>
                <td>Have high blood pressure that medication barely touches?</td>
                <td>Your kidneys regulate blood pressure. When they fail, your entire cardiovascular system suffers.</td>
              </tr>
              <tr>
                <td>Feel bloated, especially in your belly and ankles?</td>
                <td>Fluid retention is a sign your kidneys are losing the battle. Your body is drowning in its own waste.</td>
              </tr>
              <tr>
                <td>Notice a metallic taste in your mouth or ammonia breath?</td>
                <td>Urea is building up in your blood. Your kidneys are not filtering properly, and the toxins are backing up into your lungs.</td>
              </tr>
              <tr>
                <td>Suffer from muscle cramps, especially at night?</td>
                <td>Your electrolyte balance is destroyed. Minerals that should be lighting up your cells are instead depleting into nothing.</td>
              </tr>
              <tr>
                <td>Feel cold when others are warm?</td>
                <td>Your kidneys regulate mineral balance that affects circulation. Poor kidney function = poor blood flow = poor oxygenation.</td>
              </tr>
              <tr>
                <td>Have lower back pain that won't go away?</td>
                <td>Your kidneys are located in your lower back. Pain here is not always muscular—sometimes it is organ distress.</td>
              </tr>
              <tr>
                <td>Experience frequent urinary tract infections?</td>
                <td>A sluggish urinary system cannot flush bacteria effectively. Infections take hold because your defenses are down.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="kidney-symptom-heading kidney-symptom-heading-next">IF YOU IGNORE THESE SIGNS, HERE IS WHAT COMES NEXT.</h3>

        <article class="kidney-stage-card">
          <h4>Stage 1: The Slow Poisoning</h4>
          <p>You feel tired. A little puffy. A bit foggy. You blame aging. You blame stress. You ignore it.</p>
          <p>Meanwhile, urea and creatinine accumulate in your blood. These are waste products that should be flushed out. Instead, they circulate through every organ, every tissue, every cell—slowly poisoning you from the inside.</p>
          <p>You cannot smell it. You cannot taste it. But it is there.</p>
        </article>

        <article class="kidney-stage-card">
          <h4>Stage 2: The Body Begins to Break Down</h4>

          <div class="kidney-symptom-table-wrap">
            <table class="kidney-symptom-table kidney-impact-table">
              <thead>
                <tr>
                  <th>System</th>
                  <th>What Failing Kidneys Do To It</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Heart &amp; Blood Vessels</td>
                  <td>Fluid overload forces your heart to work harder. Blood pressure skyrockets. Your risk of heart attack and stroke multiplies. Kidney patients are more likely to die of heart disease than kidney failure itself.</td>
                </tr>
                <tr>
                  <td>Bones</td>
                  <td>Kidneys activate vitamin D. When they fail, calcium cannot be absorbed. Your body steals calcium from your bones. They become brittle, weak, prone to fracture. You shrink. You stoop.</td>
                </tr>
                <tr>
                  <td>Brain</td>
                  <td>Toxins cross the blood-brain barrier. Confusion sets in. Memory deteriorates. In late stages, it is called "uremic encephalopathy"—a fancy term for toxic waste clouding your mind until you cannot think clearly anymore.</td>
                </tr>
                <tr>
                  <td>Blood</td>
                  <td>Kidneys produce erythropoietin (EPO). Without it, red blood cell production plummets. You become severely anemic. Every step leaves you breathless. Every movement drains you.</td>
                </tr>
                <tr>
                  <td>Nerves</td>
                  <td>Toxins damage nerve endings. You feel tingling, numbness, "pins and needles" in your hands and feet. Eventually, you may lose sensation entirely.</td>
                </tr>
                <tr>
                  <td>Skin</td>
                  <td>Waste products deposit under your skin. It turns grayish-yellow. Itches uncontrollably. Some patients scratch until they bleed—just for relief that never comes.</td>
                </tr>
                <tr>
                  <td>Stomach &amp; Digestion</td>
                  <td>Nausea. Vomiting. Loss of appetite. Eating becomes a chore. Weight drops. Muscle wastes away. You become a skeleton of your former self.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article class="kidney-stage-card kidney-stage-final">
          <h4>Stage 3: The Machines Take Over</h4>
          <p>If you reach end-stage renal disease (ESRD), you do not die immediately.</p>
          <p>You are kept alive by machines.</p>
          <p>Three times per week. Four hours per session. You sit in a chair while a machine filters your blood because your kidneys no longer can.</p>
          <p>You cannot travel freely.</p>
          <p>You cannot miss treatments.</p>
          <p>You cannot eat the foods you love—potassium, phosphorus, and sodium become enemies.</p>
          <p>You watch your life shrink to the size of a dialysis chair.</p>
        </article>
      </div>
    `;

    return section;
  }

  function insertSection() {
    if (document.getElementById(SECTION_ID)) return true;

    const rootContainer = document.querySelector("#root > div");
    if (!rootContainer) return false;

    const sections = rootContainer.querySelectorAll(":scope > section");
    const newSection = createKidneySymptomSection();

    if (sections.length >= 2) {
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
