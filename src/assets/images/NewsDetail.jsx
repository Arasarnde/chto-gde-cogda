import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/NewsDetail.css';

export function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // В реальном приложении эти данные должны приходить с сервера
  const newsItems = [
    {
      id: 1,
      type: 'Мышкино и Штопор',
      title: 'Устойчивое развитие',
      description: 'Вышла книга «В НЕГО ПЛЮС» - мемуары Евгения СТБ об окончании карьеры, об его взаимодействии игрой «Что? Где? Когда?» и о том, что будет дальше. Рассказываем, как предсказания не сбылись, но параллели все-таки есть.',
      content: `
        <p>Вышла книга «В НЕГО ПЛЮС» - мемуары Евгения СТБ об окончании карьеры, об его взаимодействии игрой «Что? Где? Когда?» и о том, что будет дальше.</p>
        <p>Рассказываем, как предсказания не сбылись, но параллели все-таки есть. В книге автор делится своими мыслями о развитии интеллектуальных игр и их будущем.</p>
        <p>Особое внимание уделяется теме устойчивого развития в контексте интеллектуальных игр и их влияния на общество.</p>
      `,
      image: '/images/news/sustainable.jpg',
      author: 'Дмитрий Данилов',
      date: '1 марта 2024',
      readingTime: '12 мин'
    },
    // ... остальные новости ...
  ];

  const news = newsItems.find(item => item.id === parseInt(id));

  if (!news) {
    return (
      <div className="news-detail-page">
        <div className="news-detail-container">
          <h1>Новость не найдена</h1>
          <button className="back-button" onClick={() => navigate('/news')}>
            Вернуться к новостям
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="news-detail-page">
      <div className="news-detail-container">
        <button className="button button--outlined" onClick={() => navigate('/news')}>
          Назад к новостям
        </button>
        
        <article className="news-detail">
          <header className="news-detail-header">
            {news.type && (
              <div className="news-detail-type">
                <span>{news.type}</span>
              </div>
            )}
            <h1 className="news-detail-title">{news.title}</h1>
            <div className="news-detail-meta">
              {news.author && <span className="news-detail-author">{news.author}</span>}
              <span className="news-detail-date">{news.date}</span>
              <span className="news-detail-reading-time">{news.readingTime}</span>
            </div>
          </header>

          <div className="news-detail-image">
            <img src={news.image} alt={news.title} />
          </div>

          <div 
            className="news-detail-content"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
        </article>
      </div>
    </div>
  );
} 