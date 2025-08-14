import { useEffect, useRef } from "react";
import styles from "./styles/ScrollToType.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollToType() {
  const containerRef = useRef(null);

  useEffect(() => {
    const trigger = containerRef.current.querySelector(`.${styles.firstSection}`);
    const headings = trigger.querySelectorAll("h2");
    const spans = trigger.querySelectorAll("h2 span");

    const config = {
      text: "Design is not just what it looks like and feels like. Design is how it works. – Steve Jobs",
      hue: 320,
      saturation: 100,
      lightness: 50,
      speed: 0.8,
    };

    // Inicializar texto
    const update = () => {
      spans.forEach((span) => {
        span.innerHTML = `${config.text} `;
      });
      trigger.style.setProperty("--text-length", config.text.length + 1);
      trigger.style.setProperty("--cursor-hue", config.hue);
      trigger.style.setProperty("--cursor-saturation", config.saturation);
      trigger.style.setProperty("--cursor-lightness", config.lightness);
      trigger.style.setProperty("--cursor-blink", config.speed);
    };

    update();

    // ScrollTrigger fallback si no hay soporte de scroll-driven animation
    const hasScrollSupport = CSS.supports(
      "(animation-timeline: view()) and (animation-range: 0 100%)"
    );

    if (!hasScrollSupport) {
      gsap.registerPlugin(ScrollTrigger);
      const text = trigger.querySelector("blockquote");
      gsap.fromTo(
        text,
        { "--idx": 0 },
        {
          "--idx": config.text.length + 1,
          duration: 1,
          ease: `steps(${config.text.length + 1})`,
          scrollTrigger: {
            trigger,
            scrub: 0.2,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
              text.style.setProperty("--velocity", Math.abs(self.getVelocity()));
            },
            onScrubComplete: () => text.style.setProperty("--velocity", 0),
          },
        }
      );
    }
  }, []);

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <header className={styles.header}>
        <h1 className={styles.fluid}>Scroll to type</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.firstSection}>
          <blockquote>
            <h2 className={styles.fluid}><span className={styles.fluid}></span></h2>
            <h2 aria-hidden="true" className={styles.fluid}><span className={styles.fluid}></span></h2>
            <h2 aria-hidden="true" className={styles.fluid}><span className={styles.fluid}></span></h2>
            <h2 aria-hidden="true" className={styles.fluid}><span className={styles.fluid}></span></h2>
          </blockquote>
        </section>

        <section className={styles.secondSection}>
          <div>
            <p className={styles.fluid}>
              <a
                href="https://craftofui.substack.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow along
              </a>
            </p>
            <hr />
            <p className={styles.fluid}>The Craft of UI</p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>ʕ •ᴥ•ʔ &copy; Adapted 2025</footer>
    </div>
  );
}
