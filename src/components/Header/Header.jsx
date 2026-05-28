import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Header.module.css';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const buttonText = language === 'ru' ? 'English' : 'Русский';
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>🗺️ Гид в кармане</div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link to="/news">{language === 'ru' ? 'Новости' : 'News'}</Link></li>
            <li><Link to="/about">{language === 'ru' ? 'Об авторе' : 'About'}</Link></li>
            <li><Link to="/contacts">{language === 'ru' ? 'Обратная связь' : 'Contacts'}</Link></li>
            <li><Link to="/products">{language === 'ru' ? 'Продукты и услуги' : 'Products & Services'}</Link></li>
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