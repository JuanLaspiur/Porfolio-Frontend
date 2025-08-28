import styles from './styles/ScrollToTopButton.module.css';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPercent =
            window.scrollY /
            (document.body.scrollHeight - window.innerHeight);

          setVisible(scrollPercent >= 0.12);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Scroll to top"
      className={`${styles.container} ${visible ? styles.visible : ""}`}
      onClick={scrollToTop}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? scrollToTop() : null)}
    >
      <FaArrowUp size={22} />
    </button>
  );
}

export default ScrollToTopButton;
