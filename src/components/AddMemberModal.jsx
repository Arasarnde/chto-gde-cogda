import React, { useState } from 'react';
import '../styles/Modal.css';
import close from '../assets/images/close-black.svg';
import refresh from '../assets/images/refresh.svg';

function generateAccessCode(length = 10) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

export function AddMemberModal({ isOpen, onClose, accessCode: initialCode }) {
  const [accessCode, setAccessCode] = useState(initialCode);

  if (!isOpen) return null;
  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="modal-title modal-title-center">Добавить участника</h2>
        <div className="modal-description">
          <div className="access-code-row">
            <div className="access-code">{accessCode}</div>
            <button className="refresh-code-btn" onClick={() => setAccessCode(generateAccessCode())}>
              <img src={refresh} alt="Обновить код" />
            </button>
          </div>
        </div>
        <button className="modal-close" onClick={onClose}>
            <img src={close} alt="close" />
        </button>
      </div>
    </div>
  );
} 