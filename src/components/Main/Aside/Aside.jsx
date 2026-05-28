import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import styles from './Aside.module.css';

const Aside = () => {
  const { language } = useLanguage();

  const tags = {
    ru: ['#Ростов', '#Дон', '#Экскурсии', '#Кухня', '#Набережная', '#Музеи'],
    en: ['#Rostov', '#DonRiver', '#Tours', '#Cuisine', '#Embankment', '#Museums']
  };

  return (
    <aside className={styles.aside}>
      <div className={styles.tagCloud}>
        <h3>{language === 'ru' ? 'Облако тегов' : 'Tag cloud'}</h3>
        <div className={styles.tags}>
          {tags[language].map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
        </div>
      </div>
      <div className={styles.banner}>
        <p>🎟️ {language === 'ru' ? 'Скачайте наш путеводитель' : 'Download our guide'}</p>
        <a href="/price-list.txt" download>{language === 'ru' ? 'Скачать PDF' : 'Download PDF'}</a>
      </div>
    </aside>
  );
};

export default Aside;