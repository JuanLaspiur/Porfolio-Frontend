import styles from "./styles/HexLanding.module.css";
import {
  FaUniversalAccess,
  FaBullseye,
  FaBraille,
  FaIdBadge,

} from "react-icons/fa";
import MarkedLabelProps from "../components/common/MarkedLabel"

export default function HexLanding() {
  const items = [
    { icon: <FaUniversalAccess />, title: "WELCOME" },
    { icon: <FaBullseye />, title: "ABOUT" },
    { icon: <FaBraille />, title: "SERVICES" },
    { icon: <FaIdBadge />, title: "RESUME" },

  ];

  // Mismo path SVG que usabas (hexágono)
  const hexPath =
    "M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z";

  return (
    <section className={styles.hexWrapper} aria-label="Hex landing">
      <div className={styles.hexTable}>
        <div className={styles.hexTableCell}>
          <div className={styles.hexContainer}>
                 <MarkedLabelProps fontSize="2rem" text="Welcome to My Page" />
            <div className={styles.hexMenu}>
              {items.map((item, i) => (
                <div key={i} className={styles.hexItem}>
                  <div className={styles.hexBorder}>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className={styles.hexBorder}>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>

                  <a
                    href="#"
                    className={styles.hexContent}
                    role="button"
                    onClick={(e) => e.preventDefault()}
                    aria-label={item.title}
                  >
                    <div className={styles.hexInner}>
                      <div className={styles.hexIcon}>{item.icon}</div>
                      <div className={styles.hexTitle}>{item.title}</div>
                    </div>

                    {/* Fondo del hex normal (relleno) */}
                    <svg
                      viewBox="0 0 173.20508075688772 200"
                      height="200"
                      width="174"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.hexSvg}
                      aria-hidden="true"
                    >
                      <path d={hexPath} fill="#1e2530" />
                    </svg>

                    {/* Outline 1 (outer - más grueso) */}
                    <svg
                      viewBox="0 0 173.20508075688772 200"
                      height="200"
                      width="174"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${styles.hexOutline} ${styles.hexOutlineOuter}`}
                      aria-hidden="true"
                    >
                      <path d={hexPath} />
                    </svg>

                    {/* Outline 2 (inner - más delgado) */}
                    <svg
                      viewBox="0 0 173.20508075688772 200"
                      height="200"
                      width="174"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${styles.hexOutline} ${styles.hexOutlineInner}`}
                      aria-hidden="true"
                    >
                      <path d={hexPath} />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
