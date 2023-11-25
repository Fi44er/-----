import { Context } from "../../../../main";
import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";

const CreateMunicipal = () => {
  const [cod, setCod] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [specification, setSpecification] = useState<string>("");
  const [workArea, setWorkArea] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const { store } = useContext(Context);

  return (
    <>
      <div>
        <h1>Добавить службу</h1>
        <div>
          <h1>{store.message}</h1>
          <div>
            <div>
              <label>Муниципальный код</label>
              <input
                type="text"
                onChange={(e) => setCod(e.target.value)}
                value={cod}
                placeholder="Муниципальный код"
              />
            </div>
            <div>
              <label>Пароль</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Пароль"
              />
            </div>
            <div>
              <label>Название муниципальной службы</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Название службы"
              />
            </div>
            <div>
              <label>Спецификация</label>
              <input
                type="text"
                onChange={(e) => setSpecification(e.target.value)}
                value={specification}
                placeholder="Спецификация"
              />
            </div>
            <div>
              <label>Область работы</label>
              <input
                type="text"
                onChange={(e) => setWorkArea(e.target.value)}
                value={workArea}
                placeholder="Область работы"
              />
            </div>
            <div>
              <label>Почта</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Почта"
              />
            </div>
          </div>
          <button
            onClick={() =>
              store.regMunicipalServices(
                cod,
                name,
                specification,
                workArea,
                email,
                password
              )
            }
          >
            Добавить службу
          </button>
        </div>
      </div>
    </>
  );
};

export default observer(CreateMunicipal);
