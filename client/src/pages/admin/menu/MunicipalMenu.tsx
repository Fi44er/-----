import style from "../Admin.module.scss";


const MunicipalMenu = () => {
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
              <tr>
                <td>1</td>
                <td>Name</td>
                <td>name@name.ru</td>
                <td>Вода</td>
                <td><a href="#">Редактировать</a></td>
                <td><a href="#">Удалить</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MunicipalMenu;
