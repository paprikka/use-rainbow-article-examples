import { FunctionalComponent } from 'preact'
import styles from './index.module.css'

// TODO: why does this not work in preact? broken typedefs or am I being weird?
// type SusanProps =  {
//     showTeeth: boolean
// } & ({hue: number} | {
//     red: number
//     green: number
//     blue: number
// })

interface SusanProps {
    hue?: number
    red?: number
    green?: number
    blue?: number
    showTeeth: boolean
}

const RGBSusan: FunctionalComponent<{
    red?: number
    green?: number
    blue?: number
    showTeeth: boolean
}> = ({ red, green, blue, showTeeth }) => {
    const overlayColor = `rgb(${red}, ${green}, ${blue})`
    return (
        <div
            className={`${styles.container} ${
                showTeeth ? styles.isVampire : ''
            }`}
        >
            <div className={styles.baseImage} />
            <div
                className={styles.rgbOverlay}
                style={{ backgroundColor: overlayColor }}
            />
            <div className={styles.vampireOverlay} />
        </div>
    )
}

const HSLSusan: FunctionalComponent<{ hue?: number; showTeeth: boolean }> = ({
    hue,
    showTeeth,
}) => {
    return (
        <div
            className={`${styles.container} ${
                showTeeth ? styles.isVampire : ''
            }`}
        >
            <div
                className={styles.baseImage}
                style={{ filter: `hue-rotate(${hue}deg)` }}
            />
            <div className={styles.vampireOverlay} />
        </div>
    )
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

    if (mode === 'rgb')
        return (
            <RGBSusan
                red={red}
                green={green}
                blue={blue}
                showTeeth={showTeeth}
            />
        )
    if (mode === 'hsl') return <HSLSusan hue={hue} showTeeth={showTeeth} />

    return null
}
