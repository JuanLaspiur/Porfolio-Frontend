import styles from './styles/CubeBackgroundWrapper.module.css';
import { type PropsWithChildren } from 'react';

export default function CubeBackgroundWrapper({ children }: PropsWithChildren) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay}></div>
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={styles.cube}></div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
