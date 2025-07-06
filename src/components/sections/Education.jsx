import { useLanguage } from '@contexts/LanguageContext';
import styles from './Education.module.css';

function Education() {
  const { language, locales } = useLanguage();
  const educationList = [locales[language].education.bilecik, locales[language].education.wroclaw];

  return (
    <section id="education" className={styles.section} aria-label="Education Background">
      <h2 className={styles.sectionTitle}>{locales[language].education.title}</h2>
      <div className={styles.educationList}>
        {educationList.map((edu, index) => (
          <div key={index} className={styles.educationEntry}>
            <h3 className={styles.degree}>{edu.degree}</h3>
            <p className={styles.institution}>{edu.school}</p>
            <p className={styles.duration}>{edu.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;