import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { IMaskInput } from 'react-imask';
import '../styles/Registration.css';
import '../styles/Inputs.css';
import { PersonalDataModal } from './PersonalDataModal';

export function Registration() {
  const navigate = useNavigate();
  const location = useLocation();
  const [useRealName, setUseRealName] = useState(true);
  const [useNickname, setUseNickname] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    teamName: ''
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [touched, setTouched] = useState({});

  const getLeague = () => {
    if (location.pathname.startsWith('/club')) {
      return 'club';
    }
    return 'open';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value || ''
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handlePhoneFocus = (e) => {
    if (!formData.phone) {
      setFormData(prev => ({ ...prev, phone: '+7 ' }));
    }
  };

  const isValid = {
    firstName: formData.firstName.trim().length > 0,
    lastName: formData.lastName.trim().length > 0,
    nickname: formData.nickname.trim().length > 0,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
    phone: formData.phone && formData.phone.replace(/\D/g, '').length === 11, // +7 и 10 цифр
    password: formData.password.length >= 6,
    confirmPassword: formData.confirmPassword === formData.password && formData.confirmPassword.length >= 6
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Регистрация:', {
      ...formData,
      displayName: useRealName ? `${formData.firstName} ${formData.lastName}` : formData.nickname
    });
    navigate(`/${getLeague()}/profile`);
  };

  return (
    <div className="registration-page">
      <div className="registration-container">
        <h1 className="registration-title">Регистрация</h1>
        <div className="login-link">
            Уже есть аккаунт? <Link to={`/${getLeague()}/login`}>Войти</Link>
        </div>
        <form className="registration-form" onSubmit={handleSubmit}>
          {useRealName ? (
            <>
              <div className="form-group required">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Имя*"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`input${touched.firstName ? (isValid.firstName ? ' input--valid' : ' input--invalid') : ''}`}
                  required
                />
              </div>

              <div className="form-group required">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Фамилия*"
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`input${touched.lastName ? (isValid.lastName ? ' input--valid' : ' input--invalid') : ''}`}
                  required
                />
              </div>
            </>
          ) : (
            <div className="form-group required">
              <input
                type="text"
                name="nickname"
                placeholder="Псевдоним*"
                value={formData.nickname}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`input${touched.nickname ? (isValid.nickname ? ' input--valid' : ' input--invalid') : ''}`}
                required
              />
            </div>
          )}

          <div className="form-group required">
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`input${touched.email ? (isValid.email ? ' input--valid' : ' input--invalid') : ''}`}
              required
            />
          </div>

          <div className="form-group required">
            <IMaskInput
              mask="+7 (000) 000-00-00"
              value={formData.phone || ''}
              onAccept={value => setFormData(prev => ({ ...prev, phone: value }))}
              onBlur={handleBlur}
              onFocus={handlePhoneFocus}
              name="phone"
              type="tel"
              placeholder="Телефон"
              className={`input${touched.phone ? (isValid.phone ? ' input--valid' : ' input--invalid') : ''}`}
              required
            />
          </div>

          <div className="form-group required">
            <input
              type="password"
              name="password"
              placeholder="Пароль*"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`input${touched.password ? (isValid.password ? ' input--valid' : ' input--invalid') : ''}`}
              required
            />
          </div>

          <div className="form-group required">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Подтвердите пароль*"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`input${touched.confirmPassword ? (isValid.confirmPassword ? ' input--valid' : ' input--invalid') : ''}`}
              required
            />
          </div>

          <div className="form-group-switch">
            <label className="checkbox">
              <input
                type="checkbox"
                className="switch-input"
                required
                defaultChecked={true}
              />
              <span className="checkmark"></span>
              <span className="switch-text">
                Я даю согласие на сбор, хранение и обработку моих персональных данных в соответствии с условиями, предусмотренными <button type="button" className="personal-link" onClick={() => setModalOpen(true)}>политикой конфиденциальности</button>*
              </span>
            </label>
          </div>

          <div className="form-group-switch">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={useRealName}
                onChange={(e) => setUseRealName(e.target.checked)}
                className="switch-input"
              />
              <span className="checkmark"></span>
              <span className="switch-text">Я даю согласие на озвучивание моих персональных данных в процессе игры в присутствии других участников</span>
            </label>
          </div>

          <div className="form-group-switch">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={useRealName}
                onChange={(e) => setUseRealName(e.target.checked)}
                className="switch-input"
              />
              <span className="checkmark"></span>
              <span className="switch-text">Я даю согласие на публикацию моих персональных данных в общедоступных рейтингах каждого игрового сезона</span>
            </label>
          </div>

          <button type="submit" className="button button--white">
            Зарегистрироваться
          </button>
        </form>
        <PersonalDataModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </div>
  );
} 