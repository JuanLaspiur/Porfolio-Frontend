import { Outlet } from 'react-router-dom';
import styles from './styles/Layout.module.css';
import Navbar from '../components/Navbar';

function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <Navbar/>
      <Outlet /> 
    </div>
  );
}

export default Layout;
