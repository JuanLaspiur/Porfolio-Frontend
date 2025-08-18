import styles from "./styles/ProjectLayout.module.css";

interface CardProps {
  title: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, image }) => (
  <div className={styles.cardContainer}>
    <div className={styles.overlay}></div>
    <div className={styles.overlay}></div>
    <div className={styles.overlay}></div>
    <div className={styles.overlay}></div>
    <div className={styles.card} style={{ '--card-bg': `url(${image})` } as React.CSSProperties}>
      <h4>{title}</h4>
      <span className={styles.chev}>&rsaquo;</span>
    </div>
  </div>
);

interface ColProps {
  cards: { title: string; image: string }[];
}

const Col: React.FC<ColProps> = ({ cards }) => (
  <div className={styles.col}>
    {cards.map((card, index) => (
      <Card key={index} title={card.title} image={card.image} />
    ))}
  </div>
);

interface ProjectLayoutProps {
  columns?: { title: string; image: string }[][];
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  columns = [
  [
      {
        title: "Astronauts Safely in Orbit Following Launch to International Space Station",
         image:"/2.png"},
      {
        title: "As Solar Wind Blows, Our Heliosphere Balloons",
      image:"/3.png"
      },
      {
        title: "Tiny Asteroid Discovered Saturday Disintegrates Hours Later Over Southern Africa",
        image:"/juan.webp"}
    ],
  [
      {
        title: "Astronauts Safely in Orbit Following Launch to International Space Station",
         image:"/2.png"},
      {
        title: "As Solar Wind Blows, Our Heliosphere Balloons",
      image:"/3.png"
      },
      {
        title: "Tiny Asteroid Discovered Saturday Disintegrates Hours Later Over Southern Africa",
        image:"/juan.webp"}
    ],,
    [
      {
        title: "Astronauts Safely in Orbit Following Launch to International Space Station",
         image:"/2.png"},
      {
        title: "As Solar Wind Blows, Our Heliosphere Balloons",
      image:"/3.png"
      },
      {
        title: "Tiny Asteroid Discovered Saturday Disintegrates Hours Later Over Southern Africa",
        image:"/juan.webp"}
    ],
  ],
}) => {
  return (
    <div className={styles.container}>
      {columns.map((colCards, index) => (
        <Col key={index} cards={colCards} />
      ))}
    </div>
  );
};

export default ProjectLayout;
