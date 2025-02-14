import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
        //   import.meta.env.VITE_API_KEY

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=91001099ddda44c2ad2801b63c13108d`;

        // }`;

        const response = await fetch(url);
        const data = await response.json();

        if (!data.articles) {
          throw new Error("No articles found");
        }

        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
        setArticles([]); // Ensure it's always an array
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <h2 className="text-center mt-3">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles?.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <p className="text-center mt-3">Loading News...</p>
      )}
    </div>
  );
};

export default NewsBoard;
