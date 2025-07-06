import { useEffect } from 'react';
import { LanguageProvider, useLanguage} from './contexts/LanguageContext';
import Navbar from './components/layout/Navbar';
import About from './components/sections/About';
import Work from './components/sections/Work';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import './styles/index.css';

function AppContent() {
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = (e) => {
  const href = e.target.getAttribute('href');
  if (!href.startsWith('#')) return; // Dış linkleri engelle

  e.preventDefault();
  const targetId = href.slice(1);
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};


    const links = document.querySelectorAll('nav a');
    links.forEach((link) => link.addEventListener('click', handleScroll));

    return () => {
      links.forEach((link) => link.removeEventListener('click', handleScroll));
    };
  }, []);

  return (
    <div className={language === 'tr' ? 'tr' : 'en'}>
      <div className="container">
        <Navbar />
        <About />
        <Work />
        <Education />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}


// Ana App bileşeni: Provider'ları burada sarmalıyoruz
function App() {
  return (
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
  );
}

export default App;