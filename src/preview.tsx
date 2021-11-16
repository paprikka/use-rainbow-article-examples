import styles from "./preview.module.css";
export const Preview = () => (
  <iframe className={styles.frame} src="/example-scroll/" />
);
