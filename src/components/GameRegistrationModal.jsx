import React, { useState, useEffect } from 'react';
import '../styles/Modal.css';
import close from '../assets/images/close-black.svg';
import closeWhite from '../assets/images/close.svg';
import { IMaskInput } from 'react-imask';

export function GameRegistrationModal({ isOpen, onClose }) {
  const [hasTeam, setHasTeam] = useState(true);
  const [teamName, setTeamName] = useState('');
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [showTeamsDropdown, setShowTeamsDropdown] = useState(false);
  const [showPlayersDropdown, setShowPlayersDropdown] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Загрузка списка команд при открытии модального окна
  useEffect(() => {
    if (isOpen) {
      // Здесь будет запрос к API для получения списка команд
      // Временные данные для примера
      const mockTeams = [
        {
          id: 1,
          name: 'Команда 1',
          players: ['Игрок 1', 'Игрок 2', 'Игрок 3']
        },
        {
          id: 2,
          name: 'Команда 2',
          players: ['Игрок 4', 'Игрок 5', 'Игрок 6']
        }
      ];
      setTeams(mockTeams);
    }
  }, [isOpen]);

  const handleTeamSelect = (team) => {
    setSelectedTeam(team);
    setTeamName(team.name);
    setSelectedPlayers([]);
    setShowTeamsDropdown(false);
  };

  const handlePlayerSelect = (player) => {
    if (!selectedPlayers.includes(player)) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
    setShowPlayersDropdown(false);
  };

  const handleRemovePlayer = (playerToRemove) => {
    setSelectedPlayers(selectedPlayers.filter(player => player !== playerToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowPlayersDropdown(false);
      onClose();
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.teams-dropdown')) {
        setShowTeamsDropdown(false);
      }
      if (!e.target.closest('.players-dropdown')) {
        setShowPlayersDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <img src={close} alt="Закрыть" />
        </button>
        
        <h2 className="modal-title">Запись на игру</h2>
        
        <div className="modal-description">
          <p>Вы можете записать на игру свою команду, предварительно собрав её в личном кабинете, или записаться индивидуально — в этом случае вам подберут команду на месте.</p>
          <p>Запись команды: заявку подаёт только капитан. В составе должно быть 6 игроков (иногда допускается от 4, но это требует одобрения).</p>
          <p>Оплата производится офлайн, на месте (картой или наличными).</p>
          <p>Зрители и дети могут посещать мероприятие бесплатно.</p>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group-switch">
            <label className="checkbox checkbox--black">
              <input
                type="checkbox"
                checked={!hasTeam}
                onChange={() => {
                  setHasTeam(!hasTeam);
                  setSelectedTeam(null);
                  setTeamName('');
                  setSelectedPlayers([]);
                }}
                className="switch-input"
              />
              <span className="checkmark"></span>
              <span className="switch-text">У меня нет команды</span>
            </label>
          </div>

          {hasTeam ? (
            <>
              <div className="form-group-modal">
                <div className="teams-dropdown">
                  <input
                    className="input input--black"
                    type="text"
                    value={teamName}
                    placeholder="Выберите команду"
                    readOnly
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowTeamsDropdown(!showTeamsDropdown);
                      setShowPlayersDropdown(false);
                    }}
                  />
                  {showTeamsDropdown && (
                    <div className="dropdown-content teams-list">
                      {teams.map(team => (
                        <div
                          key={team.id}
                          className="dropdown-item"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTeamSelect(team);
                          }}
                        >
                          {team.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {selectedTeam && (
                <div className="form-group-modal">
                  <div className="players-dropdown">
                    <input
                      className="input input--black"
                      type="text"
                      placeholder="Выберите игроков"
                      readOnly
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowPlayersDropdown(!showPlayersDropdown);
                        setShowTeamsDropdown(false);
                      }}
                    />
                    {showPlayersDropdown && (
                      <div className="dropdown-content players-list">
                        {selectedTeam.players.map((player, index) => (
                          <div
                            key={index}
                            className="dropdown-item"
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePlayerSelect(player);
                            }}
                          >
                            {player}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="selected-players">
                    {selectedPlayers.map((player, index) => (
                      <div key={index} className="player-tag">
                        {player}
                        <button
                          type="button"
                          className="remove-player"
                          onClick={() => handleRemovePlayer(player)}
                        >
                          <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="39.8694" height="2.58558" transform="matrix(-0.713702 0.700449 0.597587 0.801804 28.4551 0.867188)" fill="#FBFBFB"/>
                          <rect width="39.8694" height="2.58558" transform="matrix(-0.713702 -0.700449 0.597587 -0.801804 28.4551 30.8672)" fill="#FBFBFB"/>
                          </svg>

                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="form-group-modal">
                <input
                  className="input input--black"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Имя"
                  required
                />
              </div>
              <div className="form-group-modal">
                <input
                  className="input input--black"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Фамилия"
                  required
                />
              </div>
            </>
          )}

          <div className="form-group-modal">
            <IMaskInput
              className="input input--black"
              type="tel"
              mask={'+7 (000) 000-00-00'}
              value={phone || ''}
              onAccept={value => setPhone(value)}
              placeholder="Контактный телефон"
              required
            />
          </div>

          <div className="form-group-modal">
            <textarea
              className="input input--black"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Комментарий"
            />
          </div>

          <button type="submit" className="button button--black modal-button">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
} 