import React, { useState, useEffect } from 'react';
import '../styles/ScrollToTopButton.css';
import arrowUp from '../assets/images/arrow-up.svg';

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-to-top-btn${visible ? ' visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Наверх"
    >
    <img src={arrowUp} alt="Наверх" />
    </button>
  );
} 