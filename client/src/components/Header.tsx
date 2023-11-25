import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

export function Header() {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <>
      <header className="header">
        <div className="headerLogo">
          <img
            className="logo1"
            src="/Group.svg"
            width={61}
            height={61}
            alt="Logo"
          />
          <img
            className="logo2"
            src="/Group.svg"
            width={31}
            height={31}
            alt="Logo"
          />
          <h2>Уютный город</h2>
        </div>
        <nav
          className={`headerNav ${isOpen ? "active" : ""}`}
          onClick={() => setOpen(false)}
        >
          <ul className="headerNavList">
            <li className="headerNavItem">
              <Link to="/">Главная </Link>
            </li>
            <li className="headerNavItem">
              <Link to="/about_us">Контакты</Link>
            </li>
            <li className="headerNavItem">
              <Link to="#">О ЖКХ </Link>
            </li>
            <li className="headerNavItem">
              <Link to="#">Раписание</Link>
            </li>
            <li className="headerNavItem">
              <Link to="/news">Новости</Link>
            </li>
            <div className="headerButtonMobile">
              {localStorage.getItem("token") ? (
                <div>
                  <Link to="/lk_user">Личный кабинет</Link>
                </div>
              ) : (
                <div className="flex flex-col gap-y-5">
                  <div>
                    <Link to="/login">Войти</Link>
                  </div>
                  <div>
                    <Link to="/reg">Регистрация</Link>
                  </div>
                </div>
              )}
            </div>
          </ul>
        </nav>
        <div className="headerButton">
          {localStorage.getItem("token") ? (
            <div>
              <Link to="/lk_user">Личный кабинет</Link>
            </div>
          ) : (
            <div className="flex gap-x-5">
              <div>
                <Link to="/login">Войти</Link>
              </div>
              <div>
                <Link to="/reg">Регистрация</Link>
              </div>
            </div>
          )}
        </div>
        <div className="headerMenu">
          <button onClick={() => setOpen(!isOpen)}>
            <img src="/Category.svg" width={40} height={40} alt="" />
          </button>
        </div>
      </header>
    </>
  );
}
