import { useLanguage } from '@contexts/LanguageContext';
import styles from './Contact.module.css';

function Contact() {
  const { language, locales } = useLanguage();

  return (
    <section id="contact" className={styles.section}>
      <h2>{locales[language].contact.title}</h2>
      <div className={styles.contactItems}>
        <div className={styles.contactItem}>
          <p>{locales[language].contact.email}</p>
        </div>
        <div className={styles.contactItem}>
          <p>{locales[language].contact.github}</p>
        </div>
        <div className={styles.contactItem}>
          <p>{locales[language].contact.linkedin}</p>
        </div>
        <div className={styles.contactItem}>
          <p>{locales[language].contact.website}</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;