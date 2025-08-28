import { useEffect, useState } from 'react';
import styles from './styles/WhatsAppButton.module.css';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setVisible(scrollPercent >= 0.121);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const phone = '5492914045485'; 
    const url = `https://wa.me/${phone}`;
    window.open(url, '_blank'); // abre en nueva pestaña
  };

  return (
    <div className={`${styles.container} ${visible ? styles.visible : ""}`}>
      <div className={styles.item} onClick={handleClick} style={{ cursor: 'pointer' }}>
        <FaWhatsapp size={25} color='green'/>
      </div>
    </div>
  );
}

export default WhatsAppButton;
