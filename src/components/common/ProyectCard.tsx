import styles from './styles/ProyectCard.module.css';

function ProyectCard({
  title,
  category,
  author,
  time,
  href,
  image
}) {
  return (
    <article className={`${styles.card} ${styles.card1}`}>
      <div className={styles.card__infoHover}>
        <svg className={styles.card__like} viewBox="0 0 24 24">
          <path
            fill="#000000"
            d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55Z"
          />
        </svg>
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
        <h3 className={styles.card__title}>{title}</h3>
        <span className={styles.card__by}>
          by <a href="#" className={styles.card__author}>{author}</a>
        </span>
      </div>
    </article>
  );
}

export default ProyectCard;
