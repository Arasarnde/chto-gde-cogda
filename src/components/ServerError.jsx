import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ErrorPages.css';

export function ServerError() {
  return (
    <div className="error-wrapper">
      <div className="error-page">
        <h1>500</h1>
        <h2>Внутренняя ошибка сервера</h2>
        <p>Извините, произошла непредвиденная ошибка. Мы уже работаем над её устранением</p>
        <Link to="/" className="button button--white">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
} 