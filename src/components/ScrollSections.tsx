import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import styles from "./styles/ScrollSections.module.css";

const sections = [
  {
    title: "Level Up Your CSS.", 
    content: "Aprendé a dominar cada propiedad con precisión quirúrgica.",
  },
  {
    title: "Dissect Problems.",
    content: "No hay desafío que no se pueda descomponer y resolver.",
  },
  {
    title: "Learn New Techniques.",
    content: "Explorá nuevas herramientas y enfoques todos los días.",
  },
  {
    title: "Profit.",
    content: "Aplicá tu conocimiento y hacelo valer.",
  },
];

interface SectionProps {
  title: string;
  content: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

function SectionItem({
  title,
  content,
  index,
  total,
  scrollYProgress,
}: SectionProps) {
  const sectionSize = 1/total;
  const start = (index * sectionSize)*2;
  const end = ((index + 1) * sectionSize) *2;
  const fadeInStart =start - sectionSize * 0.3 > 0 ? start - sectionSize * 0.3 : 0;


  const opacity = useTransform(
    scrollYProgress,
    [fadeInStart, start, end],
    [0, 1, 0],
    { clamp: true }
  );

  const y = useTransform(scrollYProgress, [start, end], ["10%", "0%"], {
    clamp: true,
  });

  return (
    <motion.section
      className={styles.section}
      style={{ opacity, y }}
    >
      <h2>{title}</h2>
      <p>{content}</p>
    </motion.section>
  );
}

export default function ScrollSections() {
  const { scrollYProgress } = useScroll();
  console.log('scrollYProgress ', scrollYProgress)

  return (
    <div className={styles.wrapper}>
      {/* Fondo oscuro fijo */}
      <div className={styles.stickyContainer}>
        {sections.map((section, index) => (
          <SectionItem
            key={index}
            index={index}
            total={sections.length}
            scrollYProgress={scrollYProgress}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
      {/* Espaciador para permitir scroll */}
      <div style={{ height: '300vh' }} />
    </div>
  );
}
