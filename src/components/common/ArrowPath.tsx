import { ReactNode } from "react";
import styles from "./styles/ArrowPath.module.css";
import MarkedLabel from "./MarkedLabel";

interface ArrowPathProps {
  children: ReactNode;
  short?: boolean; // si true → línea más corta
}

export default function ArrowPath({ children, short = false }: ArrowPathProps) {
  // Path largo (default)
  const longPath = "M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81";
  // Path corto (versión reducida)
  const shortPath = "M1.4,2.1c0,0,86,40,160,30s120,20,180,60";

  const pathToUse = short ? shortPath : longPath;

  return (
    <div className={styles.graphWrapper}>
      <div className={styles.absoluteTitle}>
        <MarkedLabel text="Desplegables" fontSize="1.2rem" />
      </div>

      <div className={styles.absolute}>
        <svg
          width="315px"
          height="107px"
          viewBox="0 0 315 107"
          style={{ overflow: "visible" }}
        >
          <g fill="none" fillRule="evenodd">
            {/* Path principal */}
            <path id="Path-1" className={styles.path} d={pathToUse} />

            {/* Path punteado */}
            <path className={styles.dashed} d={pathToUse} />

            {/* Flecha animada */}
            <polyline id="arrow" points="0,-9 18,0 0,9 5,0" fill="#f3a600">
              <animateMotion
                rotate="auto"
                begin="1s"
                dur="1.6s"
                repeatCount="1"
                fill="freeze"
              >
                <mpath href="#Path-1" />
              </animateMotion>
            </polyline>
          </g>
        </svg>
      </div>

      {/* Contenido hijo */}
      <div className={styles.childWrapper}>{children}</div>
    </div>
  );
}
