import "./EditNews.css";
import { Context } from "../../../../../main";
import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";

export default function EditNews() {
  const [heading, setHeading] = useState<string>("");
  const [text, setText] = useState<string>("");
  const { store } = useContext(Context);
  return (
    <main className="edit">
      <div className="container">
        <div className="modal">
          <div className="modalInfo1">
            <div className="modalForm">
              <h1>Добавить новость</h1>
              <h1 className="text-red-600 font-extralight text-lg">
                {store.message}
              </h1>
              <div className="modalInput">
                <div className="input">
                  <input
                    type="text"
                    placeholder="Заголовок"
                    onChange={(e) => setFio(e.target.value)}
                    value={fio}
                  />
                </div>
                <div className="input2">
                  <textarea
                    placeholder="Текст новости"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                  />
                </div>
                <button
                  className="formButton"
                  onClick={() =>
                    store.registration(email, password, fio, phoneNumber)
                  }
                >
                  Добавить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
