(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const DURATION = 1800;
  const EASING = (t) => 1 - Math.pow(1 - t, 4);

  function parseStatValue(raw) {
    const cleaned = raw.trim();
    const prefix = cleaned.match(/^([^0-9]*)/)?.[1] || "";
    const suffix = cleaned.match(/([^0-9.]*)$/)?.[1] || "";
    const numStr = cleaned.replace(prefix, "").replace(suffix, "");
    const num = parseFloat(numStr);

    if (isNaN(num)) return null;

    const hasDecimal = numStr.includes(".");
    const decimals = hasDecimal ? (numStr.split(".")[1] || "").length : 0;

    return { prefix, suffix, num, decimals };
  }

  function formatNumber(value, decimals) {
    return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
  }

  function animateElement(el) {
    const target = el.getAttribute("data-countup");
    if (!target) return;

    const parsed = parseStatValue(target);
    if (!parsed) return;

    el.setAttribute("data-countup-done", "1");

    const { prefix, suffix, num, decimals } = parsed;
    let startTime = null;

    el.textContent = prefix + formatNumber(0, decimals) + suffix;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / DURATION, 1);
      const easedProgress = EASING(progress);
      const current = easedProgress * num;

      el.textContent = prefix + formatNumber(current, decimals) + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(step);
  }

  function observeStats() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.getAttribute("data-countup-done")) {
            animateElement(entry.target);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -30px 0px" }
    );

    document.querySelectorAll("[data-countup]").forEach((el) => {
      if (!el.getAttribute("data-countup-done")) {
        observer.observe(el);
      }
    });

    return observer;
  }

  let observer = null;

  function init() {
    observer = observeStats();

    const rootNode = document.getElementById("root") || document.body;
    const mutationObserver = new MutationObserver(() => {
      document.querySelectorAll("[data-countup]:not([data-countup-done])").forEach((el) => {
        observer.observe(el);
      });
    });
    mutationObserver.observe(rootNode, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(init, 250));
  } else {
    setTimeout(init, 250);
  }
})();
