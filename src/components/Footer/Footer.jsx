import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Footer.module.css';

const Footer = () => {
  const { language } = useLanguage();

  const footerText = {
    ru: {
      copyright: '© 2026 Гид в кармане | Контакты: +7 908 517 50 43 | guide@rostov.local',
      creator: 'Создатель: Галаган А.М., Полуян А.А., Соковиков А.С., группа 23ПП-44.03.04.01-01'
    },
    en: {
      copyright: '© 2026 Pocket Guide | Contacts: +7 908 517 50 43 | guide@rostov.local',
      creator: 'Creator: Galagan A.M., Poluian A.A., Sokovikov A.S., group 23PP-44.03.04.01-01'
    }
  };

  const data = footerText[language];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>{data.copyright}</p>
        <p>{data.creator}</p>
      </div>
    </footer>
  );
};

export default Footer;