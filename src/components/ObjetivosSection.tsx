import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./styles/ObjetivosSection.module.css";
import MarkedLabel from "./common/MarkedLabel";

export default function ObjetivosSection() {
  return (
    <div className={styles.container}> 
 
  
    <div className={styles.containerTitle}>
    <MarkedLabel fontSize="1.2rem" text="Objetivos Personales" /></div>
    <section className={styles.objetivos}>
      
      <div className={styles.texto}>
 <p>
Mi objetivo es seguir desarrollándome como profesional en el ámbito del desarrollo de software, mejorar en arquitectura, buenas prácticas, funcionamiento interno del lenguaje y optimización de procesos. Actualmente estoy realizando el Curso de Programación en JavaScript y TypeScript, nivel avanzado, en la UTN, y mi objetivo es continuar aprendiendo en esta institución.
</p>

      </div>

      <div className={styles.contacto}>
        <a
          href="https://github.com/JuanLaspiur"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/laspiurperezjuan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:laspiurperezjuan@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </section></div>
  );
}
