import { useEffect, useState } from "react";
import { FaHome, FaUserAlt, FaEnvelope, FaBell, FaCog } from "react-icons/fa";
import styles from './styles/Navbar.module.css';

function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPercent >= 0.121) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.container} ${visible ? styles.visible : ""}`}>
      <div className={styles.item}>
        <div className={styles.icon}><FaHome size={20} /></div>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}><FaUserAlt size={20} /></div>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}><FaEnvelope size={20} /></div>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}><FaBell size={20} /></div>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}><FaCog size={20} /></div>
      </div>
    </div>
  );
}

export default Navbar;
