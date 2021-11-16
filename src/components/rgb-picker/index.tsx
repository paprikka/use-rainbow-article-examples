import { FunctionalComponent } from 'preact'
import { useState } from 'preact/hooks'
import { Controls, SliderInput } from '../controls'
import styles from './index.module.css'

export const RGBPicker: FunctionalComponent = () => {
    const [r, setR] = useState(255)
    const [g, setG] = useState(255)
    const [b, setB] = useState(255)

    return (
        <div class={styles.container}>
            <div class={styles.canvas}>
                <svg
                    width='185'
                    height='176'
                    viewBox='0 0 185 176'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <circle
                        cx='60'
                        cy='60'
                        r='57.5'
                        fill='black'
                        stroke='black'
                        stroke-width='5'
                    />
                    <circle
                        cx='125'
                        cy='60'
                        r='57.5'
                        fill='black'
                        stroke='black'
                        stroke-width='5'
                    />
                    <circle
                        cx='93'
                        cy='116'
                        r='57.5'
                        fill='black'
                        stroke='black'
                        stroke-width='5'
                    />
                    <g style='mix-blend-mode:lighten'>
                        <circle
                            class='render-red'
                            cx='60'
                            cy='60'
                            r='55'
                            fill={`rgb(${r}, 0, 0)`}
                        />
                    </g>
                    <g style='mix-blend-mode:lighten'>
                        <circle
                            class='render-green'
                            cx='125'
                            cy='60'
                            r='55'
                            fill={`rgb(0, ${g}, 0)`}
                        />
                    </g>
                    <g style='mix-blend-mode:lighten'>
                        <circle
                            class='render-blue'
                            cx='93'
                            cy='116'
                            r='55'
                            fill={`rgb(0, 0, ${b})`}
                        />
                    </g>
                </svg>
            </div>
            <div className={styles.controls}>
                <Controls>
                    <SliderInput
                        labelText='Red'
                        min={0}
                        max={255}
                        value={r}
                        onChange={setR}
                    />
                    <SliderInput
                        labelText='Green'
                        min={0}
                        max={255}
                        value={g}
                        onChange={setG}
                    />
                    <SliderInput
                        labelText='Blue'
                        min={0}
                        max={255}
                        value={b}
                        onChange={setB}
                    />
                </Controls>
            </div>
        </div>
    )
}
