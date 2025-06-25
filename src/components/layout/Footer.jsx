import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2025 Emircan Mert. All rights reserved.</p>
      <div className={styles.socials}>
        <a href="https://github.com/emircan0" target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://linkedin.com/in/emircantmert" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
