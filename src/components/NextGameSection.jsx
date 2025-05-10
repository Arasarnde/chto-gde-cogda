//import { Button } from "@/components/ui/button";
import "../styles/NextGame.css";
import { useEffect, useRef, useState } from "react";
import { GameRegistrationModal } from './GameRegistrationModal';
import Map from '../assets/images/map-black.svg';
import Time from '../assets/images/time-black.svg';
import Cost from '../assets/images/cost-black.svg';
import { Link, useLocation } from 'react-router-dom';

export function NextGameSection() {
  const location = useLocation();
  const league = location.pathname.startsWith('/club') ? 'club' : 'open';
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  useEffect(() => {
    // Координаты Баязета
    const coordinates = [59.920415, 30.314988];
    
    // Функция проверки готовности DOM-элемента
    const isElementReady = (element) => {
      return element && element.offsetWidth > 0 && element.offsetHeight > 0;
    };

    // Функция инициализации карты
    const initMap = () => {
      if (!mapRef.current || !window.ymaps) return;

      // Проверяем, готов ли DOM-элемент
      if (!isElementReady(mapRef.current)) {
        // Если элемент не готов, пробуем снова через 100мс
        setTimeout(initMap, 100);
        return;
      }

      window.ymaps.ready(() => {
        try {
          // Если карта уже существует, удаляем её
          if (mapInstanceRef.current) {
            mapInstanceRef.current.destroy();
          }

          // Создаем новую карту
          const map = new window.ymaps.Map(mapRef.current, {
            center: coordinates,
            zoom: 15,
            controls: ['zoomControl'],
            type: 'yandex#map'
          }, {
            restrictMapArea: false
          });

          // Сохраняем экземпляр карты
          mapInstanceRef.current = map;

          // Применяем темную тему
          map.panes.get('ground').getElement().style.filter = 'invert(0%)';
          
          // Добавляем метку на карту с расширенной информацией
          const placemark = new window.ymaps.Placemark(coordinates, {
            balloonContentHeader: 'Ресторан-особняк «Баязет»',
            balloonContentBody: 'набережная реки Фонтанки, 112',
            balloonContentFooter: `<a href="https://yandex.ru/maps/?pt=${coordinates[1]},${coordinates[0]}&z=17&l=map" target="_blank">Построить маршрут</a>`,
            hintContent: 'Ресторан-особняк «Баязет»'
          }, {
            preset: 'islands#redDotIcon'
          });

          map.geoObjects.add(placemark);
          
          // Открываем балун при загрузке карты
          placemark.balloon.open();
        } catch (error) {
          console.error('Ошибка при инициализации карты:', error);
        }
      });
    };

    // Проверяем, загружен ли скрипт Яндекс.Карт
    if (window.ymaps) {
      initMap();
    } else {
      // Если скрипт еще не загружен, ждем его загрузки
      const checkYmaps = setInterval(() => {
        if (window.ymaps) {
          clearInterval(checkYmaps);
          initMap();
        }
      }, 100);

      // Очищаем интервал через 10 секунд, если скрипт так и не загрузился
      setTimeout(() => clearInterval(checkYmaps), 10000);
    }

    // Очистка при размонтировании
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="next-game-section">
      <h2 className="section-title">Ближайшая игра</h2>
      <div className="game-details">
        <div className="game-info">
          <h3 className="game-type">Открытый турнир</h3>
          <p className="game-date">1 марта, суббота</p>
          <div className="game-location">
            <img className="location-icon" src={Map} alt="Map" />
            <div>
              <p className="primary-text-game">Ресторан-особняк «Баязет»</p>
              <p className="secondary-text-game">набережная реки Фонтанки, 112</p>
            </div>
          </div>
          <div className="game-time">
            <img className="time-icon" src={Time} alt="Time" />
            <p className="primary-text-game">19:30</p>
          </div>
          <div className="game-cost">
            <img className="cost-icon" src={Cost} alt="Cost" />
            <div>
              <p className="primary-text-game">8000₽ за команду</p>
              <p className="secondary-text-game">1500₽ с человека</p>
            </div>
          </div>
          <button 
            className="register-button-game button button--black"
            onClick={() => setIsRegistrationModalOpen(true)}
          >
            Записаться на игру
          </button>
          <Link to={`/${league}/schedule`} className="all-games-button button button--outlined-black">
            Все мероприятия
          </Link>
        </div>
        <div className="game-map" ref={mapRef}></div>
      </div>

      <GameRegistrationModal 
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
      />
    </section>
  );
}