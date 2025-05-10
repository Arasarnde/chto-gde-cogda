import React, { useState, useRef, useEffect } from "react";
import "../styles/Events.css";

export function EventsSectionUniversal({ title, items }) {
  const [heights, setHeights] = useState([]);
  const contentRefs = useRef([]);
  const imageWrapperRefs = useRef([]);
  const resizeObserverRef = useRef(null);

  // Функция обновления высоты для конкретного элемента
  const updateHeight = (index) => {
    const contentRef = contentRefs.current[index];
    const imageWrapperRef = imageWrapperRefs.current[index];
    
    if (contentRef && imageWrapperRef) {
      const contentHeight = contentRef.getBoundingClientRect().height;
      imageWrapperRef.style.height = `${contentHeight}px`;
    }
  };

  // Инициализация ResizeObserver
  useEffect(() => {
    if (!resizeObserverRef.current) {
      resizeObserverRef.current = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const index = contentRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1) {
            updateHeight(index);
          }
        });
      });
    }

    // Подписываемся на изменения размеров для всех контентных блоков
    contentRefs.current.forEach((ref) => {
      if (ref) {
        resizeObserverRef.current.observe(ref);
      }
    });

    // Инициализируем высоты при первом рендере
    contentRefs.current.forEach((_, index) => {
      updateHeight(index);
    });

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="events-section" id="formats">
      {title && <h2 className="section-title">{title}</h2>}
      <div className="events-grid">
        {items.map((item, index) => (
          <div className={`event-item${item.position ? ` event-item--${item.position}` : ""}${item.row ? ` event-item--row` : ""}`} key={index}>
            {item.image && (
              <div
                className="event-item__image-wrapper"
                ref={el => (imageWrapperRefs.current[index] = el)}
              >
                <img className="event-item__image" src={item.image} alt={item.title} />
              </div>
            )}
            <div
              className={item.image ? "event-item__content" : item.row ? "event-item__content event-item__content--half event-item__content--with-avatars" : "event-item__content event-item__content--half"}
              ref={el => (contentRefs.current[index] = el)}
            >
              {item.avatars ? (
                <>
                  <div className="event-item__content-text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="event-item__avatars">
                    {item.avatars.map((avatar, i) => (
                      <img src={avatar.src} alt={avatar.alt} key={i} />
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 