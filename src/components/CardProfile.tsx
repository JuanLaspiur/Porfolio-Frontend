import styles from "./styles/CardProfile.module.css";


export default function ProfileCard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardContainer}>
        <span className={styles.pro}>Developer</span>
        <img
          className={styles.round}
          src="/perfil.jpg"
          alt="user"
        />
        <h3>Ricky Park</h3>
        <h6>New York</h6>
        <p>
          User interface designer and <br /> front-end developer
        </p>
        <div className={styles.buttons}>
          <button className={styles.primary}>Message</button>
          <button className={`${styles.primary} ${styles.ghost}`}>
            Following
          </button>
        </div>
     
      </div>
    </div>
  );
}
