import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import styles from "./styles/ScrollSections.module.css";
import BlogCard from "./common/BlogCard";
import ImgIcon from "./common/icons/ImgIcon";

const sections = [
  {
    title: "Level Up Your CSS.", 
    content: "Aprendé a dominar cada propiedad con precisión quirúrgica.",
    image:"/perfil.jpg",
    iconTitle:"/nube.gif"
  },
  {
    title: "Dissect Problems.",
    content: "No hay desafío que no se pueda descomponer y resolver.",
     image:"/3.png", 
    iconTitle:"/nube.gif"
  },
  {
    title: "Learn New Techniques.",
    content: "Explorá nuevas herramientas y enfoques todos los días.",
     image:"/2.png",
        iconTitle:"/git.webp"
  },
  {
    title: "Profit.",
    content: "Aplicá tu conocimiento y hacelo valer.",
    image:"/1.png",
     iconTitle:"/nube.gif"
  },
];

interface SectionProps {
  title: string;
  content: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  image:string;
  imgSrc:string;
}

function SectionItem({
  title,
  content,
  index,
  total,
  scrollYProgress,
  image,
  imgSrc
}: SectionProps) {
  const sectionSize = 1/(total*2);
  const start = (index * sectionSize)*1.5;
  const end = ((index + 1) * sectionSize) *1.5;
  const fadeInStart =start - sectionSize * 0.09 > 0 ? start - sectionSize * 0.09 : 0;


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
      <div className={styles.sections_h2}><ImgIcon imgSrc={imgSrc}/>{title}</div>
      <p>{content}</p>
<BlogCard
  title="Is Apple a Design Company?"
  content="Apple is more than a tech company; it became a culture unto itself, a passion of most of people and the birthplace of the world’s most revolutionized products."
  link="https://medium.com/@laheshk/is-apple-a-design-company-f5c83514e261"
  imageUrl= {image}
/>




    </motion.section>
  );
}

export default function ScrollSections() {
  const { scrollYProgress } = useScroll();

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
            image={section.image}
            imgSrc={section.iconTitle}
          />
        ))}
      </div>
        </div>
  );
}
