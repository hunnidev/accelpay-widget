# Accelpay Notice Widget

Bundled script for rendering Accelpay Notice message in a website.

## Stack

This project uses ViteJS and Preact for bundling a script, served using JsDelivr CDN.

## Usage

For using the widget, add the script tag to the head of your HTML

```
<script
  defer
  src="https://cdn.jsdelivr.net/gh/hunnidev/accelpay-widget@main/dist/accelpay.notice.widget.js"
></script>
```

Optionally, you can add a JSON script with id="AccelpayWidgetData" with a list of HTML element targets for rendering the notice widget.

```
<script id="AccelpayWidgetData" type="application/json">
  {
    "accelpayWidgetTargets": [
      {
        "selector": "#app",
        "extraStyle": "display: flex; flex-direction: column;"
      }
    ]
  }
</script>
```

The script also adds a utility object to `window.accelpayNoticeWidget` that is used for rendering the notice message in the DOM. The utility object has the following functions:

- `window.accelpayNoticeWidget.renderNoticeComponent([ELEMENT_SELECTOR_OR_ELEMENT])`: Append notice component to the target Element.
- `window.accelpayNoticeWidget.clearTargetsInterval()`
