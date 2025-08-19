export interface Proyect {
  title: string;
  category: string;
  author: string;
  time: string;
  href: string;
  video: string; // 👈 ahora video en lugar de image
}


import styles from './styles/ProyectCard.module.css';

function ProyectCard({
  title,
  category,
  author,
  time,
  href,
  video
}: Proyect) {
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

      {/* 🎬 Video principal */}
      <div className={styles.card__videoWrapper}>
        <video
          className={styles.card__video}
          src={video}
          muted
          autoPlay
          loop
          playsInline
        />
      </div>

      <a href={href} className={styles.card_link}></a>

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