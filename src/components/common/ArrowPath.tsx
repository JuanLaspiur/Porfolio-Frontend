import { ReactNode } from "react";
import styles from "./styles/ArrowPath.module.css";
import MarkedLabel from "./MarkedLabel";

interface ArrowPathProps {
  children: ReactNode;
}

export default function ArrowPath({ children }: ArrowPathProps) {
  return (
    <div className={styles.graphWrapper}>     
          <div className={styles.absoluteTitle}>
     <MarkedLabel text="Ver más" fontSize='1.2rem'/>    </div>
      <div className={styles.absolute}> 

        <svg
          width="315px"
          height="107px"
          viewBox="0 0 315 107"
          style={{ overflow: "visible" }}
        >
          <g fill="none" fillRule="evenodd">
            {/* Path principal */}
            <path
              id="Path-1"
              className={styles.path}
              d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"
            />

            {/* Path punteado */}
            <path
              className={styles.dashed}
              d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"
            />

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
