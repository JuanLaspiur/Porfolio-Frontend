import styles from './styles/Footer.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>JL</div>

        <div className={styles.social}>
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:tuemail@example.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} Juan Laspiur. Todos los derechos reservados.
      </p>
    </footer>
  );
}
