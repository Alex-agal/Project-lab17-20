import React from 'react';
import styles from './Aside.module.css';

const Aside = () => {
  const tags = ['#Ростов', '#Дон', '#Экскурсии', '#Кухня', '#Набережная', '#Музеи'];

  return (
    <aside className={styles.aside}>
      <div className={styles.tagCloud}>
        <h3>Облако тегов</h3>
        <div className={styles.tags}>
          {tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
        </div>
      </div>
      <div className={styles.banner}>
        <p>🎟️ Скачайте наш путеводитель (PDF)</p>
        <a href="/Тестовый файл для лабораторной работы».pdf" download>Скачать PDF</a>
      </div>
    </aside>
  );
};

export default Aside;