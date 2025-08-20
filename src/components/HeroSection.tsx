import styles from './styles/HeroSection.module.css';



export default function BackgroundScrollParallax() {



  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.text}>
          <span className={styles.badge}>Full Stack</span>
          <h1>Desarrollo de software</h1>
          <p>Construyendo soluciones digitales con pasión y código.</p>
          <button>Sobre mi</button>
        </div>
        <div className={styles.image}>
          <img src='/perfil.jpg' alt="Dynamic" />
        </div>
      </div>
    </div>
  );
}
