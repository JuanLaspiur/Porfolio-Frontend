// ArrowMore.jsx
import styles from "./styles/ArrowMore.module.css";

export default function ArrowMore({ onClick }) {
  return (
    <div className={styles.wrap}>
      <button className={styles.button} onClick={onClick} type="button" aria-label="Mostrar más">
        <div className={styles.line}>
          <div className={styles.round}></div>
          <div className={styles.round}></div>
          <div className={styles.round}></div>
          <div className={styles.round}></div>
        </div>

        <div className={`${styles.line} ${styles.two}`}>
          <div className={styles.round}></div>
          <div className={styles.round}></div>
          <div className={styles.round}></div>
          <div className={styles.round}></div>
        </div>

        <div className={`${styles.line} ${styles.three}`}>
          <div className={styles.round}></div>
          <div className={styles.round}></div>
          <div className={styles.round}></div>
          <div className={styles.round}></div>
        </div>

        <div className={`${styles.line} ${styles.four}`}>
          <div className={styles.round}></div>
          <div className={styles.round}></div>
          <div className={styles.round}></div>
          <div className={styles.round}></div>
        </div>

        <div className={`${styles.line} ${styles.five}`}>
          <div className={styles.round}></div>
          <div className={styles.round}></div>
          <div className={styles.round}></div>
          <div className={styles.round}></div>
        </div>

        <div className={`${styles.line} ${styles.six}`}>
          <div className={styles.round}></div>
          <div className={styles.round}></div>
          <div className={styles.round}></div>
          <div className={styles.round}></div>
        </div>

        <div className={`${styles.line} ${styles.seven}`}>
          <div className={styles.round}></div>
          <div className={styles.round}></div>
          <div className={styles.round}></div>
          <div className={styles.round}></div>
        </div>
      </button>
    </div>
  );
}
