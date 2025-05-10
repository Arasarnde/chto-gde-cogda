import React, { useState, useEffect } from 'react';
import { NewsCard } from './NewsCard';
import { getVKPosts } from '../services/vkApi';
import '../styles/News.css';

export function News() {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Здесь нужно будет заменить на реальный токен доступа
        const accessToken = process.env.REACT_APP_VK_ACCESS_TOKEN;
        const posts = await getVKPosts(accessToken);
        setNewsItems(posts);
      } catch (err) {
        setError('Не удалось загрузить новости');
        console.error('Ошибка при загрузке новостей:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="news-page news-title">Загрузка новостей...</div>;
  }

  if (error) {
    return <div className="news-page"><p className="news-description" style={{color: 'red'}}>{error}</p></div>;
  }

  return (
    <div className="news-page">
      <h1 className="news-title">Новости</h1>
      <div className="news-masonry">
        {newsItems.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
} 