import React, { useState, useEffect } from 'react';
import '../styles/Modal.css';
import close from '../assets/images/close-black.svg';

export function AddTeamModal({ isOpen, onClose }) {
  const [modalStep, setModalStep] = useState('initial'); // initial, create, join
  const [teamName, setTeamName] = useState('');
  const [joinCode, setJoinCode] = useState('');

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

  // Сброс состояния при закрытии модального окна
  useEffect(() => {
    if (!isOpen) {
      setModalStep('initial');
      setTeamName('');
      setJoinCode('');
    }
  }, [isOpen]);

  const handleCreateTeam = (e) => {
    e.preventDefault();
    // Здесь будет логика создания команды
    console.log('Создание команды:', teamName);
    onClose();
  };

  const handleJoinTeam = (e) => {
    e.preventDefault();
    // Здесь будет логика присоединения к команде
    console.log('Присоединение к команде:', joinCode);
    onClose();
  };

  const handleClose = () => {
    onClose();
    setModalStep('initial');
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose}>
          <img src={close} alt="Закрыть" />
        </button>
        
        {modalStep === 'initial' && (
          <>
            <h2 className="modal-title modal-title-center">Добавить команду</h2>
            <div className="modal-buttons">
              <button 
                type="button"
                className="button modal-button button--black"
                onClick={() => setModalStep('create')}
              >
                Создать команду
              </button>
              <button 
                type="button"
                className="button modal-button button--black"
                onClick={() => setModalStep('join')}
              >
                Присоединиться к команде
              </button>
            </div>
          </>
        )}

        {modalStep === 'create' && (
          <>
            <h2 className="modal-title modal-title-center">Создать команду</h2>
            <form onSubmit={handleCreateTeam} className="modal-form">
              <div className="form-group">
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="Название команды"
                  className="input input--black"
                  required
                />
              </div>
              <div className="modal-buttons">
                <button type="submit" className="button modal-button button--black">
                  Создать команду
                </button>
              </div>
            </form>
          </>
        )}

        {modalStep === 'join' && (
          <>
            <h2 className="modal-title modal-title-center">Присоединиться к команде</h2>
            <form onSubmit={handleJoinTeam} className="modal-form">
              <div className="form-group">
                <input
                  type="text"
                  value={joinCode}
                  onChange={(e) => setJoinCode(e.target.value)}
                  placeholder="Код приглашения"
                  className="input input--black"
                  required
                />
              </div>
              <div className="modal-buttons">
                <button type="submit" className="button modal-button button--black">
                  Присоединиться
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
} 