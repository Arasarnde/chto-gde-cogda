import React from 'react';
import '../styles/Modal.css';
import close from '../assets/images/close-black.svg';

export function PersonalDataModal({ open, onClose }) {
  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <img src={close} alt="Закрыть" />
        </button>
        <h2 className="modal-title modal-title-center">Политика конфиденциальности</h2>
        <div className="modal-description personal-policy-modal">
          <ol>
            <li>В соответствии с требованиями Федерального закона от 27.07.2006 г. № 152-ФЗ «О персональных данных», мы собираем и обрабатываем персональные данные посетителей сайта http://chto-gde-kogda.nontrivial.ru, а именно: фамилия, имя, отчество; контактный телефон, адрес электронной почты, в целях информирования о новостях, товарах и услугах, условиях оплаты и работы.</li>
            <li>Заказывая обратный звонок через форму обратной связи на сайте http://chto-gde-kogda.nontrivial.ru, Посетитель дает свое согласие на сбор и обработку персональных данных о себе.</li>
            <li>При сборе и обработке персональных данных мы не преследуем иных целей, кроме установленных в п.1 настоящего Согласия на обработку персональных данных.</li>
            <li>Доступ к персональным данным посетителей имеют только лица, имеющие непосредственное отношение к информированию посетителей.</li>
            <li>Посетитель сайта http://chto-gde-kogda.nontrivial.ru дает свое согласие на полную или частичную запись телефонных переговоров в целях повышения качества обслуживания.</li>
          </ol>
        </div>
      </div>
    </div>
  );
} 