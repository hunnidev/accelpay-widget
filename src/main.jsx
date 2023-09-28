import { render } from "preact";
import { App } from "./app.jsx";
import "./index.css";

const renderTargetSelectors = (targetSelectors) => {
  if (targetSelectors) {
    for (const targetSelector of targetSelectors) {
      if (targetSelector) {
        const target = document.querySelector(targetSelector.selector);

        if (target && !target.querySelector(".accelpay-widget-container")) {
          console.log("Accelpay Notice Rendered!");
          const container = document.createElement("div");
          container.setAttribute("class", `accelpay-widget-container`);
          target.appendChild(container);
          if (
            !target.style ||
            !(typeof target.style.indexOf === "function") ||
            !target.style.indexOf(targetSelector.extraStyle) > -1
          ) {
            target.style = target.style + targetSelector.extraStyle;
          }
          render(<App />, container);
        }
      }
    }
  }
};

try {
  window.accelpayNoticeWidget = {};
  const accelpayNoticeWidgetEl = document.querySelector("#AccelpayWidgetData");
  if (accelpayNoticeWidgetEl) {
    const accelpayNoticeWidgetDataStr = accelpayNoticeWidgetEl.textContent;
    const accelpayNoticeWidgetData = JSON.parse(accelpayNoticeWidgetDataStr);
    const targetSelectors = accelpayNoticeWidgetData.accelpayWidgetTargets;
    const intervalTime = accelpayNoticeWidgetData.intervalTime || 2000;

    if (targetSelectors) {
      renderTargetSelectors(targetSelectors);
      const targetsInterval = setInterval(
        () => renderTargetSelectors(targetSelectors),
        intervalTime
      );
      window.accelpayNoticeWidget.clearTargetsInterval = () =>
        clearInterval(targetsInterval);
    }
  }

  window.accelpayNoticeWidget.renderNoticeComponent = (targetSelector) => {
    const target = document.querySelector(targetSelector);
    if (target) render(<App />, target);
  };

  console.log("Accelpay initialized!");
} catch (e) {
  console.error(
    "AccelpayWidgetData not found. Accelpay widget will not be rendered."
  );
}
