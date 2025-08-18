import styles from './styles/ProyectCard.module.css';
import { type Proyect } from '../../types/Proyect';
function ProyectCard({
  title,
  category,
  author,
  time,
  href,
  image
}:Proyect) {
  return (
    <article className={`${styles.card} ${styles.card1}`}>
      <div className={styles.card__infoHover}>
      
        <div className={styles.card__clockInfo}>
          <svg className={styles.card__clock} viewBox="0 0 24 24">
            <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20Z" />
          </svg>
          <span className={styles.card__time}>{time}</span>
        </div>
      </div>

      <div
        className={styles.card__img}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <a href={href} className={styles.card_link}>
        <div className={styles.card__imgHover}  style={{ backgroundImage: `url(${image})` }}></div>
      </a>

      <div className={styles.card__info}>
        <span className={styles.card__category}>{category}</span>
        <div className={styles.card__title}>{title}</div>
        <span className={styles.card__by}>
          by <a href="#" className={styles.card__author}>{author}</a>
        </span>
      </div>
    </article>
  );
}

export default ProyectCard;
