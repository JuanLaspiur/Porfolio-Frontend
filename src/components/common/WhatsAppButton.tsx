import { useEffect, useState } from 'react';
import styles from './styles/WhatsAppButton.module.css'
import { FaWhatsapp } from 'react-icons/fa';
import LoadingMicrochip from './LoadingMicrochip';

function WhatsAppButton() {
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
      <div className={styles.item}><FaWhatsapp size={25} /></div>
      <LoadingMicrochip/>
    </div>
  )
}

export default WhatsAppButton
