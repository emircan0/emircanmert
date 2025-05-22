import { useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Work from './components/sections/Work';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import './styles/index.css';

function AppContent() {
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    };

    const links = document.querySelectorAll('nav a');
    links.forEach((link) => link.addEventListener('click', handleScroll));

    return () => {
      links.forEach((link) => link.removeEventListener('click', handleScroll));
    };
  }, []);

  return (
    <div className={theme}>
      <div className="container">
        <Navbar />
        <Hero />
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
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;