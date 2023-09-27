import { render } from "preact";
import { App } from "./app.jsx";
import "./index.css";

try {
  const accelpayWidgetData = JSON.parse(
    document.querySelector("#AccelpayWidgetData").textContent
  );
  const targetSelectors = accelpayWidgetData.accelpayWidgetTargets;

  for (const targetSelector of targetSelectors) {
    const target = document.querySelector(targetSelector);

    if (target) {
      const container = document.createElement("div");
      container.classList.add('accelpay-widget-container');
      target.appendChild(container);
      render(<App />, container);
    }
  }
} catch (e) {
  console.error(
    "AccelpayWidgetData not found. Accelpay widget will not be rendered."
  );
}
