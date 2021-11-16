import { FunctionComponent } from 'preact'
import styles from './index.module.css'

export const HSLWheel: FunctionComponent<{ hue: number }> = ({
    children,
    hue = 0,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.aspectRatioContainer}>
                <div
                    className={styles.colourRing}
                    style={{
                        transform: `rotate(${-hue}deg)`,
                    }}
                ></div>
                {children}
            </div>
        </div>
    )
}
