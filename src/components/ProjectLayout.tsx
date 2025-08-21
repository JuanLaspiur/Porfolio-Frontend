import { useEffect, useState } from "react";
import styles from "./styles/ProjectLayout.module.css";
import ProgressBar from "./common/ProgressBar";
import MarkedLabel from "./common/MarkedLabel";

interface CardProps {
  title: string;
  media: React.ReactNode;   // 👈 aquí aceptamos <video>, <img>, lo que quieras
  technologies: string;
}

const Card: React.FC<CardProps> = ({ title, media, technologies }) => (
  <div className={styles.card}>
    <div className={styles.cardImage}>
      {media} {/* 👈 se renderiza tal cual lo pases */}
    </div>
    <div className={styles.cardContent}>
      <h4>{title}</h4>
      <p>{technologies}</p>
    </div>
  </div>
);

interface ColProps {
  cards: { title: string; media: React.ReactNode; technologies: string }[];
}

const Col: React.FC<ColProps> = ({ cards }) => (
  <div className={styles.col}>
    {cards.map((card, index) => (
      <Card
        key={index}
        title={card.title}
        media={card.media}
        technologies={card.technologies}
      />
    ))}
  </div>
);

interface ProjectLayoutProps {
  columns?: { title: string; media: React.ReactNode; technologies: string }[][];
  isProjectsOpen: boolean;
  setIsProjectsOpen: (open: boolean) => void;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({
 columns = [
  [
    {
      title: "Red Social",
      media: <Media videoSrc="/videos/red_social.webm" preview="/optimizado/redSocial.webp" />,
      technologies: "Java (Spring) / React.js / MySQL",
    },
    {
      title: "Gestión Dashboard",
      media: <Media videoSrc="/videos/tag_list.webm" preview="/optimizado/tagList.webp" />,
      technologies: "Node / React.js / Mongo",
    },
  ],
  [
    {
      title: "Raíces Inmobiliaria",
      media: <Media videoSrc="/videos/raices.mp4" preview="/optimizado/raices.webp" />,
      technologies: "Node.js / React.js / MySQL",
    },
    {
      title: "Magic Day",
      media: <Media videoSrc="/videos/magic_day.webm" preview="/optimizado/magic.webp" />,
      technologies: "Node / Expo / Mongo / Firebase",
    },
  ],
]
,
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
    const duration = 15000;

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
      <div className={styles.progress}>
        <MarkedLabel fontSize="1.2rem" text="Otros Proyectos" />
        <ProgressBar progress={progress} />
      </div>
      <div className={styles.container}>
        {columns.map((colCards, index) => (
          <Col key={index} cards={colCards} />
        ))}
      </div>
    </>
  );
};

export default ProjectLayout;


interface MediaProps {
  videoSrc: string;
  preview: string;
}

const Media: React.FC<MediaProps> = ({ videoSrc, preview }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <video
      src={videoSrc}
      muted
      autoPlay
      loop
      playsInline
      poster={preview}      // 👈 muestra la imagen mientras carga
      onCanPlayThrough={() => setLoaded(true)} 
      style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}
    />
  );
};