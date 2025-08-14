import { useEffect, useRef, useState } from 'react';
import styles from './styles/ExperienceTimeline.module.css';
import MarkedLabelProps from '../components/common/MarkedLabel';

export default function ExperienceTimeline() {
  const experiences = [
    {
      year: '2024 - Actualidad',
      role: 'Desarrollador Full Stack',
      company: 'Freelance',
      description: 'Desarrollo de aplicaciones web con React, Node.js, Docker y AWS.',
    },
    {
      year: '2022 - 2024',
      role: 'Backend Developer',
      company: 'Tech Solutions',
      description: 'Implementación de microservicios en Node.js y despliegue en AWS.',
    },
    {
      year: '2020 - 2022',
      role: 'Desarrollador Frontend',
      company: 'Creativa Web',
      description: 'Maquetación y desarrollo con React.js, Next.js y consumo de APIs REST.',
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
    </section>
  );
}
