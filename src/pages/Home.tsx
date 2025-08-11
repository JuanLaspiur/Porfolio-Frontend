import ScrollSections from "../components/ScrollSections";
import HeroSection from "../components/HeroSection";
import ProyectCard from "../components/common/ProyectCard";

import styles from "./styles/Home.module.css";
import SkillSection from "../components/SkillSection";
import CubeBackgroundWrapper from "../components/CubeBackgroundWrapper";
import DevOpsSkill from "../components/DevOpsSkill";
import CardProfile from "../components/CardProfile";
import SecondarySkill from "../components/SecondarySkill";

function Home() {
  return (
    <section className={styles.homeContainer}>
      <div className={`${styles.box} ${styles.box_1}`}><HeroSection /></div>
      <div className={`${styles.box} ${styles.box_2}`}>
        <ProyectCard
          title="Blog María"
          category="React - Node"
          author="Juan Laspiur"
          time="15 min"
          href="#"
          image="/1.png"
        />
        <ProyectCard
          title="Spartus Landing Page"
          category="React - Java"
          author="Juan Laspiur"
          time="15 min"
          href="#"
          image="/2.png"
        />
        <ProyectCard
          title="Cooperar Mobile App"
          category="Expo - Java"
          author="Juan Laspiur"
          time="15 min"
          href="#"
          image="/3.png"
        />
      </div>
      <div className={`${styles.box} ${styles.box_3}`}>

        <ScrollSections />
      </div><CubeBackgroundWrapper>
        <div className={`${styles.box} ${styles.box_4}`}>
          <SecondarySkill/>
          <SkillSection />
          <DevOpsSkill />
        </div>
      </CubeBackgroundWrapper>
      <div className={`${styles.box} ${styles.box_5}`}>
        <CardProfile/>
      </div>
    </section>
  );
}


export default Home;
