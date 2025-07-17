import ScrollSections from "../components/ScrollSections";
import HeroSection from "../components/HeroSection";
import ProyectCard from "../components/common/ProyectCard";

import styles from "./styles/Home.module.css";
import CubeBackgroundWrapper from "../components/CubeBackgroundWrapper";

function Home() {
  return (
    <section className={styles.homeContainer}>
      <div className={`${styles.box} ${styles.box_1}`}><HeroSection /></div>
      <div className={`${styles.box} ${styles.box_2}`}>
        <ProyectCard
          title="Blog María"
          category="React - Node"
          author="Celeste Mills"
          time="15 min"
          href="#"
          image="/1.png"
        />
        <ProyectCard
          title="Spartus Landing Page"
          category="React - Java"
          author="Celeste Mills"
          time="15 min"
          href="#"
          image="/2.png"
        />
        <ProyectCard
          title="Cooperar Mobile App"
          category="Expo - Java"
          author="Celeste Mills"
          time="15 min"
          href="#"
          image="/3.png"
        />
      </div>      
      <div className={`${styles.box} ${styles.box_3}`}>
 
        <ScrollSections />
      </div>
      <div className={`${styles.box} ${styles.box_4}`}><CubeBackgroundWrapper> <div style={{ color: 'white', padding: '5rem', textAlign: 'center', height:'100vh' }}>

      </div></CubeBackgroundWrapper></div>
    </section>
  );
}


export default Home;
