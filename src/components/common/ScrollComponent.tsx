import { useState, useEffect } from 'react';

export default function ScrollComponent({ showAtPercent = 0.2, children }) {
  const [opacity, setOpacity] = useState(0.27);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;

      const scrollPercent = (scrollTop + windowHeight) / docHeight;

      // Si pasó el porcentaje, opacidad 1, sino 0.3
      setOpacity(scrollPercent >= showAtPercent ? 1 : 0.3);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // para calcular en el montaje
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAtPercent]);

  return (
    <div
      style={{
        opacity,
        transition: 'opacity 0.5s ease',
      }}
    >
      {children}
    </div>
  );
}
