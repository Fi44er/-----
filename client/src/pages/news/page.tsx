
import { Link } from "react-router-dom";
import styles from "./news.module.css";
import { useEffect, useState } from "react";
import axios from 'axios'
import { INews } from "../../models/INews";

export default function News() {
  const [news, setNews] = useState<INews[]>([])
  useEffect(() => {
    axios.get('http://localhost:5000/api/news')
    .then((response) => {
      setNews(response.data)
    })
    .catch((e) => {
      return e
    })
  }, [])

  console.log(news[1]);
  return (
    <main className={styles.news}>
      <div className={styles.container}>
        <div className={styles.newsSearch}>
          <input type="text" placeholder="поиск" />
        </div>
        <div className={styles.newsFilters}>
          <div className={styles.newsFiltersContent}>
            <div className={styles.newsFilter}>
              <h2>Фильтры</h2>
              <div className={styles.newsFilterItem}>
                <Link to="#">Газ</Link>
                <Link to="#">Вода</Link>
                <Link to="#">Свет</Link>
                <Link to="#">Отопление</Link>
                <Link to="#">Улица</Link>
                <Link to="#">Другое</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.newsHading}>
          <h2>НОВОСТИ</h2>
        </div>
        {news.map(newsId => (
          <div className={styles.newsContentBlock}>
          <div className={styles.newsContentItems}>
            <div className={styles.newsContentItemText}>
              <h2>{newsId.heading}</h2>
              <p>
                {newsId.text}
              </p>
              <div className={styles.contentButton}>
                <div>
                  <Link to="/login">Подробнее</Link>
                </div>
              </div>
            </div>
            <div className={styles.newsContentItemImg}>
              <img src={newsId.img} width={379} height={308} alt="" />
            </div>
          </div>
        </div>
        ))}
        {/* Object.keys(person).forEach((propName) => console.log(person[propName])); */}
        
      </div>
    </main>
  );
}
