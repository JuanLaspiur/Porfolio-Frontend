import ScrollSections from "../components/ScrollSections";
import HeroSection from "../components/HeroSection";
import ProyectCard from "../components/common/ProyectCard";

import styles from "./styles/Home.module.css";
import SkillSection from "../components/SkillSection";
import CubeBackgroundWrapper from "../components/CubeBackgroundWrapper";
import DevOpsSkill from "../components/DevOpsSkill";
import CardProfile from "../components/CardProfile";
import SecondarySkill from "../components/SecondarySkill";
import DeveloperConsole from "../components/DeveloperConsole";
import FilmCard from "../components/FilmCard";
import { useState } from "react";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverSkill, setHoverSkill] = useState(null);
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
          <SecondarySkill />
          <SkillSection setHoverSkill={setHoverSkill} />
          <DevOpsSkill />
        </div>
      </CubeBackgroundWrapper>
      <FilmCard hoverSkill={hoverSkill} background="https://iamjoshellis-codepen.s3.amazonaws.com/damon-small.jpg" onClick={() => setIsOpen(!isOpen)}>
        <span style={{ textTransform: "uppercase" }}  >{!isOpen ? "Ver más" : "Cerrar Consola"}</span>
      </FilmCard>

      <DeveloperConsole isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={`${styles.box} ${styles.box_5}`}>


      </div>
    </section>
  );
}


export default Home;
