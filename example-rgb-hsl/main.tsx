import { render } from 'preact'
import { useState } from 'preact/hooks'
import '../src/global.css'
import styles from './index.module.css'
import { Browser } from '../src/components/browser'
import { Controls, SliderInput } from '../src/components/controls'
import { HSLWheel } from '../src/components/hsl-wheel'
import { StaticSwatch } from '../src/components/static-swatch'
import { RGBPicker } from '../src/components/rgb-picker'
import { HSLPicker } from '../src/components/hsl-picker'

const Test = () => {
    const [scrollPosition, setScrollPosition] = useState(20)

    const handleChange = (val: number) => {
        setScrollPosition(val)
    }

    const hue = (scrollPosition * 720) / 100
    const backgroundColor = `hsl(${hue}deg, 100%, 50%)`
    console.log(backgroundColor)
    return (
        <div className={styles.container}>
            <div className={styles.rgb}>
                <RGBPicker />
            </div>
            <div className={styles.hsl}>
                <HSLPicker />
            </div>
        </div>
    )
}

render(<Test />, document.getElementById('app')!)
