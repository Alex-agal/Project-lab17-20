// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>Извините, запрашиваемая страница не существует.</p>
      <p>Проверьте правильность адреса или вернитесь на <Link to="/news">главную страницу</Link>.</p>
    </div>
  );
};

export default NotFoundPage;