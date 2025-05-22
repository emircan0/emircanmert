import { useLanguage } from '@contexts/LanguageContext';
import { useTheme } from '@contexts/ThemeContext';
import styles from './Navbar.module.css';

function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const handleLanguageChange = (e) => {
    toggleLanguage(e.target.value);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <strong>Emircan Mert</strong>
      </div>
      <div className={styles.navContent}>

        <div className={styles.controls}>
          <select
            value={language}
            onChange={handleLanguageChange}
            aria-label="Select language"
            className={styles.languageSelect}
          >
            <option value="tr">TR</option>
            <option value="en">EN</option>
          </select>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={styles.themeBtn}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;