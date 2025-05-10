import React from 'react';
import bell from '../assets/images/volchok.png';
import MunnPhoto from '../assets/images/munskip/7.jpg'; 
import SkipskyPhoto from '../assets/images/munskip/8.jpg';
import '../styles/CorporateGamesInfo.css';

export function CorporateGamesInfo() {
  return (
    <section className="corporate-games-section" id="about">
      <div className="events-grid corporate-custom-grid">
        <div className="corporate-bell-intro">
            <img src={bell} alt="Колокол" className="corporate-bell-intro__icon" />
            <div className="corporate-bell-intro__text">
            Официальные игры «Что? Где? Когда?» дарят вам уникальный опыт — оказаться по ту сторону экрана, где рождается магия интеллектуального шоу. Это ваш билет в мир настоящих знатоков, где каждый может проверить себя у знаменитого зеркального стола
            </div>
        </div>
        <div className="event-item event-item--row">
          <div className="event-item__content--with-avatars">
            <div className="event-item__content event-item__content--half">
              <h3>Ведущие вашего мероприятия — Михаил Мун и Михаил Скипский</h3>
              <p>Легендарные игроки телевизионного клуба «Что? Где? Когда?», обладатели Хрустальных сов</p>
            </div>
            <div className="event-item__avatars">
              <img src={MunnPhoto} alt="Михаил Мун" />
              <img src={SkipskyPhoto} alt="Михаил Скипский" />
            </div>
          </div>
        </div>
        <div className="event-item event-item--row">
          <div className="event-item__content event-item__content--half">
            <h3>Оригинальная атрибутика</h3>
            <p>Наши игры проводятся по лицензии правообладателя, и в них сохранены все элементы оригинального формата: зеркальный стол, настоящий волчок, фирменная музыка и стиль вопросов. Это позволяет зрителям почувствовать полное погружение в атмосферу телевизионной версии игры</p>
          </div>
          <div className="event-item__content event-item__content--half">
            <h3>Гибкость организации</h3>
            <p>Для каждого мероприятия разрабатываются индивидуальные правила, которые учитывают количество команд-участниц и пожелания заказчика. При заказе серии игр предоставляются скидки и дополнительные услуги, такие как тренировки, мастер-классы и помощь в формировании команд</p>
          </div>
        </div>
      </div>
    </section>
  );
} 