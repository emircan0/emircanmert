import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo" aria-label="Footer">
      <p className={styles.copyright}>© 2025 Emircan Mert. All rights reserved.</p>
      <div className={styles.socials}>
        <a
          href="https://github.com/emircan0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          GitHub
        </a>
        {' | '}
        <a
          href="https://www.linkedin.com/in/emircanmert/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          LinkedIn
        </a>
        {' | '}
        <a
          href="mailto:emircanmertt@gmail.com"
          aria-label="Send Email to Emircan Mert"
        >
          emircanmertt@gmail.com
        </a>
        {' | '}
        <a
          href="https://wa.me/905347365320" // WhatsApp linki
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact via WhatsApp"
        >
          +90 534 736 5320
        </a>
      </div>
    </footer>
  );
}

export default Footer;