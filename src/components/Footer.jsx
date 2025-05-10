import "../styles/Footer.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import VK from "../assets/images/vk.svg";
import Phone from "../assets/images/phone.svg";
import Mail from "../assets/images/mail.svg";

export function Footer() {
  const location = useLocation();
  const isMainPage = location.pathname === '/open/' || location.pathname === '/club/';

  return (
    <footer className={`footer ${!isMainPage ? 'footer--bordered' : ''}`}>
      <div className="footer-content">
          <img src={Logo} alt="Что? Где? Когда?" className="footer-logo" />
          <div className="footer-column">
            <h3>Открытая лига</h3>
            <ul>
              <li><Link to="/open/">Главная</Link></li>
              <li><Link to="/open/rules">Правила</Link></li>
              <li><Link to="/open/news">Новости</Link></li>
              <li><Link to="/open/schedule">Расписание</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Клубная лига</h3>
            <ul>
              <li><Link to="/club/">Главная</Link></li>
              <li><Link to="/club/rules">Правила</Link></li>
              <li><Link to="/club/news">Новости</Link></li>
              <li><Link to="/club/schedule">Расписание</Link></li>
              <li><Link to="/club/rating">Рейтинг</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Корпоративы</h3>
            <ul>
              <li><Link to="/corporate">Главная</Link></li>
            </ul>
          </div>

          <div className="footer-column contacts">
            <p className="social-text">Свяжитесь с нами</p>
            <div className="contact-buttons">
              <a href="tel:+79119707896" className="contact-button phone">
                <img src={Phone} alt="Телефон" />
              </a>
              <a href="mailto: khishtaki@gmail.com" className="contact-button email">
              <img src={Mail} alt="Почта" />
              </a>
            </div>
            <p className="social-text">Наша официальная группа <br />ВКонтакте</p>
            <a href="https://vk.com/ch_g_k_spb" className="contact-button vk" target="_blank" rel="noreferrer">
              <img src={VK} alt="ВКонтакте" />
            </a>
          </div>
      </div>
      <div className="footer-bottom">
        <p>Мероприятия проводятся по лицензии ООО «Телекомпания «Игра-ТВ»</p>
        <p>© 2025 ИП Мун Михаил | Все права защищены</p>
      </div>
    </footer>
  );
}