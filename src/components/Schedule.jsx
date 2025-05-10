import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import "../styles/Schedule.css";
import { GameRegistrationModal } from './GameRegistrationModal';
import Map from '../assets/images/map-black.svg';
import Time from '../assets/images/time-black.svg';
import Cost from '../assets/images/cost-black.svg';

export function Schedule() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  
  const [filters, setFilters] = useState({
    seats: {
      all: true,
      available: true,
      reserve: true,
      full: true
    },
    leagues: {
      all: true,
      open: true,
      club: true
    }
  });

  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  // Обновляем фильтр лиги при изменении URL
  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/open')) {
      setFilters(prev => ({
        ...prev,
        leagues: {
          all: false,
          open: true,
          club: false
        }
      }));
    } else if (path.startsWith('/club')) {
      setFilters(prev => ({
        ...prev,
        leagues: {
          all: false,
          open: false,
          club: true
        }
      }));
    }
  }, [location.pathname]);

  const tournaments = [
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
      hasSeats: true,
      hasReserve: false,
      league: "open"
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
      hasSeats: false,
      hasReserve: true,
      league: "club"
    },
    {
      type: "Открытый турнир",
      date: "5 марта, среда",
      time: "19:30",
      location: {
        name: "Ресторан-особняк «Баязет»",
        address: "набережная реки Фонтанки, 112",
      },
      cost: {
        team: "8000₽ за команду",
        person: "1500₽ с человека",
      },
      hasSeats: false,
      hasReserve: false,
      league: "open"
    },
    {
      type: "Клубный турнир",
      date: "7 марта, пятница",
      time: "20:00",
      location: {
        name: "Ресторан «Лендок»",
        address: "наб. Крюкова канала, 12",
      },
      cost: {
        team: "12000₽ за команду",
        person: "2000₽ с человека",
      },
      hasSeats: true,
      hasReserve: false,
      league: "club"
    },
    {
      type: "Открытый турнир",
      date: "9 марта, воскресенье",
      time: "18:00",
      location: {
        name: "Ресторан-особняк «Баязет»",
        address: "набережная реки Фонтанки, 112",
      },
      cost: {
        team: "8000₽ за команду",
        person: "1500₽ с человека",
      },
      hasSeats: false,
      hasReserve: true,
      league: "open"
    },
    {
      type: "Клубный турнир",
      date: "11 марта, вторник",
      time: "19:30",
      location: {
        name: "Ресторан «Лендок»",
        address: "наб. Крюкова канала, 12",
      },
      cost: {
        team: "12000₽ за команду",
        person: "2000₽ с человека",
      },
      hasSeats: false,
      hasReserve: false,
      league: "club"
    },
    {
      type: "Открытый турнир",
      date: "15 марта, суббота",
      time: "19:00",
      location: {
        name: "Ресторан-особняк «Баязет»",
        address: "набережная реки Фонтанки, 112",
      },
      cost: {
        team: "8000₽ за команду",
        person: "1500₽ с человека",
      },
      hasSeats: true,
      hasReserve: false,
      league: "open"
    },
    {
      type: "Клубный турнир",
      date: "17 марта, понедельник",
      time: "20:00",
      location: {
        name: "Ресторан «Лендок»",
        address: "наб. Крюкова канала, 12",
      },
      cost: {
        team: "12000₽ за команду",
        person: "2000₽ с человека",
      },
      hasSeats: true,
      hasReserve: false,
      league: "club"
    }
  ];

  const handleSeatsFilterChange = (value) => {
    if (value === 'all') {
      const newAllValue = !filters.seats.all;
      if (newAllValue) {
        // Если включаем "Все", то включаем все остальные
        setFilters(prev => ({
          ...prev,
          seats: {
            all: true,
            available: true,
            reserve: true,
            full: true
          }
        }));
      } else {
        // Если выключаем "Все", то оставляем остальные как есть
        setFilters(prev => ({
          ...prev,
          seats: {
            ...prev.seats,
            all: false
          }
        }));
      }
    } else {
      setFilters(prev => {
        const newSeats = {
          ...prev.seats,
          [value]: !prev.seats[value]
        };
        // Проверяем, все ли чекбоксы выбраны
        const allChecked = newSeats.available && newSeats.reserve && newSeats.full;
        return {
          ...prev,
          seats: {
            ...newSeats,
            all: allChecked
          }
        };
      });
    }
  };

  const handleLeagueChange = (value) => {
    if (value === 'all') {
      const newAllValue = !filters.leagues.all;
      if (newAllValue) {
        // Если включаем "Все", то включаем все остальные
        setFilters(prev => ({
          ...prev,
          leagues: {
            all: true,
            open: true,
            club: true
          }
        }));
      } else {
        // Если выключаем "Все", то оставляем остальные как есть
        setFilters(prev => ({
          ...prev,
          leagues: {
            ...prev.leagues,
            all: false
          }
        }));
      }
    } else {
      setFilters(prev => {
        const newLeagues = {
          ...prev.leagues,
          [value]: !prev.leagues[value]
        };
        // Проверяем, все ли чекбоксы выбраны
        const allChecked = newLeagues.open && newLeagues.club;
        return {
          ...prev,
          leagues: {
            ...newLeagues,
            all: allChecked
          }
        };
      });
    }
  };

  const filteredTournaments = tournaments.filter(tournament => {
    // Фильтр по местам
    const seatsMatch = 
      (filters.seats.available && tournament.hasSeats) ||
      (filters.seats.reserve && tournament.hasReserve) ||
      (filters.seats.full && !tournament.hasSeats && !tournament.hasReserve);

    // Фильтр по лигам
    const leagueMatch = 
      (filters.leagues.open && tournament.league === 'open') ||
      (filters.leagues.club && tournament.league === 'club');

    return seatsMatch && leagueMatch;
  });

  const getButtonState = (tournament) => {
    if (tournament.hasSeats) {
      return {
        text: 'Записаться',
        disabled: false,
        className: 'register-button'
      };
    } else if (tournament.hasReserve) {
      return {
        text: 'Записаться в резерв',
        disabled: false,
        className: 'register-button register-button--reserve'
      };
    } else {
      return {
        text: 'Мест нет',
        disabled: true,
        className: 'register-button'
      };
    }
  };

  return (
    <div className="schedule-page">
      <h1 className="schedule-title">Расписание турниров</h1>
      <div className="schedule-content">
        <div className="schedule-filters">
          <div className="filter-section">
            <label className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.seats.all}
                onChange={() => handleSeatsFilterChange('all')}
              />
              <span className="checkmark"></span>
              <span>Все турниры</span>
            </label>
            <label className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.seats.available}
                onChange={() => handleSeatsFilterChange('available')}
              />
              <span className="checkmark"></span>
              <span>Есть места</span>
            </label>
            <label className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.seats.reserve}
                onChange={() => handleSeatsFilterChange('reserve')}
              />
              <span className="checkmark"></span>
              <span>Есть резерв</span>
            </label>
            <label className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.seats.full}
                onChange={() => handleSeatsFilterChange('full')}
              />
              <span className="checkmark"></span>
              <span>Нет мест</span>
            </label>
          </div>

          <div className="filter-section">
            <label className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.leagues.all}
                onChange={() => handleLeagueChange('all')}
              />
              <span className="checkmark"></span>
              <span>Все лиги</span>
            </label>
            <label className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.leagues.open}
                onChange={() => handleLeagueChange('open')}
              />
              <span className="checkmark"></span>
              <span>Открытая лига</span>
            </label>
            <label className="filter-checkbox">
              <input
                type="checkbox"
                checked={filters.leagues.club}
                onChange={() => handleLeagueChange('club')}
              />
              <span className="checkmark"></span>
              <span>Клубная лига</span>
            </label>
          </div>
        </div>

        <div className="tournaments-grid">
          {filteredTournaments.map((tournament, index) => {
            const buttonState = getButtonState(tournament);
            return (
              <div key={index} className="tournament-card">
                <p className="tournament-date">{tournament.date}</p>
                <h3 className="tournament-type">{tournament.type}</h3>
                
                <div className="game-time">
                  <img className="time-icon" src={Map} alt="Time" />
                  <div>
                    <p className="primary-text">{tournament.location.name}</p>
                    <p className="secondary-text">{tournament.location.address}</p>
                  </div>
                </div>

                <div className="game-time">
                  <img className="time-icon" src={Time} alt="Time" />
                  <p className="primary-text">{tournament.time}</p>
                </div>

                <div className="game-cost">
                  <img className="cost-icon" src={Cost} alt="Cost" />
                  <div>
                    <p className="primary-text">{tournament.cost.team}</p>
                    <p className="secondary-text">{tournament.cost.person}</p>
                  </div>
                </div>

                <button 
                  className={`${buttonState.className} button button--black`}
                  disabled={buttonState.disabled}
                  onClick={() => setIsRegistrationModalOpen(true)}
                >
                  {buttonState.text}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <GameRegistrationModal 
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
      />
    </div>
  );
} 