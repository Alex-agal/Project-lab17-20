import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Section.module.css';

const Section = () => {
  return (
    <section className={styles.section}>
      <div className={styles.links}>
        <h3>Ссылки на страницы</h3>
        <ul>
          <li><Link to="/news">Новости</Link></li>
          <li><Link to="/about">Об авторе</Link></li>
          <li><Link to="/contacts">Обратная связь</Link></li>
          <li><Link to="/products">Продукты и услуги</Link></li>
        </ul>
      </div>
      <div className={styles.banner}>
        <p>Спецпредложение: скидка 20% на экскурсии!</p>
      </div>
    </section>
  );
};

export default Section;