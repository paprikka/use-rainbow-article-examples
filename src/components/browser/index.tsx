import { FunctionalComponent } from 'preact'
import styles from './index.module.css'

import mockImg from './mock-img.png'

export const Browser: FunctionalComponent<{
    scrollPosition: number
    backgroundColor: string
}> = ({ scrollPosition = 0, backgroundColor = 'red' }) => {
    const transformOffset = scrollPosition * -2

    return (
        <div className={styles.container} style={{ backgroundColor }}>
            <div
                className={styles.mockContent}
                style={{
                    transform: `translateY(${transformOffset}%)`,
                }}
            >
                {Array(20)
                    .fill(null)
                    .map((_, ind) => (
                        <div className={styles.mockPara} key={ind}>
                            <img src={mockImg} />
                        </div>
                    ))}
            </div>
            <div className={styles.containerOverlay}>
                <div className={styles.beforeWindow}></div>
                <div className={styles.window}>
                    <div className={styles.windowHeader}>
                        <span />
                        <span />
                        <span />
                    </div>
                </div>

                <div className={styles.afterWindow}></div>
            </div>
        </div>
    )
}
