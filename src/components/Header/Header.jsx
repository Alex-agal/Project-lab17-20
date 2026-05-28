import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Header.module.css';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const buttonText = language === 'ru' ? 'English' : 'Русский';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>🗺️ Гид в кармане</div>
        
        <button className={styles.burger} onClick={toggleMenu}>
          ☰
        </button>
        
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li><Link to="/news" onClick={() => setMenuOpen(false)}>{language === 'ru' ? 'Новости' : 'News'}</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>{language === 'ru' ? 'Об авторе' : 'About'}</Link></li>
            <li><Link to="/contacts" onClick={() => setMenuOpen(false)}>{language === 'ru' ? 'Обратная связь' : 'Contacts'}</Link></li>
            <li><Link to="/products" onClick={() => setMenuOpen(false)}>{language === 'ru' ? 'Продукты и услуги' : 'Products & Services'}</Link></li>
          </ul>
        </nav>
        
        <button onClick={toggleLanguage} className={styles.langBtn}>
          {buttonText}
        </button>
      </div>
    </header>
  );
};

export default Header;