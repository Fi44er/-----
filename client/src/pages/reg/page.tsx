import "./reg.css";
import { Context } from "../../main";
import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";

const Reg = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fio, setFio] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const { store } = useContext(Context);
  return (
    <main className="reg">
      <div className="container">
        <div className="modal">
          <div className="modalInfo">
            <img
              className="imag1"
              src="/formImg.svg"
              width={400}
              height={200}
              alt="noteBook"
            />
            <img
              className="imag2"
              src="/formImg.svg"
              width={200}
              height={150}
              alt="noteBook"
            />
            <div className="modalForm">
              <h1>Регистрация</h1>
              <h1 className="text-red-600 font-extralight text-lg">
                {store.message}
              </h1>
              <div className="modalInput">
                <div className="input">
                  <img src="/fio.svg" width={29} height={29} alt="" />
                  <input
                    type="text"
                    placeholder="ФИО"
                    onChange={(e) => setFio(e.target.value)}
                    value={fio}
                  />
                </div>
                <div className="input">
                  <img src="/phone.svg" width={29} height={29} alt="" />
                  <input
                    type="text"
                    placeholder="Телефон"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                  />
                </div>
                <div className="input">
                  <img src="/fio.svg" width={29} height={29} alt="" />
                  <input
                    type="text"
                    placeholder="Адрес"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div className="input">
                  <img src="/email.svg" width={29} height={29} alt="" />
                  <input
                    type="text"
                    placeholder="Почта"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="input">
                  <img src="/pass.svg" width={29} height={29} alt="" />
                  <input
                    type="password"
                    placeholder="Пароль"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <button
                  className="formButton"
                  onClick={() =>
                    store.registration(email, password, fio, phoneNumber)
                  }
                >
                  Зарегистрироваться
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default observer(Reg);
