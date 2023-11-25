import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import "./lkUser.css";
import {Context} from '../../main'
import { observer } from "mobx-react-lite";

const LkUser = () => {
  const { store } = useContext(Context)
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
            </div>
            <button onClick={() => store.logout()}>Выйти из акаунта</button>
          </div>
          <div className="userProfileInfo">
            <div className="userProfileInfoItems">
              <div className="userProfileInfoItem">
                <h2>ФИО</h2>
                <div className="userProfileInfoItemBlock">
                  <p>111</p>
                </div>
              </div>
              <div className="userProfileInfoItem">
                <h2>Телефон</h2>
                <div className="userProfileInfoItemBlock">
                  <p>111</p>
                </div>
              </div>
              <div className="userProfileInfoItem">
                <h2>E-mail</h2>
                <div className="userProfileInfoItemBlock">
                  <p>111</p>
                </div>
              </div>
              <div className="userProfileInfoItem">
                <h2>Адрес</h2>
                <div className="userProfileInfoItemBlock">
                  <p>111</p>
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
}

export default observer(LkUser)