import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
const NewsPage = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = ['/Rostov-1.jpg','/Rostov.jpg','/don.jpeg', '/don2.png'];
  const nextPhoto = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };
  const prevPhoto = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div>
      {/* Обязательный текст по ТЗ */}
      <h1>{language === 'ru' ? 'Отличная новость.' : 'Great news.'}</h1>
      <p>{language === 'ru' ? 'Уже тепло!' : 'It\'s already warm!'}</p>

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
      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        {currentIndex + 1} из {photos.length}
      </p>
      <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px' }}>
      {language === 'ru' 
          ? '🚢 На Дону открылась навигация! Приглашаем на прогулки на теплоходе.'
          : '🚢 Navigation on the Don River has opened! Join us for boat rides.'}
      </p>
    </div>
  );
};

export default NewsPage;