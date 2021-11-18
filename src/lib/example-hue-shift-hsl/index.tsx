import { useState } from 'preact/hooks'
import { Controls, SliderInput } from '../../components/controls'
import { Susan } from '../../components/susan'
import styles from './index.module.css'

export const ExampleHueShiftHSL = () => {
    const targetH = -90
    const [h, setH] = useState(0)

    return (
        <div className={styles.container}>
            <Susan hue={h} showTeeth={Math.abs(h - targetH) < 5} />
            <br />
            <div className={styles.controls}>
                <Controls>
                    <SliderInput
                        labelText={`Hue rotate: ${
                            h < 0 ? '' : '+'
                        }${h} degrees`}
                        min={-180}
                        max={180}
                        value={h}
                        onChange={setH}
                    />
                </Controls>
            </div>
        </div>
    )
}
