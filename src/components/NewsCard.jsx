import React, { useState } from 'react';
import '../styles/NewsCard.css';

export function NewsCard({ news }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNews = () => {
    setIsExpanded(!isExpanded);
  };

  const isLongContent = (content) => {
    return content.length > 200;
  };

  return (
    <div className={`news-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="news-image">
        <img src={news.image} alt={news.title} />
      </div>
      <div className="news-content">
        <div className={`news-text ${isExpanded ? 'expanded' : ''}`}>
          {isExpanded ? (
            <div dangerouslySetInnerHTML={{ __html: news.content }} />
          ) : (
            <p className="news-description">
              {news.description}
              {isLongContent(news.content) && (
                <>
                  ...{' '}
                  <span className="read-more" onClick={toggleNews} role="button" tabIndex={0} style={{cursor: 'pointer'}}>
                    Читать далее
                  </span>
                </>
              )}
            </p>
          )}
        </div>
        <div className="news-meta">
          <span className="news-date">{news.date}</span>
        </div>
      </div>
    </div>
  );
} 