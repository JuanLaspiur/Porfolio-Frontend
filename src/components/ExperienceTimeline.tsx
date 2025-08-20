import { useEffect, useRef, useState } from 'react';
import styles from './styles/ExperienceTimeline.module.css';
import MarkedLabelProps from '../components/common/MarkedLabel';
import LoadingBoom from './common/LoadingBoom';

export default function ExperienceTimeline() {
  const experiences = [
    {
      year: '2024 - Actualidad',
      role: 'Desarrollador Full Stack',
      company: 'Freelance',
      description: 'Desarrollo de aplicaciones web con React, Node.js, Docker y AWS.',
    },
    {
      year: '2023 - 2024',
      role: 'Desarrollador Full Stack ',
      company: 'Branack',
      description: 'Tecnologías: JavaScript, React, Redux, GraphQL (Apollo Client), Material-UI, Node.js, Express, DynamoDB, Sequelize, Mongoose, AWS, Amplify, S3, IAM, Heroku, Cloudinary.',
    },
    {
      year: '2022 - 2023',
      role: 'Desarrollador Full Stack',
      company: 'EICHE',
      description: 'Maquetación y desarrollo con React.js, Next.js y consumo de APIs REST. Java y Node.js',
    },
  ];

  const itemRefs = useRef([]);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, index]);
          } else {
            setVisibleItems((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.1 } // Ajusta cuándo empieza a aparecer
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.timelineSection}>
      <div className={styles.timeline}>
        <MarkedLabelProps fontSize="2rem" text="Experiencia Laboral" />
        {experiences.map((exp, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            data-index={index}
            className={`${styles.timelineItem} ${
              visibleItems.includes(index) ? styles.visible : ''
            }`}
          >
            <div className={styles.content}>
              <span className={styles.year}>{exp.year}</span>
              <h3 className={styles.role}>{exp.role}</h3>
              <h4 className={styles.company}>{exp.company}</h4>
              <p className={styles.description}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
      <LoadingBoom/>
    </section>
  );
}
