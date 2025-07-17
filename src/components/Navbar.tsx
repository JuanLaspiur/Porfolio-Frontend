import Btn82 from './common/Btn82';
import styles from './styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo" />
      </div>

      <ul className={styles.links}>
        <li>HOME</li>
        <li>PROYECTOS</li>
        <li>SOBRE MI</li>
        <li>CONTACTO</li>
      </ul>

      <div className={styles.actions}>
        <Btn82 text={"Curriculum"} onClick={() => console.log("errw")} />
      </div>
    </nav>
  );
}

export default Navbar;
