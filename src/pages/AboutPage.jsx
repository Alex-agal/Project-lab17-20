import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
const AboutPage = () => {
   const { language } = useLanguage();
  return (
    <div>
      <h1>{language === 'ru' ? 'Южный федеральный университет' : 'Southern Federal University'}</h1>
      <img src="/sfedu-logo.jpg" alt="Логотип ЮФУ" style={{ width: '200px', margin: '20px 0' }} />
      <p><strong>{language === 'ru' ? 'Студенты:' : 'Students:'}</strong>  Галаган Александр Михайлович, Полуян Анна Александровна, Соковиков Антон Сергеевич.</p>
       <p><strong>{language === 'ru' ? 'Группа:' : 'Group:'}</strong> 23ПП-44.03.04.01-01</p>
      <h3>{language === 'ru' ? '🏆 Достижения' : '🏆 Achievements'} </h3>
      <ul>
        <li>{language === 'ru' ? 'Разработка сайта на React + Vite' : 'Website development on React + Vite'} </li>
        <li>{language === 'ru' ? 'Участие в студенческой научной конференции по веб-технологиям' : 'Participation in student scientific conference on web technologies'}</li>
        <li>{language === 'ru' ? 'Создание дизайн-макетов в Figma для десктопной и мобильной версий' : 'Creating design layouts in Figma for desktop and mobile versions'}</li>
        <li>{language === 'ru' ? 'Освоение Git, GitHub, работы с командой' : 'Mastering Git, GitHub, teamwork'}</li>
        <li>{language === 'ru' ? 'Освоение JavaScript и React' : 'Mastering JavaScript and React'}</li>
        <li>{language === 'ru' ? 'Проведение экскурсий по городу Ростову-на-Дону' : 'Conducting tours around Rostov-on-Don'}</li>
      </ul>
    </div>
  );
};

export default AboutPage;