## useRainbow() code examples

![logo, just a bunch of faces with different expressions and colour palettes](https://www.potato.horse/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fhyylafu4fjks%2F3wAuysUpbY4mSwLudrWfNg%2Fa4f9118c87b692d2450ce92b5b5290d8%2FUntitled_Artwork_84.png&w=3840&q=75)

This repo hosts the interactive demos used in https://sonnet.io/posts/use-rainbow.

### Setup instructions

Install dev dependencies (vitejs): `$ npm i`

### Develop, hack, play

Run `$ npm run dev` to start in dev mode. Open https://locahost:3000

### Build

Run `$ npm run build` to create a library budle (ES modules and UMD).

### Embed

```html
<div class="embed example-rgb-hsl"></div>

<!-- ... -->

<script src="https://unpkg.com/preact?umd"></script>
<script src="<dist>/examples.umd.js"></script>

<script type="module">
    Examples.mountExample(Examples.ExampleRGBHSL, '.example-rgb-hsl')
    Examples.mountExample(Examples.ExampleScroll, '.example-scroll')
    Examples.mountExample(Examples.ExampleHueShiftRGB, '.example-hue-shift-rgb')
    Examples.mountExample(Examples.ExampleHueShiftHSL, '.example-hue-shift-hsl')
</script>
```
