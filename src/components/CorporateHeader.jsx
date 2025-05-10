import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import Phone from '../assets/images/phone.svg';
import Mail from '../assets/images/mail.svg';
import '../styles/CorporateHeader.css';

export function CorporateHeader() {
  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleClickStart = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="corporate-header">
      <nav className="corporate-header__nav">
        <ul className="corporate-header__menu">
          <li><a href="#about" onClick={(e) => handleClickStart(e, 'about')}>О нас</a></li>
          <li><a href="#formats" onClick={(e) => handleClickStart(e, 'formats')}>Наши форматы</a></li>
          <li><a href="#promo" onClick={(e) => handleClick(e, 'promo')}>Промо-ролик</a></li>
          <li><a href="#order" onClick={(e) => handleClick(e, 'order')}>Заказать мероприятие</a></li>
          <li><a href="#faq" onClick={(e) => handleClickStart(e, 'faq')}>FAQ</a></li>
        </ul>
      </nav>
      <div className="logo-container logo-container--corporate">
        <Link to="/corporate">
          <img src={Logo} alt="Логотип" className="header-logo header-logo--corporate" />
        </Link>
      </div>
      <div className="corporate-header__contacts contact-buttons">
        <span className="corporate-header__contacts-label">Свяжитесь с нами</span>
        <a href="tel:+79119707896" className="contact-button phone">
            <img src={Phone} alt="Телефон" />
        </a>
        <a href="mailto: khishtaki@gmail.com" className="contact-button email">
            <img src={Mail} alt="Почта" />
        </a>
      </div>
    </header>
  );
} 