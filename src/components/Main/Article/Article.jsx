import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Article.module.css';
import NewsPage from '../../../pages/NewsPage';
import AboutPage from '../../../pages/AboutPage';
import ContactsPage from '../../../pages/ContactsPage';
import ProductsPage from '../../../pages/ProductsPage';
import NotFoundPage from '../../../pages/NotFoundPage';

const Article = () => {
  const location = useLocation();

  const renderContent = () => {
    switch (location.pathname) {
      case '/news':
        return <NewsPage />;
      case '/about':
        return <AboutPage />;
      case '/contacts':
        return <ContactsPage />;
      case '/products':
        return <ProductsPage />;
      default:
        return <NotFoundPage />; // по умолчанию /news
    }
  };

  return (
    <article className={styles.article}>
      {renderContent()}
    </article>
  );
};

export default Article;