import { FunctionComponent } from 'preact'
import styles from './index.module.css'

export const Controls: FunctionComponent = ({ children }) => (
    <div className={styles.container}>{children}</div>
)

export const SliderInput: FunctionComponent<{
    value: number
    onChange: (val: number) => void
    min: number
    max: number
    labelText: string
}> = ({ value, onChange, min, max, labelText }) => {
    const handleInput: JSX.GenericEventHandler<HTMLInputElement> = (e) =>
        onChange(+e.currentTarget.value)
    return (
        <label className={styles.label}>
            <span>{labelText}</span>
            <input
                type='range'
                value={value}
                onInput={handleInput}
                min={min}
                max={max}
            />
        </label>
    )
}
