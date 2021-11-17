import { JSX, render } from 'preact'
import './index.css'
export { ExampleScroll } from './lib/example-scroll'
export { ExampleRGBHSL } from './lib/example-rgb-hsl'
export { ExampleHueShift } from './lib/example-hue-shift'

export const mountExample = (Element: () => JSX.Element, selector: string) => {
    render(<Element />, document.querySelector(selector)!)
}
