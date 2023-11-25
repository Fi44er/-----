import style from "../Admin.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { IMunicipal } from "../../../models/IMunicipal";

const MunicipalMenu = () => {
    const [municipal, setmunicipal] = useState<IMunicipal[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getMunicipal")
      .then((response) => {
        setmunicipal(response.data);
      })
      .catch((e) => {
        return e;
      });
  }, []);
  return (
    <>
      <div>
        <div className={style.MunicipalMenuButton}>
          <button className='mb-9'>Добавить службу</button>
        </div>
        <div className={style.getMunicipal}>
          <table className={style.table}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Название</th>
                <th>Почта</th>
                <th>Спецификация</th>
                <th>Редактировать</th>
                <th>Удалить</th>
              </tr>
            </thead>
            <tbody>
            {municipal.map((municipalId) => (
              <tr>
                <td>{municipalId.id}</td>
                <td>{municipalId.name}</td>
                <td>{municipalId.email}</td>
                <td>{municipalId.specification}</td>
                <td><a href="#">Редактировать</a></td>
                <td><a href="#">Удалить</a></td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MunicipalMenu;
