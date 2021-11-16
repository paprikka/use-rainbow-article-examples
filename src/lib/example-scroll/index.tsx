import { useState } from 'preact/hooks'
import styles from './index.module.css'
import { Browser } from '../../components/browser'
import { Controls, SliderInput } from '../../components/controls'
import { HSLWheel } from '../../components/hsl-wheel'
import { StaticSwatch } from '../../components/static-swatch'

export const ExampleScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(20)

    const handleChange = (val: number) => {
        setScrollPosition(val)
    }

    const hue = (scrollPosition * 720) / 100
    const backgroundColor = `hsl(${hue}deg, 100%, 50%)`
    console.log(backgroundColor)
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.browser}>
                    <Browser
                        backgroundColor={backgroundColor}
                        scrollPosition={scrollPosition}
                    />
                </div>
                <div className={styles.spacer} />
                <div className={styles.wheel}>
                    <HSLWheel hue={hue + 90}>
                        <StaticSwatch color={backgroundColor} />
                    </HSLWheel>
                </div>
            </div>
            <div className={styles.controls}>
                <Controls>
                    <SliderInput
                        labelText='Scroll position'
                        min={0}
                        max={100}
                        value={scrollPosition}
                        onChange={handleChange}
                    />
                </Controls>
            </div>
        </div>
    )
}
