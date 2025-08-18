import HeroSection from "../components/HeroSection";
import ProyectCard from "../components/common/ProyectCard";

import styles from "./styles/Home.module.css";
import SkillSection from "../components/SkillSection";
import CubeBackgroundWrapper from "../components/CubeBackgroundWrapper";
import DevOpsSkill from "../components/DevOpsSkill";
import SecondarySkill from "../components/SecondarySkill";
import DeveloperConsole from "../components/DeveloperConsole";
import { useState } from "react";
import ExperienceTimeline from "../components/ExperienceTimeline";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import ScrollComponent from "../components/common/ScrollComponent"
import Navbar from "../components/common/Navbar";
import WhatsAppButton from "../components/common/WhatsAppButton";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import ArrowMore from "../components/common/ArrowMore";
import ArrowPath from "../components/common/ArrowPath";
import ProjectLayout from "../components/ProjectLayout";


function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverSkill, setHoverSkill] = useState(null);

  return (
    <section className={styles.homeContainer}>
      <Navbar />
      <div className={`${styles.box} ${styles.box_1}`}>
        <HeroSection />
      </div>
      <ScrollComponent showAtPercent={0.25}>
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
        <div style={{width:'100%', height:'auto', display:'flex', justifyContent:'center', marginBottom:'5vh'}}>
                   <ArrowPath> <ArrowMore onClick={()=>console.log('ewrrew')}/>
         </ArrowPath>           
        </div>
        <ProjectLayout/>
      </ScrollComponent>
      <ScrollComponent showAtPercent={0.48}>
        <div className={`${styles.box} ${styles.box_4}`}>
          <SecondarySkill />
          <SkillSection setHoverSkill={setHoverSkill} />
          <DevOpsSkill />
        </div>
 <div className={`${styles.box_6}`}>

             <ArrowMore onClick={() => setIsOpen(!isOpen)}/>

        <DeveloperConsole isOpen={isOpen} setIsOpen={setIsOpen} /></div>
      </ScrollComponent>

      <ScrollComponent showAtPercent={0.65}>
        <div className={`${styles.box} ${styles.box_5}`}>
          <ExperienceTimeline />
        </div></ScrollComponent>
      <CubeBackgroundWrapper>
        <AboutMe />
      </CubeBackgroundWrapper>
      <WhatsAppButton />
      <Footer />
      <ScrollToTopButton />
  
    </section>
  );
}

export default Home;
