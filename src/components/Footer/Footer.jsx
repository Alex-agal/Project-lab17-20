import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2026 Гид в кармане | Контакты: +7 908 517 50 43 | guide@rostov.local</p>
        <p>Создатель: Галаган А.М., Полуян А.А., Соковиков А.С. , группа 23ПП-44.03.04.01-о1</p>
      </div>
    </footer>
  );
};

export default Footer;