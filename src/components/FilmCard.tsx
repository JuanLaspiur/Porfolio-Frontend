import styles from "./styles/FilmCard.module.css";
import javaImg from "/java.png";
import nodeImg from "/node.jpeg"
import reactImg from "/react.jpg"
export default function FilmCard({ background, children, onClick, hoverSkill }) {
  // Definimos qué imagen mostrar según el hoverSkill
  const images = {
    java: javaImg,
    node:nodeImg,
    react: reactImg
  };

  const finalBackground = hoverSkill ? images[hoverSkill] || background : background;

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <div
          className={styles.bg}
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className={styles.content} onClick={onClick}>{children}</div>
        </div>

        <div className={styles.cornerContainer}>
          <span className={`${styles.corner} ${styles.top} ${styles.left}`} />
          <span className={`${styles.corner} ${styles.top} ${styles.right}`} />
          <span className={`${styles.corner} ${styles.bottom} ${styles.left}`} />
          <span className={`${styles.corner} ${styles.bottom} ${styles.right}`} />
        </div>
      </div>

      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${finalBackground})` }}
      />
    </div>
  );
}
