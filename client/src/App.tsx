import './App.css'
import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { Header } from './components/Header'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/home/Home'
import Login from './pages/login/page'
import Reg from './pages/reg/page'
import LkUser from './pages/lk_user/page'
import News from './pages/news/page'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from './main'
import Admin from './pages/admin/Admin'

function App() {

  const {store} = useContext(Context)
  
  return (
    <>
    <BrowserRouter>
      <Header />
    <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/reg' element={<Reg />}/>
      <Route path='/' element={<Home />} />
      <Route path='/' element={<ProtectedRoute authenticated={store.isAuth} />}>
        <Route path='/lk_user' element={<LkUser />}/>
      </Route>
        <Route path='/news' element={<News />} />
        <Route path='/admin' element={<Admin />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default observer(App)