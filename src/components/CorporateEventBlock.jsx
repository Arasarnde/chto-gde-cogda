import React, { useRef, useEffect } from 'react';
import '../styles/Events.css';

export function CorporateEventBlock({ title, description, image, position = 'left' }) {
  const contentRef = useRef(null);
  const imageWrapperRef = useRef(null);

  // Синхронизация высоты картинки и текста
  useEffect(() => {
    if (contentRef.current && imageWrapperRef.current) {
      imageWrapperRef.current.style.height = contentRef.current.getBoundingClientRect().height + 'px';
    }
  }, [title, description, image]);

  return (
    <div className={`event-item event-item--${position}`}>
      <div className="event-item__image-wrapper" ref={imageWrapperRef}>
        <img className="event-item__image" src={image} alt={title} />
      </div>
      <div className="event-item__content" ref={contentRef}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
} 