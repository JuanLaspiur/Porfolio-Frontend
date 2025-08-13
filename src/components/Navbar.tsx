import Btn82 from './common/Btn82';
import styles from './styles/Navbar.module.css';

// Importa los íconos que quieras usar
import { FaHome, FaFolderOpen, FaUser, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo" />
      </div>

      <ul className={styles.links}>
        <li>
          <FaHome /> HOME
        </li>
        <li>
          <FaFolderOpen /> PROYECTOS
        </li>
        <li>
          <FaUser /> SOBRE MI
        </li>
        <li>
          <FaEnvelope /> CONTACTO
        </li>
      </ul>

      <div className={styles.actions}>
        <Btn82 text={"Curriculum"} onClick={() => console.log("errw")} />
      </div>
    </nav>
  );
}

export default Navbar;
