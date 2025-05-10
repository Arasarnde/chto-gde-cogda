import React, { useState } from 'react';
import '../styles/CorporateOrderForm.css';
import { PersonalDataModal } from './PersonalDataModal';
import { IMaskInput } from 'react-imask';

export function CorporateOrderForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', agree: false });
  const [submitted, setSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Здесь можно добавить отправку данных
  };

  return (
    <section className="corporate-order-section" id="order">
      <h2 className="corporate-order-title">Хотите заказать мероприятие?</h2>
      <form className="corporate-order-form" onSubmit={handleSubmit} autoComplete="off">
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Имя"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Почта"
          value={form.email}
          onChange={handleChange}
          required
        />
        <IMaskInput
          className="input"
          type="tel"
          name="phone"
          mask={'+7 (000) 000-00-00'}
          value={form.phone || ''}
          onAccept={value => setForm(prev => ({ ...prev, phone: value }))}
          placeholder="Контактный номер"
          required
        />
        <label className="checkbox">
          <input
            className="switch-input"
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            required
          />
           <span className="checkmark"></span>
          <span>
            Я даю согласие на сбор, хранение и обработку моих персональных данных в соответствии с условиями, предусмотренными <button type="button" className="personal-link" onClick={() => setModalOpen(true)}>политикой конфиденциальности</button>.
          </span>
        </label>
        <button className="button button--white" type="submit">
          Оставить заявку
        </button>
        {submitted && <div className="corporate-order-success">Спасибо! Ваша заявка отправлена.</div>}
      </form>
      <PersonalDataModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
} 