import React, { useState } from 'react';

const ContactsPage = () => {
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
      <p>Телефон: +7 908 517 50 43</p>
      <p>WhatsApp: +7 908 517 50 43</p>
      <p>Telegram: @guide_rostov</p>
      <p>Email: guide@rostov.local</p>

      <h3>Написать нам</h3>
      {sent && <p style={{ color: 'lightgreen' }}>Спасибо! Сообщение отправлено (демо).</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Ваше имя" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Сообщение" rows="4" value={form.message} onChange={handleChange} required></textarea>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default ContactsPage;