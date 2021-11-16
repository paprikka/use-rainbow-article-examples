import styles from './preview.module.css'
import { FunctionComponent } from 'preact'

export const Preview: FunctionComponent<{ src: string }> = ({ src }) => (
    <iframe className={styles.frame} src={src} />
)
