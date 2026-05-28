import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../contexts/LanguageContext';
import styles from './Section.module.css';

const Section = () => {
  const { language } = useLanguage();

  const links = {
    ru: [
      { to: '/news', label: 'Новости' },
      { to: '/about', label: 'Об авторе' },
      { to: '/contacts', label: 'Обратная связь' },
      { to: '/products', label: 'Продукты и услуги' }
    ],
    en: [
      { to: '/news', label: 'News' },
      { to: '/about', label: 'About' },
      { to: '/contacts', label: 'Contacts' },
      { to: '/products', label: 'Products & Services' }
    ]
  };

  const currentLinks = links[language];

  return (
    <section className={styles.section}>
      <div className={styles.links}>
        <h3>{language === 'ru' ? 'Ссылки на страницы' : 'Page links'}</h3>
        <ul>
          {currentLinks.map(link => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.banner}>
        <p>{language === 'ru' ? 'Спецпредложение: скидка 20% на экскурсии!' : 'Special offer: 20% off tours!'}</p>
      </div>
    </section>
  );
};

export default Section;