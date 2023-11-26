import "./Jkx.css";

export default function Jkx() {
  return (
    <main className="jkx">
      <div className="container">
        <div className="jkxContent">
          <div className="jkxContentHeading">
            <h1>ЖКХ</h1>
          </div>
          <div className="jkxContentItems">
            <div className="jkxContentItemImg">
              <img src="/Rectangle 131.png" alt="" />
            </div>
            <div className="jkxContentItemText">
              <div>
                <h2>
                  ЖКХ - жилищно-коммунальное хозяйство, является важной отраслью
                  экономики.
                </h2>
                <p>
                  ЖКХ включает в себя комплекс услуг, направленных на
                  обеспечение комфортных условий проживания граждан, поддержание
                  жилищного фонда и инфраструктуры городов и населенных пунктов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="jkxContent">
          <div className="jkxContentHeading">
            <h1>Услуги</h1>
          </div>
          <div className="jkxContentItems">
            <div className="jkxContentItemText2">
              <div>
                <h2>Горячая и холодная вода</h2>
              </div>
            </div>
            <div className="jkxContentItemImg2">
              <img src="/Rectangle 149.png" alt="" />
            </div>
          </div>
          <div className="jkxContentItems">
            <div className="jkxContentItemText2">
              <div>
                <h2>Электроснабжение</h2>
              </div>
            </div>
            <div className="jkxContentItemImg2">
              <img src="/Rectangle 150.png" alt="" />
            </div>
          </div>
          <div className="jkxContentItems">
            <div className="jkxContentItemText2">
              <div>
                <h2>Ремонт и обслуживание жилищного фонд</h2>
              </div>
            </div>
            <div className="jkxContentItemImg2">
              <img src="/Rectangle 151.png" alt="" />
            </div>
          </div>
          <div className="jkxContentItems">
            <div className="jkxContentItemText2">
              <div>
                <h2>Отопление</h2>
              </div>
            </div>
            <div className="jkxContentItemImg2">
              <img src="/Rectangle 152.png" alt="" />
            </div>
          </div>
          <div className="jkxContentItems">
            <div className="jkxContentItemText2">
              <div>
                <h2>Уборка и вывоз мусора</h2>
              </div>
            </div>
            <div className="jkxContentItemImg2">
              <img src="/Rectangle 153.png" width={250} height={150} alt="" />
            </div>
          </div>
          <div className="jkxContentItems">
            <div className="jkxContentItemText2">
              <div>
                <h2>Другое</h2>
              </div>
            </div>
            <div className="jkxContentItemImg2">
              <img src="/Rectangle 154.png" width={250} height={150} alt="" />
            </div>
          </div>
        </div>
        <div className="opros">
          <div>
            <p>
              Приглашаем принять участие в опросе о качестве обслуживания вашего
              дома
            </p>
            <button>Голосовать</button>
          </div>
        </div>
      </div>
    </main>
  );
}
