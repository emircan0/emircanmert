import { useLanguage } from '@contexts/LanguageContext';
import styles from './Work.module.css';

function Work() {
  const { language, locales } = useLanguage();
  const jobs = [locales[language].work.optimum, locales[language].work.guru, locales[language].work.asist];

  return (
    <section id="work" className={styles.section}>
      <h2 className={styles.sectionTitle}>{locales[language].work.title}</h2>
      <div className={styles.timeline}>
        {jobs.map((job, index) => (
        <div key={index} className={styles.jobCard}>
          <div className={styles.jobHeader}>
            <h3>{job.title}</h3>
            <span className={styles.duration}>{job.duration}</span>
          </div>
          <p className={styles.company}>{job.company}</p>
          <ul className={styles.descriptionList}>
            {job.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>

        ))}
      </div>
    </section>
  );
}

export default Work;
