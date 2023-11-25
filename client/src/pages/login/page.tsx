import "./login.css";
import { Context } from "../../main";
import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  const {store} = useContext(Context)
  console.log(store.isAuth);

  const navigate = useNavigate()
  
  useEffect(() => {
    if(store.isAuth) {
      navigate('/lk_user')
    }
  }, [store.isAuth])

  return (
    <main className="login">
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
              <h1>Вход</h1>
              <h1 className="text-red-600">{store.message}</h1>
              <div className="modalInput">
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
                  onClick={() => store.login(email, password)}
                >
                  Войти
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


export default observer(Login)