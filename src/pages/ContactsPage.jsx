import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactsPage = () => {
  const { language } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <p>{language === 'ru' ? 'Телефон:' : 'Phone:'} +7 908 517 50 43</p>
      <p>WhatsApp: +7 908 517 50 43</p>
      <p>Telegram: @guide_rostov</p>
      <p>Email: guide@rostov.local</p>

      <h3>{language === 'ru' ? 'Написать нам' : 'Contact us'}</h3>
      {sent && <p style={{ color: 'lightgreen' }}>{language === 'ru' ? 'Спасибо! Сообщение отправлено.' : 'Thank you! Message sent.'}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder={language === 'ru' ? 'Ваше имя' : 'Your name'} value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder={language === 'ru' ? 'Сообщение' : 'Message'} rows="4" value={form.message} onChange={handleChange} required></textarea>
        <button type="submit">{language === 'ru' ? 'Отправить' : 'Send'}</button>
      </form>
    </div>
  );
};

export default ContactsPage;