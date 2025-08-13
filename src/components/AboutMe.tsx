import styles from './styles/AboutMe.module.css';
import profileImg from '/perfil.jpg'; // Cambia por tu imagen
import MarkedLabelProps from "../components/common/MarkedLabel"

export default function AboutMe() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img src={profileImg} alt="Sobre mí" className={styles.profileImage} />
        </div>
        <div className={styles.textWrapper}>
               <MarkedLabelProps fontSize="2rem" text="Sobre Mí" />
          <p className={styles.description}>
            Soy un desarrollador Full Stack apasionado por crear soluciones innovadoras y eficientes.
            Me especializo en <span>Node.js</span>, <span>React.js</span> y tecnologías de nube como <span>AWS</span>.
            Disfruto resolver problemas complejos, aprender nuevas herramientas y trabajar en proyectos desafiantes.
          </p>
          <p className={styles.description}>
            Cuando no estoy programando, me gusta explorar nuevas tecnologías, contribuir a proyectos open source
            y seguir aprendiendo para mantenerme siempre actualizado en este mundo en constante evolución.
          </p>
        </div>
      </div>
    </section>
  );
}
