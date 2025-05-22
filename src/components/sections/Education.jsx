import { useLanguage } from '@contexts/LanguageContext';
import styles from './Education.module.css';

function Education() {
  const { language, locales } = useLanguage();
  const educationList = [locales[language].education.bilecik, locales[language].education.wroclaw];

  return (
<section id="education" className={styles.section}>
  <h2>{locales[language].education.title}</h2>
  <div className={styles.educationList}>
    {educationList.map((edu, index) => (
      <div key={index} className={styles.educationEntry}>
        <h3>{edu.degree}</h3>
        <p>{edu.school}</p>
        <p>{edu.duration}</p>
      </div>
    ))}
  </div>
</section>
  
  );
}

export default Education;