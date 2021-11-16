import styles from './index.module.css'
import { RGBPicker } from '../../components/rgb-picker'
import { HSLPicker } from '../../components/hsl-picker'

export const ExampleRGBHSL = () => (
    <div className={styles.container}>
        <div className={styles.rgb}>
            <RGBPicker />
        </div>
        <div className={styles.hsl}>
            <HSLPicker />
        </div>
    </div>
)
