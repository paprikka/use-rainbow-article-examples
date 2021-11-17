import { useState } from 'preact/hooks'
import { Controls, SliderInput } from '../../components/controls'
import { Susan } from '../../components/susan'
import styles from './index.module.css'

export const ExampleHueShift = () => {
    const targetH = -90
    const offsetH = 333

    const [h, setH] = useState(0)
    const [r, setR] = useState(0)
    const [g, setG] = useState(0)
    const [b, setB] = useState(0)

    return (
        <div className={styles.container}>
            <div className={styles.rgb}>
                <Susan red={r} green={g} blue={b} showTeeth={false} />
                <br />
                <div className={styles.controls}>
                    <Controls>
                        <SliderInput
                            labelText={`Blue: ${b}`}
                            min={0}
                            max={255}
                            value={b}
                            onChange={setB}
                        />
                        <SliderInput
                            labelText={`Red: ${r}`}
                            min={0}
                            max={255}
                            value={r}
                            onChange={setR}
                        />
                        <SliderInput
                            labelText={`Green: ${g}`}
                            min={0}
                            max={255}
                            value={g}
                            onChange={setG}
                        />
                    </Controls>
                </div>
            </div>
            <div className={styles.hsl}>
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
        </div>
    )
}
