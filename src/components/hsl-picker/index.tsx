import { FunctionalComponent } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks'
import { Controls, SliderInput } from '../controls'
import { HSLWheel } from '../hsl-wheel'
import styles from './index.module.css'

export const HSLPicker: FunctionalComponent = () => {
    const [h, setH] = useState(200)
    const [s, setS] = useState(100)
    const [l, setL] = useState(50)

    const [rect, setRect] = useState<DOMRect>()
    // getting a false negative from the TS checker...
    const containerEl = useRef<any>()
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        if (!containerEl.current) return

        const onResize = () =>
            setRect(containerEl.current.getBoundingClientRect())

        window.addEventListener('resize', onResize)
        onResize()
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [containerEl.current])

    useEffect(() => {
        if (!rect) return

        const offsetX = rect.width / 2
        const offsetY = rect.width / 2
        const r = (rect.width / 2) * 0.85
        const radian = Math.PI / 180

        const x = Math.sin(radian * (360 - h)) * -r + offsetX
        const y = Math.cos(radian * (360 - h)) * -r + offsetY

        setX(x)
        setY(y)
    }, [rect, h])

    return (
        <div class={styles.container} ref={containerEl}>
            <div class={styles.canvas}>
                <HSLWheel hue={0} saturation={s} luminosity={l}>
                    <div
                        className={styles.swatch}
                        style={{
                            top: `${y}px`,
                            left: `${x}px`,
                            backgroundColor: `hsl(${h}deg, ${s}%, ${l}%)`,
                        }}
                    />
                </HSLWheel>
            </div>
            <div className={styles.controls}>
                <Controls>
                    <SliderInput
                        labelText='Hue'
                        min={0}
                        max={360}
                        value={h}
                        onChange={setH}
                    />
                    <SliderInput
                        labelText='Saturation'
                        min={0}
                        max={100}
                        value={s}
                        onChange={setS}
                    />
                    <SliderInput
                        labelText='Lightness'
                        min={0}
                        max={100}
                        value={l}
                        onChange={setL}
                    />
                </Controls>
            </div>
        </div>
    )
}
