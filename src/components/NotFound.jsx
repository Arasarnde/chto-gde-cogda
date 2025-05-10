import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ErrorPages.css';

export function NotFound() {
  return (
    <div className="error-wrapper">
      <div className="error-page">
        <h1>404</h1>
        <h2>Страница не найдена</h2>
        <p>Извините, запрашиваемая страница не существует</p>
        <Link to="/" className="button button--white">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
} 