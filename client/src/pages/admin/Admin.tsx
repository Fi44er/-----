import { useState } from 'react'
import style from './Admin.module.scss'
import MunicipalMenu from './menu/MunicipalMenu'
import NewsMenu from './menu/NewsMenu'


const Admin = () => {
    const[isMunicipal, setMunicipal] = useState<boolean>(true)
    const[isNews, setNews] = useState<boolean>(false)

    const MunActive = () => {
        setMunicipal(true)
        setNews(false)
    }

    const NewsActive = () => {
        setMunicipal(false)
        setNews(true)
    }
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