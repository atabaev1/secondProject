
import React, { useEffect, useState } from 'react';
import './NewFeed.css'; 

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    
    fetch('/news.json')
      .then((response) => response.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="news-feed">
      <h2>Latest News</h2>
      <ul>
        {news.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.date}</p>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
