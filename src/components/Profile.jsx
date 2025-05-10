import React, { useState } from 'react';
import { AddTeamModal } from './AddTeamModal';
import { AddMemberModal } from './AddMemberModal';
import { TournamentCard } from './TournamentCard';
import { GameRegistrationModal } from './GameRegistrationModal';
import close from '../assets/images/close-black.svg';

import '../styles/Profile.css';

function generateAccessCode(length = 6) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

export function Profile() {
  const [activeTab, setActiveTab] = useState('teams');
  const [isAddTeamModalOpen, setIsAddTeamModalOpen] = useState(false);
  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);
  const [accessCode, setAccessCode] = useState(generateAccessCode());
  const [isEditGameModalOpen, setIsEditGameModalOpen] = useState(false);
  const [editGameData, setEditGameData] = useState(null);
  const [isResultsModalOpen, setIsResultsModalOpen] = useState(false);
  const [resultsData, setResultsData] = useState([]);
  const [resultsTitle, setResultsTitle] = useState('');
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Мартынова Елена',
    email: 'elena99@gmail.com',
    phone: '+7(960)777-56-48',
    avatar: null
  });
  const [profileForm, setProfileForm] = useState(userData);
  const [avatarPreview, setAvatarPreview] = useState(userData.avatar);

  const [teams, setTeams] = useState([
    {
      name: 'Раз два три четыре знатока',
      status: 'игрок',
      members: ['Один знаток', 'Второй Знаток', 'третий Знаток']
    },
    {
      name: 'Раз два три четыре знатока',
      status: 'капитан',
      members: ['Один знаток', 'Второй Знаток', 'третий Знаток']
    },
    {
      name: 'Раз два три четыре знатока',
      status: 'капитан',
      members: [
        'Елена Мартынова',
        'Елена Мартынова',
        'Елена Мартынова',
        'Елена Мартынова',
        'Елена Мартынова'
      ]
    }
  ]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editMembers, setEditMembers] = useState([]);

  // Начать редактирование
  const handleEditTeam = (index) => {
    setEditingIndex(index);
    setEditMembers(teams[index].members);
  };

  // Удаление участника (только в режиме редактирования)
  const handleRemoveMember = (memberIdx) => {
    setEditMembers(prev => prev.filter((_, i) => i !== memberIdx));
  };

  // Сохранить изменения
  const handleSaveChanges = () => {
    setTeams(prev => prev.map((team, idx) =>
      idx === editingIndex ? { ...team, members: editMembers } : team
    ));
    setEditingIndex(null);
    setEditMembers([]);
  };

  // Отмена изменений
  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditMembers([]);
  };

  // Покинуть команду
  const [isLeaveTeamModalOpen, setIsLeaveTeamModalOpen] = useState(false);
  const [teamToLeave, setTeamToLeave] = useState(null);

  const handleLeaveTeam = (teamIdx) => {
    setTeamToLeave(teamIdx);
    setIsLeaveTeamModalOpen(true);
  };

  const handleConfirmLeaveTeam = () => {
    setTeams(prev => prev.filter((_, idx) => idx !== teamToLeave));
    setIsLeaveTeamModalOpen(false);
    setTeamToLeave(null);
  };

  const handleCancelLeaveTeam = () => {
    setIsLeaveTeamModalOpen(false);
    setTeamToLeave(null);
  };

  // Открыть модалку и сгенерировать код
  const handleOpenAddMemberModal = () => {
    setAccessCode(generateAccessCode());
    setIsAddMemberModalOpen(true);
  };

  // Пример данных для игр
  const upcomingGames = [
    {
      type: "Открытый турнир",
      date: "1 марта, суббота",
      time: "19:30",
      location: {
        name: "Ресторан-особняк «Баязет»",
        address: "набережная реки Фонтанки, 112",
      },
      cost: {
        team: "8000₽ за команду",
        person: "1500₽ с человека",
      },
      userStatus: 'Капитан',
      regStatus: 'Заявка подтверждена',
      teamName: 'Раз два три четыре знатока',
      teamMembers: ['Один знаток', 'Второй Знаток', 'третий Знаток'],
    },
    {
      type: "Клубный турнир",
      date: "3 марта, понедельник",
      time: "20:00",
      location: {
        name: "Ресторан-особняк «Баязет»",
        address: "набережная реки Фонтанки, 112",
      },
      cost: {
        team: "12000₽ за команду",
        person: "2000₽ с человека",
      },
      userStatus: 'Игрок',
      regStatus: 'В ожидании',
      teamName: 'Знатоки 2',
      teamMembers: ['Петя', 'Вася', 'Маша'],
    }
  ];

  const archiveGames = [
    {
      type: "Открытый турнир",
      date: "15 февраля, четверг",
      time: "19:00",
      location: {
        name: "Ресторан-особняк «Баязет»",
        address: "набережная реки Фонтанки, 112",
      },
      results: [
        { place: 1, team: 'Знатоки', members: ['Иван', 'Петр', 'Сергей'], points: 12 },
        { place: 2, team: 'Мудрецы', members: ['Анна', 'Ольга', 'Дмитрий'], points: 10 },
        { place: 3, team: 'Эрудиты', members: ['Мария', 'Алексей', 'Виктор'], points: 8 },
      ]
    },
    {
      type: "Клубный турнир",
      date: "10 февраля, суббота",
      time: "20:00",
      location: {
        name: "Ресторан «Лендок»",
        address: "наб. Крюкова канала, 12",
      },
      results: [
        { place: 1, team: 'Клубные', members: ['Владимир', 'Екатерина', 'Светлана'], points: 14 },
        { place: 2, team: 'Знатоки', members: ['Иван', 'Петр', 'Сергей'], points: 12 },
        { place: 3, team: 'Мудрецы', members: ['Анна', 'Ольга', 'Дмитрий'], points: 9 },
      ]
    }
  ];

  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [gameToRemove, setGameToRemove] = useState(null);

  // Обработчик отказа от участия
  const handleCancelParticipation = (gameIdx) => {
    setGameToRemove(gameIdx);
    setConfirmModalOpen(true);
  };

  const handleConfirmRemove = () => {
    setUpcomingGames(prev => prev.filter((_, idx) => idx !== gameToRemove));
    setConfirmModalOpen(false);
    setGameToRemove(null);
  };

  const handleCancelRemove = () => {
    setConfirmModalOpen(false);
    setGameToRemove(null);
  };

  // Обработчик изменения заявки
  const handleEditGame = (game) => {
    setEditGameData(game);
    setIsEditGameModalOpen(true);
  };

  const handleShowResults = (game) => {
    setResultsData(game.results);
    setResultsTitle(`${game.type} — ${game.date}`);
    setIsResultsModalOpen(true);
  };

  const handleProfileChange = (e) => {
    setProfileForm({ ...profileForm, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
        setProfileForm(prev => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileSave = () => {
    setUserData(profileForm);
    setIsEditProfileModalOpen(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-info">
          <div className="profile-avatar">
            {userData.avatar ? (
              <img src={userData.avatar} alt="avatar" />
            ) : null}
          </div>
          <div className="profile-details">
            <h1 className="profile-name">{userData.name}</h1>
            <p className="profile-contact">{userData.email}</p>
            <p className="profile-contact">{userData.phone}</p>
          </div>
        </div>
        <div className="profile-actions">
          <button className="button button--white" onClick={() => setIsEditProfileModalOpen(true)}>
            Редактировать профиль
          </button>
          <button 
            className="button button--white"
            onClick={() => setIsAddTeamModalOpen(true)}
          >
            Добавить команду
          </button>
        </div>
      </div>

      <div className="profile-tabs">
        <button 
          className={`tab-button ${activeTab === 'teams' ? 'active' : ''}`}
          onClick={() => setActiveTab('teams')}
        >
          Команды
        </button>
        <button 
          className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Предстоящие игры
        </button>
        <button 
          className={`tab-button ${activeTab === 'archive' ? 'active' : ''}`}
          onClick={() => setActiveTab('archive')}
        >
          Архив игр
        </button>
      </div>

      {activeTab === 'teams' && (
        <div className="teams-grid">
          {teams.map((team, index) => {
            const isEditing = editingIndex === index;

            if (team.status === 'капитан') {
              return (
                <div key={index} className="team-card">
                  <h3 className="team-name">{team.name}</h3>
                  <p className="team-status">Статус: Капитан</p>
                  <div className="team-members">
                    <p className="members">Участники:</p>
                    {isEditing ? (
                      <>
                        <div className="selected-players players-list">
                        {editMembers.map((member, idx) => (
                          <div key={idx} className="player-tag">
                            <span>{member}</span>
                            <button
                              className="remove-player"
                              onClick={() => handleRemoveMember(idx)}
                            >
                              <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="39.8694" height="2.58558" transform="matrix(-0.713702 0.700449 0.597587 0.801804 28.4551 0.867188)" fill="#FBFBFB"/>
                              <rect width="39.8694" height="2.58558" transform="matrix(-0.713702 -0.700449 0.597587 -0.801804 28.4551 30.8672)" fill="#FBFBFB"/>
                              </svg>
                            </button>
                          </div>
                        ))}
                        </div>
                        <button className="button add-member" onClick={handleOpenAddMemberModal}>
                          Добавить участника
                        </button>
                        <div className="team-actions">
                          <button className="button button--white save-changes" onClick={handleSaveChanges}>Сохранить изменения</button>
                          <button className="button button--outline-black cancel" onClick={handleCancelEdit}>Отмена</button>
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="members-list">{team.members.join(', ')}</p>
                        <button className="button button--white edit-team" onClick={() => handleEditTeam(index)}>Изменить команду</button>
                      </>
                    )}
                  </div>
                </div>
              );
            }

            if (team.status === 'игрок') {
              return (
                <div key={index} className="team-card">
                  <h3 className="team-name">{team.name}</h3>
                  <p className="team-status">Статус: Игрок</p>
                  <div className="team-members">
                    <p className="members">Участники:</p>
                    <p className="members-list">{team.members.join(', ')}</p>
                    <button
                      className="button button--white leave-team"
                      onClick={() => handleLeaveTeam(index)}
                    >Покинуть команду</button>
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
      )}

      {activeTab === 'upcoming' && (
        <div className="teams-grid">
          {upcomingGames.map((game, idx) => (
            <TournamentCard
              key={idx}
              tournament={game}
              userStatus={game.userStatus}
              regStatus={game.regStatus}
              teamName={game.teamName}
              teamMembers={game.teamMembers}
              onCancel={() => handleCancelParticipation(idx)}
              onEdit={() => handleEditGame(game)}
              isDarkTheme={true}
            />
          ))}
        </div>
      )}

      {activeTab === 'archive' && (
        <div className="teams-grid">
          {archiveGames.map((game, idx) => (
            <TournamentCard
              key={idx}
              tournament={game}
              isArchive={true}
              onShowResults={() => handleShowResults(game)}
              isDarkTheme={true}
            />
          ))}
        </div>
      )}

      <AddMemberModal
        isOpen={isAddMemberModalOpen}
        onClose={() => setIsAddMemberModalOpen(false)}
        accessCode={accessCode}
      />

      <AddTeamModal 
        isOpen={isAddTeamModalOpen}
        onClose={() => setIsAddTeamModalOpen(false)}
      />

      {/* Модалка изменения заявки (с уже введёнными данными) */}
      <GameRegistrationModal
        isOpen={isEditGameModalOpen}
        onClose={() => setIsEditGameModalOpen(false)}
        initialData={editGameData}
      />

      {/* Модалка подтверждения отказа */}
      {confirmModalOpen && (
        <div className="modal-overlay" onClick={handleCancelRemove}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCancelRemove}>
              <img src={close} alt="Закрыть" />
            </button>
            <h2 className="modal-title modal-title-center">Отказаться от участия?</h2>
            <div className="modal-buttons">
              <button className="button button--black modal-button" onClick={e => { e.stopPropagation(); handleConfirmRemove(); }}>Да</button>
              <button className="button button--outlined-black modal-button" onClick={handleCancelRemove}>Нет</button>
            </div>
          </div>
        </div>
      )}

      {/* Модалка результатов */}
      {isResultsModalOpen && (
        <div className="modal-overlay" onClick={() => setIsResultsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsResultsModalOpen(false)}>
              <img src={close} alt="Закрыть" />
            </button>
            <h2 className="modal-title modal-title-center">Результаты<br />{resultsTitle}</h2>
            <div className="modal-description">
              <table className="results-table">
                <thead>
                  <tr>
                    <th>Место</th>
                    <th>Команда</th>
                    <th>Состав</th>
                    <th>Очки</th>
                  </tr>
                </thead>
                <tbody>
                  {resultsData.sort((a, b) => a.place - b.place).map((row, i) => (
                    <tr key={i}>
                      <td>{row.place}</td>
                      <td>{row.team}</td>
                      <td>{row.members.join(', ')}</td>
                      <td>{row.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Модалка редактирования профиля */}
      {isEditProfileModalOpen && (
        <div className="modal-overlay" onClick={() => setIsEditProfileModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsEditProfileModalOpen(false)}>
              <img src={close} alt="Закрыть" />
            </button>
            <h2 className="modal-title modal-title-center">Редактировать профиль</h2>
            <div className="modal-form">
              <div className="form-group">
                <div className="file-upload">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="file-upload-input"
                    id="avatar-upload"
                  />
                  <label htmlFor="avatar-upload" className="file-upload-label">
                    {avatarPreview ? (
                      <div className="avatar-preview">
                        <img src={avatarPreview} alt="avatar preview" />
                        <div className="avatar-overlay">
                          <span>Изменить фото</span>
                        </div>
                      </div>
                    ) : (
                      <div className="upload-placeholder">
                        <span>Загрузить фото</span>
                      </div>
                    )}
                  </label>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={profileForm.name}
                  onChange={handleProfileChange}
                  className="input input--black"
                  placeholder="Имя"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={profileForm.email}
                  onChange={handleProfileChange}
                  className="input input--black"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="phone"
                  value={profileForm.phone}
                  onChange={handleProfileChange}
                  className="input input--black"
                  placeholder="Телефон"
                />
              </div>
            </div>
            <div className="modal-buttons modal-buttons-profile">
              <button className="button button--black modal-button" onClick={handleProfileSave}>Сохранить</button>
              <button className="button button--outlined-black modal-button" onClick={() => setIsEditProfileModalOpen(false)}>Отмена</button>
            </div>
          </div>
        </div>
      )}

      {/* Модалка подтверждения выхода из команды */}
      {isLeaveTeamModalOpen && (
        <div className="modal-overlay" onClick={handleCancelLeaveTeam}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCancelLeaveTeam}>
              <img src={close} alt="Закрыть" />
            </button>
            <h2 className="modal-title modal-title-center">Покинуть команду?</h2>
            <div className="modal-buttons">
              <button className="button button--black modal-button" onClick={e => { e.stopPropagation(); handleConfirmLeaveTeam(); }}>Да</button>
              <button className="button button--outlined-black modal-button" onClick={handleCancelLeaveTeam}>Нет</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 