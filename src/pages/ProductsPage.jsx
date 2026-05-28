import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ProductsPage = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  // ВАШИ ФОТО (9 штук)
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

  const tableData = {
    ru: {
      headers: ['Услуга', 'Описание', 'Цена, руб'],
      rows: [
        ['🎧 Аудиогид', 'Прогулка по центру с аудиорассказом', '500'],
        ['👩‍🏫 Индивидуальная экскурсия', '3 часа, гид', '2500'],
        ['🗺️ Карта мест', 'PDF-путеводитель с маршрутами', '300']
      ]
    },
    en: {
      headers: ['Service', 'Description', 'Price, RUB'],
      rows: [
        ['🎧 Audio guide', 'Walk in the center with audio', '500'],
        ['👩‍🏫 Private tour', '3 hours with guide', '2500'],
        ['🗺️ Map of places', 'PDF guide with routes', '300']
      ]
    }
  };

  const data = tableData[language];

  return (
    <div>
      <h2>{language === 'ru' ? 'Продукты и услуги' : 'Products & Services'}</h2>

      {/* Карусель */}
      <div style={{ marginBottom: '30px', padding: '20px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '16px' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '15px' }}>{language === 'ru' ? '📸 Наши экскурсии' : '📸 Our tours'}</h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
          <button onClick={prevPhoto} style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', fontSize: '30px', width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer' }}>❮</button>
          <img src={photos[currentIndex]} alt="Tour" style={{ width: '100%', maxWidth: '400px', height: '250px', objectFit: 'cover', borderRadius: '16px' }} />
          <button onClick={nextPhoto} style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', fontSize: '30px', width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer' }}>❯</button>
        </div>
        <p style={{ textAlign: 'center', marginTop: '10px' }}>{currentIndex + 1} / {photos.length}</p>
      </div>

      {/* Таблица */}
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', color: 'black' }}>
        <thead>
          <tr style={{ backgroundColor: '#ddd' }}>
            {data.headers.map(h => <th key={h} style={{ border: '1px solid black', padding: '8px' }}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, idx) => (
            <tr key={idx}>
              {row.map(cell => <td key={cell} style={{ border: '1px solid black', padding: '8px' }}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;