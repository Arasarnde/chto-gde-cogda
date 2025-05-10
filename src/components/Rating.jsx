import React, { useState } from 'react';
import '../styles/Rating.css';

export function Rating() {
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(10);

  // Временные данные для примера
  const players = [
    { id: 1, name: "Человек", team: "Раз два три четыре пять знатоков", games: 10, points: 52 },
    { id: 2, name: "Человек1", team: "Раз два три четыре пять знатоков", games: 10, points: 21 },
    { id: 3, name: "Человек2", team: "Раз два три четыре пять знатоков", games: 10, points: 65 },
    { id: 4, name: "Человек3", team: "Раз два три четыре пять знатоков", games: 10, points: 33 },
    { id: 5, name: "Человек4", team: "Раз два три четыре пять знатоков", games: 10, points: 44 },
    { id: 6, name: "Человек5  ", team: "Раз два три четыре пять знатоков", games: 10, points: 522 },
    { id: 7, name: "Человек6  ", team: "Раз два три четыре пять знатоков", games: 10, points: 12 },
    { id: 8, name: "Человек7  ", team: "Раз два три четыре пять знатоков", games: 10, points: 52 },
    { id: 9, name: "Человек8  ", team: "Раз два три четыре пять знатоков", games: 10, points: 52 },
    { id: 10, name: "Человек9  ", team: "Раз два три четыре пять знатоков", games: 10, points: 52 },
    { id: 11, name: "Человек10  ", team: "Раз два три четыре пять знатоков", games: 10, points: 52 },
    { id: 12, name: "Человек11  ", team: "Раз два три четыре пять знатоков", games: 10, points: 52 },
    { id: 13, name: "Человек12  ", team: "Раз два три четыре пять знатоков", games: 10, points: 52 },
    { id: 14, name: "Человек13  ", team: "Раз два три четыре пять знатоков", games: 10, points: 52 },
    { id: 15, name: "Человек14  ", team: "Раз два три четыре пять знатоков", games: 10, points: 52 },
    { id: 16, name: "Человек15  ", team: "Раз два три четыре пять знатоков", games: 10, points: 52 }, 
    { id: 17, name: "Человек16  ", team: "Раз два три четыре пять знатоков", games: 10, points: 52 },
    { id: 18, name: "Человек17  ", team: "Раз два три четыре пять знатоков", games: 10, points: 52 },
    { id: 19, name: "Человек18  ", team: "Раз два три четыре пять знатоков", games: 10, points: 52 },
    { id: 20, name: "Человек19  ", team: "Раз два три четыре пять знатоков", games: 10, points: 52 },
    { id: 21, name: "Человек20  ", team: "Раз два три четыре пять знатоков", games: 10, points: 52 },
    { id: 22, name: "Человек21  ", team: "Раз два три четыре пять знатоков", games: 10, points: 52 }, 
    { id: 23, name: "Человек22  ", team: "Раз два три четыре пять знатоков", games: 10, points: 52 }, 
    { id: 24, name: "Человек23  ", team: "Раз два три четыре пять знатоков", games: 10, points: 52 }, 
    { id: 25, name: "Человек24  ", team: "Раз два три четыре пять знатоков", games: 10, points: 52 }, 
    { id: 26, name: "Человек25  ", team: "Раз два три четыре пять знатоков", games: 10, points: 52 }, 
    { id: 27, name: "Человек26  ", team: "Раз два три четыре пять знатоков", games: 10, points: 52 }, 
    { id: 28, name: "Человек27  ", team: "Раз два три четыре пять знатоков", games: 10, points: 52 }, 
    { id: 29, name: "Человек28  ", team: "Раз два три четыре пять знатоков", games: 10, points: 52 }, 
    { id: 30, name: "Человек29  ", team: "Раз два три четыре пять знатоков", games: 10, points: 52 }, 
  ];

  const filteredPlayers = players
    .filter(player =>
      player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.team.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => b.points - a.points);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 10);
  };

  return (
    <div className="rating-page">
      <h1 className="rating-title">Рейтинг игроков</h1>
      
      <div className="rating-controls">
        <div className="rating-search">
          <input
            type="text"
            placeholder="Игрок"
            value={searchQuery}
            className="input"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="button button--white">Найти</button>
        </div>
      </div>

      <div className="rating-table">
        <table>
          <thead>
            <tr>
              <th>Место</th>
              <th>Игрок</th>
              <th>Команда</th>
              <th>Игры</th>
              <th>Баллы</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlayers.slice(0, visibleCount).map((player, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{player.name}</td>
                <td>{player.team}</td>
                <td>{player.games}</td>
                <td>{player.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {visibleCount < filteredPlayers.length && (
        <button className="button button--outlined" onClick={handleShowMore}>
          Показать еще
        </button>
      )}
    </div>
  );
} 