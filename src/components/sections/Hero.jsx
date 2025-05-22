import { useLanguage } from '@contexts/LanguageContext';
import styles from './Hero.module.css';
import img from '../../assets/images/img.jpeg';

const Hero = () => {
  const { language, locales } = useLanguage();

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.imageWrapper}>
          <img src={img} alt="Profile" className={styles.profileImage} />
        </div>
        <div className={styles.textContent}>
          <h1 className={styles.heroTitle}>{locales[language].hero.title}</h1>
          <p className={styles.heroSubtitle}>{locales[language].hero.subtitle}</p>
          <p className={styles.aboutText}>{locales[language].about.content}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
