import { useLanguage } from '@contexts/LanguageContext';
import styles from './Projects.module.css';

function Projects() {
  const { language, locales } = useLanguage();
  const projectsList = [
    locales[language].projects.foodApp,
    locales[language].projects.cancerDetection,
    locales[language].projects.drone,
  ];

  return (
    <section id="projects" className={styles.section} aria-label={locales[language].projects.title}>
      <h2>{locales[language].projects.title}</h2>
      <div className={styles.projectsList}>
        {projectsList.map((project, index) => (
          <article
            key={index}
            className={styles.projectEntry}
            tabIndex={0}
            aria-labelledby={`project-title-${index}`}
          >
            <h3 id={`project-title-${index}`}>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;