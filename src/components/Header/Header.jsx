import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>🗺️ Гид в кармане</div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link to="/news">Новости</Link></li>
            <li><Link to="/about">Об авторе</Link></li>
            <li><Link to="/contacts">Обратная связь</Link></li>
            <li><Link to="/products">Продукты и услуги</Link></li>
          </ul>
        </nav>
        <button className={styles.langBtn}>English</button>
      </div>
    </header>
  );
};

export default Header;