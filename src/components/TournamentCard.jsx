import React from 'react';
import MapBlack from '../assets/images/map-black.svg';
import MapWhite from '../assets/images/map.svg';
import TimeBlack from '../assets/images/time-black.svg';
import TimeWhite from '../assets/images/time.svg';
import CostBlack from '../assets/images/cost-black.svg';
import CostWhite from '../assets/images/cost.svg';
import '../styles/Schedule.css';
import '../styles/Profile.css';

export function TournamentCard({ tournament, button, onButtonClick, userStatus, regStatus, teamName, teamMembers, onEdit, onCancel, isArchive, onShowResults, isDarkTheme }) {
  const mapIcon = isDarkTheme ? MapWhite : MapBlack;
  const timeIcon = isDarkTheme ? TimeWhite : TimeBlack;
  const costIcon = isDarkTheme ? CostWhite : CostBlack;

  return (
    <div className={`tournament-card ${isDarkTheme ? 'dark-theme' : ''}`}>
      <p className="tournament-date">{tournament.date}</p>
      <h3 className="tournament-type">{tournament.type}</h3>
      <div className="game-time">
        <img className="time-icon" src={mapIcon} alt="Map" />
        <div>
          <p className="primary-text">{tournament.location.name}</p>
          <p className="secondary-text">{tournament.location.address}</p>
        </div>
      </div>
      <div className="game-time">
        <img className="time-icon" src={timeIcon} alt="Time" />
        <p className="primary-text">{tournament.time}</p>
      </div>
      {!isArchive && (
        <div className="game-cost">
          <img className="cost-icon" src={costIcon} alt="Cost" />
          <div>
            <p className="primary-text">{tournament.cost.team}</p>
            <p className="secondary-text">{tournament.cost.person}</p>
          </div>
        </div>
      )}
      {userStatus && (
        <div className="tournament-user-status">Статус: {userStatus}</div>
      )}
      {regStatus && (
        <div className="tournament-reg-status">Регистрация: {regStatus}</div>
      )}
      {teamName && (
        <div className="tournament-team-name">Команда: {teamName}</div>
      )}
      {teamMembers && teamMembers.length > 0 && (
        <div className="tournament-team-members">
          <span>Состав: </span>
          <span>{teamMembers.join(', ')}</span>
        </div>
      )}
      {userStatus === 'Капитан' && !isArchive && (
        <div className="tournament-actions">
          <button className={`button ${isDarkTheme ? 'button--white' : 'button--outlined'}`} onClick={onCancel}>Отказаться от участия</button>
          <button className={`button ${isDarkTheme ? 'button--white' : 'button--black'}`} onClick={onEdit}>Изменить заявку</button>
        </div>
      )}
      {button && !isArchive && (
        <button 
          className={`${button.className} button ${isDarkTheme ? 'button--white' : 'button--black'}`}
          disabled={button.disabled}
          onClick={onButtonClick}
        >
          {button.text}
        </button>
      )}
      {isArchive && (
        <button className={`button ${isDarkTheme ? 'button--white' : 'button--black'}`} onClick={onShowResults} style={{marginTop: 20}}>
          Посмотреть результаты
        </button>
      )}
    </div>
  );
} 