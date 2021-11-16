import { FunctionComponent } from 'preact'
import styles from './index.module.css'

export const HSLWheel: FunctionComponent<{
    hue: number
    saturation?: number
    luminosity?: number
}> = ({ children, hue = 0, saturation = 100, luminosity = 50 }) => {
    const fill = `conic-gradient(
        from 30deg,
        hsl(0deg, ${saturation}%, ${luminosity}%),
        hsl(60deg, ${saturation}%, ${luminosity}%) 30deg,
        hsl(120deg, ${saturation}%, ${luminosity}%) 90deg,
        hsl(180deg, ${saturation}%, ${luminosity}%) 150deg,
        hsl(240deg, ${saturation}%, ${luminosity}%) 210deg,
        hsl(300deg, ${saturation}%, ${luminosity}%) 270deg,
        hsl(360deg, ${saturation}%, ${luminosity}%) 330deg,
        hsl(0deg, ${saturation}%, ${luminosity}%)
    )`
    return (
        <div className={styles.container}>
            <div className={styles.aspectRatioContainer}>
                <div
                    className={styles.colourRing}
                    style={{
                        transform: `rotate(${-hue}deg)`,
                        backgroundImage: fill,
                    }}
                ></div>
                {children}
            </div>
        </div>
    )
}
