import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/images/logo.svg";
import burger from "../assets/images/burger.svg";
import close from "../assets/images/close.svg";
import VK from "../assets/images/vk-black.svg";

export function Header() {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Определяем активное меню на основе текущего URL
    const getInitialActiveMenu = () => {
      if (location.pathname.startsWith('/club')) {
        return 'club';
      } else if (location.pathname.startsWith('/open')) {
        return 'open';
      } else if (location.pathname.includes('corporate')) {
        return 'corporate';
      }
      return 'open'; // По умолчанию открытая лига
    };

    const [activeMenu, setActiveMenu] = useState(getInitialActiveMenu);

    // Обновляем активное меню при изменении URL
    useEffect(() => {
      const newActiveMenu = getInitialActiveMenu();
      setActiveMenu(newActiveMenu);
    }, [location.pathname]);

    const handleMenuChange = (newMenu) => {
      setActiveMenu(newMenu);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
  
    useEffect(() => {
      if (menuOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        document.body.classList.add('menu-open');
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
        document.body.classList.remove('menu-open');
      }
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.body.classList.remove('menu-open');
      };
    }, [menuOpen]);
  
    const getMenuTitle = () => {
      switch (activeMenu) {
        case "open":
          return "Открытая лига";
        case "club":
          return "Клубная лига";
        case "corporate":
          return "Корпоративы";
        default:
          return "Открытая лига";
      }
    };
  
    const getMenuLinks = () => {
      switch (activeMenu) {
        case "open":
          return (
            <>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                setActiveMenu("club");
              }}>Клубная лига</a>
              <a href="/corporate" onClick={(e) => {
                e.preventDefault();
                window.open('/corporate', '_blank');
              }}>Корпоративы</a>
            </>
          );
        case "club":
          return (
            <>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                setActiveMenu("open");
              }}>Открытая лига</a>
              <a href="/corporate" onClick={(e) => {
                e.preventDefault();
                window.open('/corporate', '_blank');
              }}>Корпоративы</a>
            </>
          );
        case "corporate":
          return (
            <>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                setActiveMenu("open");
              }}>Открытая лига</a>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                setActiveMenu("club");
              }}>Клубная лига</a>
            </>
          );
        default:
          return (
            <>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                setActiveMenu("club");
              }}>Клубная лига</a>
              <a href="/corporate" onClick={(e) => {
                e.preventDefault();
                window.open('/corporate', '_blank');
              }}>Корпоративы</a>
            </>
          );
      }
    };

    const handleLinkClick = () => {
      setMenuOpen(false);
    };
  
    return (
      <>
        <header className={`header-container ${location.pathname !== '/' ? 'header-container--bordered' : ''}`}>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <img src={burger} alt="Меню" className="burger" />
          </button>
          <div className="logo-container">
            <Link to={activeMenu === 'club' ? '/club/' : '/open/'}>
              <img src={logo} alt="Логотип" className="header-logo" />
            </Link>
          </div>
          <div className="auth-container">
            <Link to={activeMenu === 'club' ? '/club/login' : '/open/login'} className="button button--white auth-button">Войти</Link>
            <Link to={activeMenu === 'club' ? '/club/registration' : '/open/registration'} className="button button--outlined auth-button">Зарегистрироваться</Link>
          </div>
        </header>
  
        {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}
  
        <nav
          className={`navigation-menu ${menuOpen ? "navigation-menu--open" : ""}`}
          ref={menuRef}
        >
          <button className="menu-close" onClick={() => setMenuOpen(false)}><img src={close} alt="Закрыть" /></button>
  
          <div className="menu-header">
            <strong className="menu-title">{getMenuTitle()}</strong>
            <span className="menu-navigation">
              {getMenuLinks()}
            </span>
          </div>
  
          <ul className="menu-list">
            {activeMenu === "open" ? (
              <>
                <li className="menu-item"><Link to="/open/" onClick={handleLinkClick}>Главная</Link></li>
                <li className="menu-item"><Link to="/open/rules" onClick={handleLinkClick}>Правила</Link></li>
                <li className="menu-item"><Link to="/open/news" onClick={handleLinkClick}>Новости</Link></li>
                <li className="menu-item"><Link to="/open/schedule" onClick={handleLinkClick}>Расписание</Link></li>
              </>
            ) : activeMenu === "club" ? (
              <>
                <li className="menu-item"><Link to="/club/" onClick={handleLinkClick}>Главная</Link></li>
                <li className="menu-item"><Link to="/club/rules" onClick={handleLinkClick}>Правила</Link></li>
                <li className="menu-item"><Link to="/club/news" onClick={handleLinkClick}>Новости</Link></li>
                <li className="menu-item"><Link to="/club/schedule" onClick={handleLinkClick}>Расписание</Link></li>
                <li className="menu-item"><Link to="/club/rating" onClick={handleLinkClick}>Рейтинг</Link></li>
              </>
            ) : (
              <>
                <li className="menu-item"><Link to="/corporate" onClick={handleLinkClick}>Главная</Link></li>
              </>
            )}
          </ul>
  
          <a href="https://vk.com/ch_g_k_spb" className="social-link" target="_blank" rel="noreferrer">
            <img src={VK} alt="VK" className="social-icon" />
          </a>
        </nav>
      </>
    );
}