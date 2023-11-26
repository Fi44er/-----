import "./EditNews.css";
import { Context } from "../../../../../main";
import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";


const EditNews = () => {
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
                    onChange={(e) => setHeading(e.target.value)}
                    value={heading}
                  />
                </div>
                <div className="input2">
                  <textarea
                    placeholder="Текст новости"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                  />
                </div>
                <button
                  className="formButton"
                  onClick={() =>
                    store.addnews(heading, text)
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

export default observer(EditNews)