import {
    ExampleScroll,
    ExampleRGBHSL,
    ExampleHueShiftHSL,
    ExampleHueShiftRGB,
    mountExample,
} from './lib'
mountExample(ExampleScroll, '.example-scroll')
mountExample(ExampleRGBHSL, '.example-rgb-hsl')
mountExample(ExampleHueShiftRGB, '.example-hue-shift-rgb')
mountExample(ExampleHueShiftHSL, '.example-hue-shift-hsl')
