import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/HeaderMainPageSection.css';
import mainPhoto from '../assets/images/main-photo.png';
import MunnPhoto from '../assets/images/munskip/1.jpg';
import SkipskyPhoto from '../assets/images/munskip/2.jpg';
import arrowDown from '../assets/images/arrow-down.svg';

export const HeaderMainPageSection = () => {
  const location = useLocation();
  const isCorporate = location.pathname === '/corporate';

  const getContent = () => {
    if (isCorporate) {
      return {
        subtitle: "Корпоративные мероприятия",
        title: "Что? Где? Когда?",
        description: "для вашей компании",
        buttonText: "Заказать мероприятие",
        backgroundImage: mainPhoto
      };
    }
    return {
      subtitle: "Настоящая игра",
      title: "Что? Где? Когда?",
      description: "в Санкт-Петербурге",
      buttonText: "Записаться на игру",
      backgroundImage: mainPhoto
    };
  };

  const content = getContent();

  const handleOrderClick = () => {
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <header className="main-header" style={{backgroundImage: `url(${content.backgroundImage})`}}>
      <div className="main-header-titles">
        <h1 className="main-subtitle">{content.subtitle}</h1>
        <h1 className="main-title">{content.title}</h1>
        <h1 className="main-subtitle">{content.description}</h1>
      </div>
      <div className="signup-button" onClick={content.buttonText === "Заказать мероприятие" ? handleOrderClick : () => document.querySelector('.next-game-section').scrollIntoView({ behavior: 'smooth', block: 'center' })}>
        <button className="button button--white">
          {content.buttonText}
        </button>
        <div className="chevron-down">
          <img src={arrowDown} alt={content.buttonText}/>
        </div>
      </div>
      {isCorporate && (
        <div className="corporate-hosts-block">
          <div className="corporate-hosts-photos">
            <div className="corporate-host-photo corporate-host-photo--first"><img src={MunnPhoto} alt="Михаил Мун"/></div>
            <div className="corporate-host-photo corporate-host-photo--second"><img src={SkipskyPhoto} alt="Михаил Скипский"/></div>
          </div>
          <div className="corporate-hosts-caption">
            Ваши ведущие —<br/>Михаил Мун и Михаил Скипский
          </div>
        </div>
      )}
    </header>
  );
};

export function HeaderMainPage() {
  return <HeaderMainPageSection />;
}