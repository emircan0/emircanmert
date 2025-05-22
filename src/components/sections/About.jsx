import { useLanguage } from '@contexts/LanguageContext';
import styles from './About.module.css';

function About() {
  const { language, locales } = useLanguage();

  return (
    <section id="about" className={styles.section}>
      <h2>{locales[language].about.title}</h2>
      <div className={styles.content}>
        <p>{locales[language].about.content}</p>
      </div>
    </section>
  );
}

export default About;