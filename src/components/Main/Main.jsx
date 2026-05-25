import React from 'react';
import styles from './Main.module.css';
import Section from './Section/Section';
import Article from './Article/Article';
import Aside from './Aside/Aside';

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.gridContainer}>
        <Section />
        <Article />
        <Aside />
      </div>
    </main>
  );
};

export default Main;