import  { useEffect, useState } from "react";
import styles from "./styles/HeroScroll.module.css";

export default function HeroScroll() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 2);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.heroRoot} aria-hidden={false}>
  
      <header
        className={`${styles.header} ${scrolled ? styles.headerShrunk : ""}`}
        role="banner"
      >
        {/* aquí está el logo como <img> */}
        <img
          src="/logo.png"
          alt="Logo"
          className={`${styles.logoImg} ${scrolled ? styles.logoSmall : ""}`}
        />

        <div
          className={`${styles.headerOverlay} ${scrolled ? styles.overlayHidden : ""}`}
          aria-hidden="true"
        />
      </header>

      <main className={styles.content} role="main">
        <div className={styles.innerContainer}>
          <div className={styles.shape1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className={styles.shapeIcon}
              aria-hidden="true"
            >
              <path d="M16.753 2.033a1 1 0 0 1 .667.574l3.417 8.003c.34.797.108 1.607-.347 2.141a2.14 2.14 0 0 1-2.011.731c-.937-.172-2.067-.311-3.163-.282-1.112.03-2.091.231-2.802.658-.572.343-1.238.995-1.8 1.626-.207.233-.39.452-.537.633l2.217 4.436a1 1 0 1 1-1.789.894l-7.5-15a1 1 0 1 1 1.79-.894l.209.419c.468-.637 1.13-1.403 1.901-1.841 1.298-.738 2.507-.48 3.409-.263l.133.032c.884.212 1.477.355 2.157.145.615-.19 1.395-.627 2.069-1.06a19.47 19.47 0 0 0 1.1-.765l.015-.01.003-.003a1 1 0 0 1 .862-.174Z"></path>
            </svg>
          </div>

          <h1 className={styles.titlePrimary}>Jotform’s Journey</h1>
          <p className={styles.desc}>
            Jotform is a powerful online form builder that makes it easy to
            create robust forms and collect important data. Trusted by over 30M
            users worldwide, such as nonprofits, educational institutions,
            small businesses, and enterprises, Jotform is a gateway to
            gathering better information to propel your business.
          </p>

          <div className={styles.statsGrid}>
            <article className={styles.statCard}>
              <span className={styles.statLabel}>Jotform Users</span>
              <strong className={styles.statValue}>30M+</strong>
            </article>

            <article className={styles.statCard}>
              <span className={styles.statLabel}>Form Submissions</span>
              <strong className={styles.statValue}>2B+</strong>
            </article>

            <article className={`${styles.statCard} ${styles.hideOnSmall}`}>
              <span className={styles.statLabel}>Languages Available</span>
              <strong className={styles.statValue}>16</strong>
            </article>

            <article className={`${styles.statCard} ${styles.hideOnSmall}`}>
              <span className={styles.statLabel}>Form Templates</span>
              <strong className={styles.statValue}>10K+</strong>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
