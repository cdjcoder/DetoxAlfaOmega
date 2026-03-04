(function () {
  const rootSelector = "#root > div";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cardClassPattern =
    /(rounded-2xl|rounded-3xl|rounded-xl|glass-card|lifestyle-card|pipeline-step|phase-tab)/;
  const ctaClassPattern = /(bg-red-600|bg-emerald-700|bg-emerald-800|bg-white\/10|bg-white\/20)/;

  let mutationTimer = null;

  function isElementVisible(el) {
    return !!(el && el.getBoundingClientRect && el.getClientRects().length);
  }

  function assignAosAttributes() {
    const root = document.querySelector(rootSelector);
    if (!root) return;

    const sections = Array.from(root.querySelectorAll(":scope > section"));
    sections.forEach((section, index) => {
      if (!section.dataset.aos) {
        section.dataset.aos = index === 0 ? "zoom-out" : "fade-up";
        section.dataset.aosDuration = "900";
        section.dataset.aosDelay = String(Math.min(index * 50, 320));
        section.dataset.aosEasing = "ease-out-cubic";
      }
      section.classList.add("elevated-section");
    });

    const cards = Array.from(root.querySelectorAll("div, article")).filter((el) => {
      const className = typeof el.className === "string" ? el.className : "";
      return cardClassPattern.test(className) && isElementVisible(el);
    });

    cards.forEach((card, index) => {
      card.classList.add("micro-card");
      if (!card.dataset.aos) {
        card.dataset.aos = "fade-up";
        card.dataset.aosDuration = "700";
        card.dataset.aosDelay = String(Math.min((index % 7) * 55, 330));
      }
    });

    const ctas = Array.from(root.querySelectorAll("a, button")).filter((el) => {
      const className = typeof el.className === "string" ? el.className : "";
      const href = el.getAttribute("href") || "";
      return ctaClassPattern.test(className) || href === "#order" || href === "#truth" || href === "#order-form";
    });

    ctas.forEach((cta, index) => {
      cta.classList.add("micro-cta");
      if (!cta.dataset.aos) {
        cta.dataset.aos = "zoom-in";
        cta.dataset.aosDuration = "650";
        cta.dataset.aosDelay = String(Math.min((index % 5) * 60, 240));
      }
    });
  }

  function initAos() {
    if (reduceMotion) return;
    if (typeof window.AOS === "undefined") return;

    window.AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 44,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
    window.AOS.refreshHard();
  }

  function bindCardMicroInteractions() {
    if (reduceMotion) return;

    const cards = document.querySelectorAll(".micro-card");
    cards.forEach((card) => {
      if (card.dataset.motionBound === "1") return;
      card.dataset.motionBound = "1";

      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rx = ((x - cx) / Math.max(cx, 1)) * 3.2;
        const ry = ((cy - y) / Math.max(cy, 1)) * 2.8;

        card.style.setProperty("--tilt-x", `${rx.toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${ry.toFixed(2)}deg`);
        card.style.setProperty("--glow-x", `${((x / Math.max(rect.width, 1)) * 100).toFixed(2)}%`);
        card.style.setProperty("--glow-y", `${((y / Math.max(rect.height, 1)) * 100).toFixed(2)}%`);
      });

      card.addEventListener("pointerleave", () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
        card.style.setProperty("--glow-x", "50%");
        card.style.setProperty("--glow-y", "50%");
      });
    });
  }

  function applyBrandMotion() {
    assignAosAttributes();
    initAos();
    bindCardMicroInteractions();
  }

  function scheduleRefresh() {
    window.clearTimeout(mutationTimer);
    mutationTimer = window.setTimeout(applyBrandMotion, 120);
  }

  function observeDomMutations() {
    const rootNode = document.getElementById("root") || document.body;
    const observer = new MutationObserver((mutations) => {
      const changed = mutations.some(
        (mutation) =>
          mutation.type === "childList" && (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0),
      );
      if (changed) scheduleRefresh();
    });
    observer.observe(rootNode, { childList: true, subtree: true });
  }

  function init() {
    applyBrandMotion();
    observeDomMutations();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => window.setTimeout(init, 180));
  } else {
    window.setTimeout(init, 180);
  }
})();
