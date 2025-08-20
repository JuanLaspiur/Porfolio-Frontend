import { useEffect, useState } from "react";
import styles from "./styles/ProjectLayout.module.css";
import ProgressBar from "./common/ProgressBar";
import MarkedLabel from "./common/MarkedLabel";

interface CardProps {
  title: string;
  image: string;
  technologies:string;
}

const Card: React.FC<CardProps> = ({ title, image, technologies }) => (
  <div className={styles.card}>
    <div className={styles.cardImage}>
      <video
          src={image}
          muted
          autoPlay
          loop
          playsInline
        />
    </div>
    <div className={styles.cardContent}>
      <h4>{title}</h4>
      <p>
        {technologies}
      </p>
    </div>
  </div>
);

interface ColProps {
  cards: { title: string; image: string }[];
}

const Col: React.FC<ColProps> = ({ cards }) => (
  <div className={styles.col}>
    {cards.map((card, index) => (
      <Card key={index} title={card.title} image={card.image} technologies={card.technologies} />
    ))}
  </div>
);

interface ProjectLayoutProps {
  columns?: { title: string; image: string }[][];
  isProjectsOpen: boolean;
  setIsProjectsOpen: (open: boolean) => void;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  columns = [
    [
      { title: "Red Social", image: "/videos/red_social.webm", technologies:"Java (spring) /React.js /My SQL" },
      { title: "Gestion Dashboard", image: "/videos/tag_list.webm", technologies:"Node /React.js / Mongo" },
    ],
    [
            { title: "Raices Inmobiliaria", image: "/videos/raices.mp4", technologies:"Node.js /React.js /My SQL" },
      { title: "Red Social", image: "/videos/magic_day.webm", technologies:"Node / Expo /Mongo / Firebase" },
    ],
  ],
  isProjectsOpen,
  setIsProjectsOpen,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isProjectsOpen) {
      setProgress(0);
      return;
    }

    let startTime = Date.now();
    const duration = 10000; // ⏳ 10 segundos

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);

      if (percent >= 100) {
        setIsProjectsOpen(false);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isProjectsOpen, setIsProjectsOpen]);

  if (!isProjectsOpen) return null;

  return (
    <>
     <div className={styles.progress} >
        <MarkedLabel fontSize="1.2rem" text="Otros Proyectos" />

      <ProgressBar progress={progress} />
      </div>
    <div className={styles.container}>
      {columns.map((colCards, index) => (
        <Col key={index} cards={colCards} />
      ))}
    </div></>
  );
};

export default ProjectLayout;
