import { Outlet } from 'react-router-dom';
import styles from './styles/Layout.module.css';

function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <Outlet /> 
    </div>
  );
}

export default Layout;
