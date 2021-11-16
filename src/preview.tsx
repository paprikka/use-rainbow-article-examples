import styles from './preview.module.css'
import './global.css'

export const Preview = () => (
    <iframe className={styles.frame} src='/example-scroll/' />
)
