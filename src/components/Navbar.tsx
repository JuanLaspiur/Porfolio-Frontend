import Btn82 from './common/Btn82';
import styles from './styles/Navbar.module.css';


function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo" />
      </div>



      <div className={styles.actions}>
        <Btn82 text={"Curriculum"} onClick={() => console.log("errw")} />
      </div>
    </nav>
  );
}

export default Navbar;
