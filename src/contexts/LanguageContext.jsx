import { createContext, useContext, useState } from 'react'; // Gerekli import'lar eklendi
import { locales } from './locales'; // Named export olarak import et

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('tr'); // Varsayılan dil Türkçe

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, locales }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);