import React, { useState } from 'react';

const NewsPage = () => {
  // Список фото (имена файлов в папке public)
  const photos = ['/Rostov-1.jpg','/Rostov.jpg','/don.jpeg', '/don2.png'];
  
  // Состояние для хранения индекса текущего фото
  const [currentIndex, setCurrentIndex] = useState(0);

  // Функция для следующего фото
  const nextPhoto = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  // Функция для предыдущего фото
  const prevPhoto = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div>
      {/* Обязательный текст по ТЗ */}
      <h1>Отличная новость.</h1>
      <p>Уже тепло!</p>

      {/* КАРУСЕЛЬ */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '15px',
        marginTop: '30px'
      }}>
        {/* Кнопка "Назад" */}
        <button 
          onClick={prevPhoto}
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: 'none',
            fontSize: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            cursor: 'pointer'
          }}
        >
          ❮
        </button>

        {/* Текущее фото */}
        <img 
          src={photos[currentIndex]} 
          alt={`Фото ${currentIndex + 1}`} 
          style={{
            width: '100%',
            maxWidth: '600px',
            height: '400px',
            objectFit: 'cover',
            borderRadius: '16px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}
        />

        {/* Кнопка "Вперед" */}
        <button 
          onClick={nextPhoto}
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: 'none',
            fontSize: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            cursor: 'pointer'
          }}
        >
          ❯
        </button>
      </div>

      {/* Индикатор (показывает, какое фото сейчас: 1 из 4) */}
      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        {currentIndex + 1} из {photos.length}
      </p>

      {/* Дополнительный текст */}
      <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px' }}>
        🚢 На Дону открылась навигация! Приглашаем на прогулки на теплоходе.
      </p>
    </div>
  );
};

export default NewsPage;