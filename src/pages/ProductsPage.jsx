import React from 'react';

const ProductsPage = () => {
  return (
    <div>
      <h2>Продукты и услуги</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', color: 'black' }}>
        <thead>
          <tr style={{ backgroundColor: '#ddd' }}>
            <th style={{ border: '1px solid black', padding: '8px' }}>Услуга</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Описание</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Цена, руб</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{ border: '1px solid black', padding: '8px' }}>Аудиогид</td><td style={{ border: '1px solid black', padding: '8px' }}>Прогулка по центру с аудиорассказом</td><td style={{ border: '1px solid black', padding: '8px' }}>500</td></tr>
          <tr><td style={{ border: '1px solid black', padding: '8px' }}>Индивидуальная экскурсия</td><td style={{ border: '1px solid black', padding: '8px' }}>3 часа, гид</td><td style={{ border: '1px solid black', padding: '8px' }}>2500</td></tr>
          <tr><td style={{ border: '1px solid black', padding: '8px' }}>Карта мест</td><td style={{ border: '1px solid black', padding: '8px' }}>PDF-путеводитель с маршрутами</td><td style={{ border: '1px solid black', padding: '8px' }}>300</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;