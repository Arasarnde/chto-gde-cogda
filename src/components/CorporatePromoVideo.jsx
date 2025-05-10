import React from 'react';
import '../styles/CorporatePromoVideo.css';

export function CorporatePromoVideo() {
  return (
    <section className="corporate-promo-section" id="promo">
      <h2 className="corporate-promo-title">Как мы играем?</h2>
      <div className="corporate-promo-video-wrapper">
        <iframe
          src="https://rutube.ru/play/embed/05bcf4ed1f1710b43060ced77fb4c1b2"
          title="Промо-ролик Что? Где? Когда?"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
} 