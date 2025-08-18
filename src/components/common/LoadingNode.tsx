import styles from "./styles/LoadingNode.module.css";

/**
 * LoadingNode
 * Props:
 *  - size: number (px) default 150
 *  - color: CSS color for strokes (default "#ffffff")
 *  - duration: seconds (default 2)
 *  - fixed: boolean (default true) -> center fixed overlay if true, otherwise inline
 *  - className: optional extra class
 */
export default function LoadingNode({
  size = 150,
  color = "#ffffff",
  duration = 2,
  fixed = true,
  className = "",
}) {
  const inline = {
    "--size": `${size}px`,
    "--stroke": color,
    "--dur": `${duration}s`,
    position: fixed ? "fixed" : "relative",
  };

  return (
    <div
      className={`${styles.wrapper} ${fixed ? styles.fixed : styles.inline} ${className}`}
      style={inline}
      aria-hidden="true"
    >
      <svg
        className={styles.svg}
        viewBox="0 0 100 100"
        role="img"
        aria-label="Loading node animation"
      >
        <g
          className={styles.group}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="6"
        >
          <path className={styles.leftLine} d="M 21 40 V 59" />
          <path className={styles.rightLine} d="M 79 40 V 59" />
          <path className={styles.topLine} d="M 50 21 V 40" />
          <path className={styles.bottomLine} d="M 50 60 V 79" />
          <path className={styles.topBox} d="M 50 21 L 79 40 L 50 60 L 21 40 Z" />
          <path className={styles.midBox} d="M 50 40 L 79 59 L 50 79 L 21 59 Z" />
          <path className={styles.botBox} d="M 50 59 L 79 78 L 50 98 L 21 78 Z" />
        </g>
      </svg>
    </div>
  );
}
