import { FunctionalComponent } from 'preact'
import styles from './index.module.css'

type SusanProps = {
    hue?: number
    red?: number
    green?: number
    blue?: number
    showTeeth: boolean
}
export const Susan: FunctionalComponent<SusanProps> = ({
    red,
    green,
    blue,
    hue,
    showTeeth,
}) => {
    if (typeof blue === 'undefined' && typeof hue === 'undefined') return null

    const mode = typeof blue === 'undefined' ? 'hsl' : 'rgb'
    const saturation = 100
    const luminosity = 50

    const overlayColor =
        mode === 'rgb'
            ? `rgb(${red}, ${green}, ${blue})`
            : `hsl(${hue}deg, ${saturation}%, ${luminosity}%)`

    return (
        <div
            className={`${styles.container} ${
                showTeeth ? styles.isVampire : ''
            }`}
        >
            {mode === 'rgb' ? (
                <div
                    className={styles.rgbOverlay}
                    style={{ backgroundColor: overlayColor }}
                ></div>
            ) : (
                <div
                    className={styles.hslOverlay}
                    style={{ backdropFilter: `hue-rotate(${hue}deg)` }}
                ></div>
            )}
            <div className={styles.vampireOverlay} />
        </div>
    )
}
