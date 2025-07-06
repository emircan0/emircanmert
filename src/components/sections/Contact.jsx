import { useLanguage } from '@contexts/LanguageContext';
import styles from './Contact.module.css';

function Contact() {
  const { language, locales } = useLanguage();

  return (
    <section id="contact" className={styles.section} aria-label={locales[language].contact.title}>
      <h2 className={styles.sectionTitle}>{locales[language].contact.title}</h2>
      <div className={styles.contactItems}>
        <div className={styles.contactItem}>
          <p className={styles.contactLabel}>{locales[language].contact.emailLabel}</p>
          <a
            href={`mailto:${locales[language].contact.email}`}
            className={styles.contactLink}
            aria-label={`Email: ${locales[language].contact.email}`}
          >
            {locales[language].contact.email}
          </a>
        </div>
        <div className={styles.contactItem}>
          <p className={styles.contactLabel}>{locales[language].contact.githubLabel}</p>
          <a
            href={locales[language].contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
            aria-label={`GitHub: ${locales[language].contact.github}`}
          >
            {locales[language].contact.github}
          </a>
        </div>
        <div className={styles.contactItem}>
          <p className={styles.contactLabel}>{locales[language].contact.linkedinLabel}</p>
          <a
            href={locales[language].contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
            aria-label={`LinkedIn: ${locales[language].contact.linkedin}`}
          >
            {locales[language].contact.linkedin}
          </a>
        </div>
        <div className={styles.contactItem}>
          <p className={styles.contactLabel}>{locales[language].contact.websiteLabel}</p>
          <a
            href={locales[language].contact.website}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
            aria-label={`Website: ${locales[language].contact.website}`}
          >
            {locales[language].contact.website}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;