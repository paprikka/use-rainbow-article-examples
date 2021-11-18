import { useState } from 'preact/hooks'
import { Controls, SliderInput } from '../../components/controls'
import { Susan } from '../../components/susan'
import styles from './index.module.css'

export const ExampleHueShiftRGB = () => {
    const [r, setR] = useState(0)
    const [g, setG] = useState(0)
    const [b, setB] = useState(0)

    return (
        <div className={styles.container}>
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
    )
}
