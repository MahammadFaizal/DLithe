import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NewsApp.css";

const NewsApp = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
  console.log("Fetching news...");
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=apple&from=2025-03-09&to=2025-03-09&sortBy=popularity&apiKey=67d4189a7bfd4f06b22d7740e8cafad0"
        );
        console.log("News fetched successfully:", response.data.articles);
        setArticles(response.data.articles);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to fetch news");
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Latest News</h1>
      {loading && <p className="loading">Loading news...</p>}
      {error && <p className="error">{error}</p>}
      <div className="news-grid">
        {articles.map((article, index) => (
          <div key={index} className="news-card">
            <h2 className="news-title">{article.title}</h2>
            {article.urlToImage && (
              <img src={article.urlToImage} alt="News" className="news-image" />
            )}
            <p className="news-description">{article.description}</p>
            <a href={article.url} rel="noopener noreferrer" className="read-more">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsApp;
