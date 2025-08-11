import styles from "./styles/CardProfile.module.css";
import MarkedLabelProps from '../components/common/MarkedLabel'

export default function ProfileCard() {
  return (
    <div className={styles.wrapper}>
      <MarkedLabelProps fontSize='2rem' text='About me' />

      <div className={styles.cardContainer}>
        <span className={styles.pro}>Developer</span>
        <img
          className={styles.round}
          src="/perfil.jpg"
          alt="user"
        />
        <h3>Juan Laspiur</h3>
        <h6>Bahía Blanca</h6>
        <p>
         Full Stack  developer
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
