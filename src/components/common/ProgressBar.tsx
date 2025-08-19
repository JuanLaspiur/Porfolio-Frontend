import styles from "./styles/ProgressBar.module.css";

export default function ProgressBar({ progress }) {
  return (
    <div className={styles.container}>
      <div
        className={styles.fill}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
