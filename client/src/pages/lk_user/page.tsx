import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import "./lkUser.css";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import axios from "axios";
import { IUser } from "../../models/IUser";

const LkUser = () => {
  const [user, setUser] = useState<IUser[]>([]);
  // const query = new URLSearchParams(location.search);
  // const profileMail = query.get("email")
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getUser", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);

        setUser(response.data);
      })
      .catch((e) => {
        return e;
      });
  }, []);

  if(user.role === 1){
    location.href = "/admin";
    return;
  }
  
  const { store } = useContext(Context);


  if (!localStorage.getItem("token")) {
    location.href = "/";
    return;
  }


  // var cityId = user.find(val => val.email === profile).id;
  // const profile = user.find(val => val.email === profileMail)
  // console.log(user);

  return (
    <main className="LkUser">
      <div className="container">
        <div className="LkUserContent">
          <div className="userProfile">
            <div className="userProfileHeading">
              <h2>Фотография профиля</h2>
            </div>
            <div className="userProfileImg">
              <img
                className="im1"
                src="/image 19.png"
                width={508}
                height={508}
                alt="user_Img"
              />
              <img
                className="im2"
                src="/image 19.png"
                width={358}
                height={358}
                alt="user_Img"
              />
              <button onClick={() => store.logout()}>Выйти из акаунта</button>
            </div>
          </div>
          <div className="userProfileInfo">
            <div className="userProfileInfoItems">
              <div className="userProfileInfoItem">
                <h2>ФИО</h2>
                <div className="userProfileInfoItemBlock">
                  <p>{user.fio}</p>
                </div>
              </div>
              <div className="userProfileInfoItem">
                <h2>Телефон</h2>
                <div className="userProfileInfoItemBlock">
                  <p>{user.phone_number}</p>
                </div>
              </div>
              <div className="userProfileInfoItem">
                <h2>E-mail</h2>
                <div className="userProfileInfoItemBlock">
                  <p>{user.email}</p>
                </div>
              </div>
              <div className="userProfileInfoItem">
                <h2>Адрес</h2>
                <div className="userProfileInfoItemBlock">
                  <p>{user.address}</p>
                </div>
              </div>
              <div className="userProfileInfoItemLink">
                <div className="userProfileInfoItemBlock1">
                  <Link to="https://web.telegram.org/k/#@ZHKH_online_hakaton_bot">
                    Отправить сообщение муниципальным службам
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default observer(LkUser);
