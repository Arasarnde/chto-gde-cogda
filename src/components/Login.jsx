import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ForgotPassword } from './ForgotPassword';
import '../styles/Login.css';

export function Login() {
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const getLeague = () => {
    if (location.pathname.startsWith('/club')) {
      return 'club';
    }
    return 'open';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика авторизации
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Вход</h1>
        <div className="login-footer">
          <p>Нет аккаунта?</p>
          <Link to={`/${getLeague()}/registration`} className="register-link">
            Зарегистрироваться
          </Link>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group required">
            <input
              type="email"
              placeholder="Email"
              value={email}
              className="input"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group required">
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              className="input"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button 
              type="button" 
              className="forgot-password-button"
              onClick={() => setIsForgotPasswordOpen(true)}
            >
              Забыли пароль?
            </button>
          </div>

          <button type="submit" className="button button--white">
            Войти
          </button>
        </form>

      </div>

      <ForgotPassword 
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
      />
    </div>
  );
} 