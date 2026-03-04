(function () {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mediaQuery.matches) return;

  const MAX_IMAGE_SHIFT = 48;
  const MAX_SECTION_SHIFT = 24;
  const HERO_IMAGE_SPEED = 0.12;
  const BASE_IMAGE_SPEED = 0.08;
  const BASE_SECTION_SPEED = 0.045;

  let sectionLayers = [];
  let imageLayers = [];
  let mutationObserver = null;
  let ticking = false;

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  function imageSpeedFor(index) {
    const variation = ((index % 5) - 2) * 0.01;
    return BASE_IMAGE_SPEED + variation;
  }

  function sectionSpeedFor(index) {
    const variation = (index % 2 === 0 ? 1 : -1) * 0.012;
    return BASE_SECTION_SPEED + variation;
  }

  function collectSectionLayers() {
    const sections = Array.from(document.querySelectorAll("section"));
    sectionLayers = sections.map((section, index) => {
      section.classList.add("parallax-section");
      return {
        el: section,
        speed: sectionSpeedFor(index),
      };
    });
  }

  function collectImageLayers() {
    const heroSection = document.querySelector("section");
    const images = Array.from(document.querySelectorAll("section img"));

    imageLayers = images.map((img, index) => {
      img.classList.add("parallax-image");
      const isHeroImage = heroSection && heroSection.contains(img);
      return {
        el: img,
        speed: isHeroImage ? HERO_IMAGE_SPEED : imageSpeedFor(index),
      };
    });
  }

  function requestTick() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateParallax);
  }

  function updateParallax() {
    ticking = false;
    const viewportHeight = window.innerHeight || 1;
    const viewportCenter = viewportHeight / 2;

    for (const layer of sectionLayers) {
      const rect = layer.el.getBoundingClientRect();
      if (rect.bottom < -120 || rect.top > viewportHeight + 120) continue;
      const distanceFromCenter = rect.top + rect.height / 2 - viewportCenter;
      const shift = clamp(-distanceFromCenter * layer.speed, -MAX_SECTION_SHIFT, MAX_SECTION_SHIFT);
      layer.el.style.setProperty("--section-parallax-y", `${shift.toFixed(2)}px`);
    }

    for (const layer of imageLayers) {
      const rect = layer.el.getBoundingClientRect();
      if (rect.bottom < -180 || rect.top > viewportHeight + 180) continue;
      const distanceFromCenter = rect.top + rect.height / 2 - viewportCenter;
      const shift = clamp(-distanceFromCenter * layer.speed, -MAX_IMAGE_SHIFT, MAX_IMAGE_SHIFT);
      layer.el.style.setProperty("--image-parallax-y", `${shift.toFixed(2)}px`);
    }
  }

  function syncTargets() {
    collectSectionLayers();
    collectImageLayers();
    requestTick();
  }

  function observeDomUpdates() {
    if (mutationObserver) mutationObserver.disconnect();
    mutationObserver = new MutationObserver((mutations) => {
      const changed = mutations.some(
        (mutation) => mutation.type === "childList" && (mutation.addedNodes.length || mutation.removedNodes.length),
      );
      if (changed) window.requestAnimationFrame(syncTargets);
    });

    mutationObserver.observe(document.getElementById("root") || document.body, {
      childList: true,
      subtree: true,
    });
  }

  function disableParallax() {
    window.removeEventListener("scroll", requestTick);
    window.removeEventListener("resize", requestTick);
    mutationObserver?.disconnect();
    mutationObserver = null;

    sectionLayers.forEach(({ el }) => el.style.removeProperty("--section-parallax-y"));
    imageLayers.forEach(({ el }) => el.style.removeProperty("--image-parallax-y"));
    document.documentElement.classList.remove("parallax-enabled");
  }

  function handleMotionPreferenceChange(event) {
    if (event.matches) {
      disableParallax();
    }
  }

  function initParallax() {
    document.documentElement.classList.add("parallax-enabled");
    syncTargets();
    observeDomUpdates();

    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick, { passive: true });

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleMotionPreferenceChange);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(handleMotionPreferenceChange);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => window.setTimeout(initParallax, 120));
  } else {
    window.setTimeout(initParallax, 120);
  }
})();
