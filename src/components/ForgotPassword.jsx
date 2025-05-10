import React, { useState, useEffect } from 'react';
import '../styles/Modal.css';
import close from '../assets/images/close-black.svg';

export function ForgotPassword({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  // Управление классом modal-open для body
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки запроса на восстановление пароля
    console.log('Восстановление пароля для:', email);
    setIsEmailSent(true);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <img src={close} alt="Закрыть" />
        </button>
        
        {!isEmailSent ? (
          <>
            <h2 className="modal-title modal-title-center">Восстановить пароль</h2>
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Почта"
                  className="input input--black"
                  required
                />
              </div>
              <button type="submit" className="button button--black modal-button">
                Восстановить пароль
              </button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <p>Проверьте вашу почту {email} – мы отправили вам письмо с инструкциями по восстановлению пароля.</p>
            <p className="small-text">Если письмо не пришло, проверьте папку «Спам» или отправьте запрос снова.</p>
          </div>
        )}
      </div>
    </div>
  );
} 