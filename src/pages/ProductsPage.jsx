import React, { useState } from 'react';

const ProductsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photos = [
    'Rostov.jpg',
    'food2.jpg',
    'food3.jpg',
    'food1.jpg',
    'music.jpg',
    'musem.jpg',
    'musem2.jpg',
    'musem3.jpg',
    'don2.png'
  ];

  const nextPhoto = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div>
      <h2>Продукты и услуги</h2>

      {/* КАРУСЕЛЬ ФОТО */}
      <div style={{
        marginBottom: '30px',
        padding: '20px',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: '16px'
      }}>
        <h3 style={{ textAlign: 'center', marginBottom: '15px' }}>📸 Наши экскурсии</h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '15px'
        }}>
          <button onClick={prevPhoto} style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: 'none',
            fontSize: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            cursor: 'pointer'
          }}>❮</button>

          <img
            src={photos[currentIndex]}
            alt={`Фото ${currentIndex + 1}`}
            style={{
              width: '100%',
              maxWidth: '450px',
              height: '350px',
              objectFit: 'cover',
              borderRadius: '16px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }}
          />

          <button onClick={nextPhoto} style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: 'none',
            fontSize: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            cursor: 'pointer'
          }}>❯</button>
        </div>
        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          {currentIndex + 1} / {photos.length}
        </p>
      </div>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: 'white',
        color: 'black',
        marginTop: '20px'
      }}>
        <thead>
          <tr style={{ backgroundColor: '#ddd' }}>
            <th style={{ border: '1px solid black', padding: '8px' }}>Услуга</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Описание</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Цена, руб</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>🎧 Аудиогид</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Прогулка по центру с аудиорассказом</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>500</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>👩‍🏫 Индивидуальная экскурсия</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>3 часа, гид</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>2500</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>🗺️ Карта мест</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>PDF-путеводитель с маршрутами</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>300</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;