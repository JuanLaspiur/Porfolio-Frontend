import styles from "./styles/BlackBox.module.css";

export default function BlackBox({ title, text, backgroundType = 1 }) {
  return (
    <div className={`${styles.cardContainer} ${styles[`bg${backgroundType}`]}`}>
      <div className={styles.card}>
        <h3>{title}</h3>
        <br />
        <p>{text}</p>
        <div className={styles.layers}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className={styles.layer}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
