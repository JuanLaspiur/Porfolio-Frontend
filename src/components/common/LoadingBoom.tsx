import styles from "./styles/LoadingBoom.module.css";

/**
 * LoadingBoom
 * Props:
 *  - color: CSS color for accent (default "#F3A600")
 *  - fixed: boolean (default true) -> if true component is centered fixed overlay
 *  - width: number or string (default "800px") container visual width (keeps animations scale)
 *  - className: optional extra class
 */
export default function LoadingBoom({
  color = "#F3A600",
  fixed = true,
  width = "800px",
  className = "",
}) {
  const inline = {
    "--accent": color,
    "--container-width": typeof width === "number" ? `${width}px` : width,
  };

  return (
    <div
      className={`${styles.wrapper} ${fixed ? styles.fixed : styles.inline} ${className}`}
      style={inline}
      aria-hidden="true"
    >
      <div className={styles.animationContainer}>
        <div className={styles.lightningContainer}>
          <div className={`${styles.lightning} ${styles.white}`} />
          <div className={`${styles.lightning} ${styles.red}`} />
        </div>

        <div className={`${styles.boomContainer}`}>
          <div className={`${styles.shape} ${styles.circle} ${styles.big} ${styles.white}`} />
          <div className={`${styles.shape} ${styles.circle} ${styles.white}`} />
          <div className={`${styles.shape} ${styles.triangle} ${styles.big} ${styles.yellow}`} />
          <div className={`${styles.shape} ${styles.disc} ${styles.white}`} />
          <div className={`${styles.shape} ${styles.triangle} ${styles.blue}`} />
        </div>

        <div className={`${styles.boomContainer} ${styles.second}`}>
          <div className={`${styles.shape} ${styles.circle} ${styles.big} ${styles.white}`} />
          <div className={`${styles.shape} ${styles.circle} ${styles.white}`} />
          <div className={`${styles.shape} ${styles.disc} ${styles.white}`} />
          <div className={`${styles.shape} ${styles.triangle} ${styles.blue}`} />
        </div>
      </div>
    </div>
  );
}
