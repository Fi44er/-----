import { useContext, useState, useEffect } from "react";
import style from './Admin.module.scss'
import MunicipalMenu from './menu/MunicipalMenu'
import NewsMenu from './menu/NewsMenu'
import axios from "axios";
import { IUser } from "../../models/IUser";
import { Context } from "../../main";


const Admin = () => {
    const[isMunicipal, setMunicipal] = useState<boolean>(true)
    const[isNews, setNews] = useState<boolean>(false)
    const [user, setUser] = useState<IUser[]>([]);
    

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

      if(user.role === 0){
        location.href = "/";
        return;
      }

    const MunActive = () => {
        setMunicipal(true)
        setNews(false)
    }

    const NewsActive = () => {
        setMunicipal(false)
        setNews(true)
    }

    const { store } = useContext(Context);
    return (
        <>
        <div className={style.adminMain}>
            <div className={style.adminNav}>
                <div>
                    <a onClick={() => MunActive()} href="#!">Муниципальные службы</a>
                </div>
                <div>
                    <a onClick={() => NewsActive()} href="#!">Новости</a>
                </div>
                <div>
                    <button onClick={() => store.logout()}>Выйти из акаунта</button>
                </div>
            </div>
            <div className={style.adminMenu}>
                {
                isMunicipal && !isNews ? <MunicipalMenu /> : <NewsMenu />
                }
            </div>
        </div>

        </>
    )
}

export default Admin