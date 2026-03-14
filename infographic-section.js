(function () {
  const INFOGRAPHIC_SECTION_ID = "infographic-display";
  const INFOGRAPHIC_EN_PATH = "./DetoxInfographic_English.jpg";
  const INFOGRAPHIC_ES_PATH = "./DetoxInfographic_Spanish.jpg";

  function getLangToggleLabel() {
    var buttons = document.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i += 1) {
      var txt = (buttons[i].textContent || "").trim();
      if (txt.indexOf("🇲🇽 ES") !== -1 || txt.indexOf("🇺🇸 EN") !== -1) {
        return txt;
      }
    }
    return "";
  }

  function isEnglishView() {
    var label = getLangToggleLabel();
    if (!label) return true;
    // Toggle shows 🇲🇽 ES when in English mode (can switch to Spanish)
    // Toggle shows 🇺🇸 EN when in Spanish mode (can switch to English)
    return label.indexOf("🇲🇽 ES") !== -1;
  }

  function isSpanishView() {
    var label = getLangToggleLabel();
    if (!label) return false;
    // Toggle shows 🇺🇸 EN when in Spanish mode (can switch to English)
    return label.indexOf("🇺🇸 EN") !== -1;
  }

  function renderInfographic() {
    const orderSection = document.getElementById("order");
    if (!orderSection) return;

    let infographicContainer = document.getElementById(INFOGRAPHIC_SECTION_ID);
    if (infographicContainer) {
      infographicContainer.remove(); // Remove existing to re-render with correct language
    }

    infographicContainer = document.createElement("div");
    infographicContainer.id = INFOGRAPHIC_SECTION_ID;
    infographicContainer.className = "infographic-container";
    infographicContainer.style.cssText = "margin-bottom: 2rem; width: 100%;";

    const img = document.createElement("img");
    img.style.cssText = "width: 100%; height: auto; display: block; border-radius: 0.75rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);";
    img.alt = "Detox Infographic";

    if (isSpanishView()) {
      img.src = INFOGRAPHIC_ES_PATH;
    } else {
      img.src = INFOGRAPHIC_EN_PATH;
    }

    infographicContainer.appendChild(img);

    // Insert the infographic before the orderSection
    orderSection.parentNode.insertBefore(infographicContainer, orderSection);
  }

  function boot() {
    // Delay slightly to let the app mount fully, then render once.
    window.setTimeout(renderInfographic, 300);

    document.addEventListener("click", function (event) {
      var button = event.target.closest("button");
      if (!button) return;

      var label = (button.textContent || "").trim();
      if (label.indexOf("🇲🇽 ES") !== -1 || label.indexOf("🇺🇸 EN") !== -1) {
        window.setTimeout(renderInfographic, 200);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
