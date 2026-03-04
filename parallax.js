(function () {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mediaQuery.matches) return;

  const MAX_IMAGE_SHIFT_Y = 48;
  const MAX_IMAGE_SHIFT_X = 18;
  const MAX_SECTION_SHIFT_Y = 24;
  const MAX_SECTION_SHIFT_X = 16;
  const MAX_GRID_SHIFT = 42;
  const MAX_SECTION_DEPTH = 26;
  const MAX_SECTION_TILT = 4;
  const HERO_IMAGE_SPEED = 0.12;
  const BASE_IMAGE_SPEED = 0.08;
  const BASE_SECTION_SPEED = 0.045;
  const SECTION_VARS = [
    "--section-parallax-y",
    "--section-parallax-x",
    "--section-grid-y",
    "--section-grid-x",
    "--section-tilt-x",
    "--section-tilt-y",
    "--section-depth",
  ];
  const IMAGE_VARS = ["--image-parallax-y", "--image-parallax-x", "--image-shadow-depth"];

  let sectionLayers = [];
  let imageLayers = [];
  let mutationObserver = null;
  let ticking = false;
  let pointerX = 0;
  let pointerY = 0;

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

  function handlePointerMove(event) {
    const viewportWidth = window.innerWidth || 1;
    const viewportHeight = window.innerHeight || 1;
    pointerX = (event.clientX / viewportWidth - 0.5) * 2;
    pointerY = (event.clientY / viewportHeight - 0.5) * 2;
    requestTick();
  }

  function resetPointer() {
    pointerX *= 0.5;
    pointerY *= 0.5;
    requestTick();
  }

  function updateParallax() {
    ticking = false;
    const viewportHeight = window.innerHeight || 1;
    const viewportCenter = viewportHeight / 2;

    for (const layer of sectionLayers) {
      const rect = layer.el.getBoundingClientRect();
      if (rect.bottom < -120 || rect.top > viewportHeight + 120) continue;
      const distanceFromCenter = rect.top + rect.height / 2 - viewportCenter;
      const centerProximity = 1 - clamp(Math.abs(distanceFromCenter) / viewportHeight, 0, 1);
      const shiftY = clamp(-distanceFromCenter * layer.speed, -MAX_SECTION_SHIFT_Y, MAX_SECTION_SHIFT_Y);
      const shiftX = clamp(
        pointerX * MAX_SECTION_SHIFT_X * (0.65 + centerProximity * 0.7),
        -MAX_SECTION_SHIFT_X,
        MAX_SECTION_SHIFT_X,
      );
      const gridY = clamp(shiftY * 1.7, -MAX_GRID_SHIFT, MAX_GRID_SHIFT);
      const gridX = clamp(pointerX * 26, -MAX_GRID_SHIFT, MAX_GRID_SHIFT);
      const tiltX = clamp(pointerY * -MAX_SECTION_TILT, -MAX_SECTION_TILT, MAX_SECTION_TILT);
      const tiltY = clamp(pointerX * MAX_SECTION_TILT, -MAX_SECTION_TILT, MAX_SECTION_TILT);
      const depth = (centerProximity * MAX_SECTION_DEPTH).toFixed(2);

      layer.el.style.setProperty("--section-parallax-y", `${shiftY.toFixed(2)}px`);
      layer.el.style.setProperty("--section-parallax-x", `${shiftX.toFixed(2)}px`);
      layer.el.style.setProperty("--section-grid-y", `${gridY.toFixed(2)}px`);
      layer.el.style.setProperty("--section-grid-x", `${gridX.toFixed(2)}px`);
      layer.el.style.setProperty("--section-tilt-x", `${tiltX.toFixed(2)}deg`);
      layer.el.style.setProperty("--section-tilt-y", `${tiltY.toFixed(2)}deg`);
      layer.el.style.setProperty("--section-depth", `${depth}px`);
    }

    for (const layer of imageLayers) {
      const rect = layer.el.getBoundingClientRect();
      if (rect.bottom < -180 || rect.top > viewportHeight + 180) continue;
      const distanceFromCenter = rect.top + rect.height / 2 - viewportCenter;
      const centerProximity = 1 - clamp(Math.abs(distanceFromCenter) / viewportHeight, 0, 1);
      const shiftY = clamp(-distanceFromCenter * layer.speed, -MAX_IMAGE_SHIFT_Y, MAX_IMAGE_SHIFT_Y);
      const shiftX = clamp(
        pointerX * MAX_IMAGE_SHIFT_X * (0.7 + centerProximity * 0.6),
        -MAX_IMAGE_SHIFT_X,
        MAX_IMAGE_SHIFT_X,
      );
      const shadowDepth = (6 + centerProximity * 10).toFixed(2);

      layer.el.style.setProperty("--image-parallax-y", `${shiftY.toFixed(2)}px`);
      layer.el.style.setProperty("--image-parallax-x", `${shiftX.toFixed(2)}px`);
      layer.el.style.setProperty("--image-shadow-depth", `${shadowDepth}px`);
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
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerleave", resetPointer);
    window.removeEventListener("blur", resetPointer);
    mutationObserver?.disconnect();
    mutationObserver = null;

    sectionLayers.forEach(({ el }) => SECTION_VARS.forEach((cssVar) => el.style.removeProperty(cssVar)));
    imageLayers.forEach(({ el }) => IMAGE_VARS.forEach((cssVar) => el.style.removeProperty(cssVar)));
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
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", resetPointer, { passive: true });
    window.addEventListener("blur", resetPointer, { passive: true });

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
