import { useEffect, useState } from 'react';
import styles from './styles/HeroSection.module.css';

const images = [
  '/perfil.jpg',
  '/perfil_fondo_gris.png',
  '/temple.jpg'
];

export default function BackgroundScrollParallax() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const sectionHeight = window.innerHeight * 0.8; // Cuánto scroll para cambiar de imagen
      const index = Math.min(images.length - 1, Math.floor(scrollTop / sectionHeight));
      setImageIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.text}>
          <span className={styles.badge}>CRAFT OF UI</span>
          <h1>Bringing clarity to the art of UI development</h1>
          <p>You want to build exceptional user interfaces, I want to empower you to do so.</p>
          <button>Start seeing clearly</button>
        </div>
        <div className={styles.image}>
          <img src={images[imageIndex]} alt="Dynamic" />
        </div>
      </div>
    </div>
  );
}
