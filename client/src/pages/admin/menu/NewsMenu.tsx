import style from "../Admin.module.scss";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { INews } from "../../../models/INews";
import { Link } from "react-router-dom";
import "./municipalForm/newsMenu.css";
import { Context } from "../../../main";

const NewsMenu = () => {
  const [news, setNews] = useState<INews[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/news")
      .then((response) => {
        setNews(response.data);
      })
      .catch((e) => {
        return e;
      });
  }, []);

  console.log(news[1]);
  const { store } = useContext(Context);

  return (
    <>
      <div>
        <div className={style.MunicipalMenuButton}>
          <Link to="/editnews" className="editButton">
            Добавить новость
          </Link>
        </div>
        <div className={style.getMunicipal}>
          <table className={style.table}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Название</th>
                <th>Редактировать</th>
                <th>Удалить</th>
              </tr>
            </thead>
            <tbody>
              {news.map((newsId) => (
                <tr>
                  <td>{newsId.id}</td>
                  <td>{newsId.heading}</td>
                  <td>
                    <a href="#">Редактировать</a>
                  </td>
                  <td>
                    <button onClick={() =>
                    store.delnews(newsId.id)
                  }>Удалить</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default NewsMenu;
