import { FunctionalComponent } from 'preact'
import styles from './index.module.css'

export const StaticSwatch: FunctionalComponent<{ color: string }> = ({
    color,
}) => (
    <div
        className={styles.main}
        style={{ backgroundColor: color || 'yellow' }}
    ></div>
)
