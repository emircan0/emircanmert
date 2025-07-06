import { useLanguage } from '@contexts/LanguageContext';
import styles from './About.module.css';
import img from '../../assets/images/img.jpeg'; // Kendi görselini buraya koy

function About() {
  const { language, locales } = useLanguage();

  const skills = [
    'C#', '.NET Core', 'Java', 'Javascript', 'Node.js', 'React', 'SQL',
    'TDD', 'SOLID', 'Clean Code', 'Microservices',
    'Agile', 'CI/CD', 'Firebase'
  ];

  // Dil bazlı CV yolu
  const cvPath = language === 'tr' 
    ? '/assets/Emircan_Mert_Özgeçmiş.pdf' 
    : '/assets/Emircan_Mert_CV.pdf';

  // Dil bazlı buton yazısı
  const downloadText = language === 'tr' ? 'Özgeçmiş İndir' : 'Download Resume  ';

  return (
    <section id="about" className={styles.section}>
      <div className={styles.card}>
        <img src={img} alt="Emircan Mert" className={styles.avatar} />
        <h1 className={styles.name}>Emircan Mert</h1>
        <h2 className={styles.title}>Computer Engineer · Software Developer</h2>
        <p className={styles.bio}>{locales[language].about.content}</p>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <span key={index} className={styles.skillBadge}>{skill}</span>
          ))}
        </div>
        <div className={styles.links}>
          <a
            href="https://github.com/emircanmert"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/emircanmert"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href={cvPath} download className={styles.cvButton} aria-label="Download Resume">
            {downloadText}
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
