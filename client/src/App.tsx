import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/home/Home";
import Login from "./pages/login/page";
import Reg from "./pages/reg/page";
import LkUser from "./pages/lk_user/page";
import News from "./pages/news/page";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "./main";
import Admin from "./pages/admin/Admin";
import Contacts from "./pages/contacts/Contacts";
import Schedule from "./pages/schedule/Schedule";
import Jkx from "./pages/o_jkx/page";
import EditNews from "./pages/admin/menu/municipalForm/editnews/EditNews";

function App() {
  const { store } = useContext(Context);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/" element={<Home />} />
          <Route path="/editnews" element={<EditNews />} />
          <Route
            path="/"
            element={<ProtectedRoute authenticated={store.isAuth} />}
          >
            {" "}
            //!localStorage.getItem("token")?false:true
          </Route>
          <Route path="/lk_user" element={<LkUser />} />
          <Route path="/news" element={<News />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/jkx" element={<Jkx />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default observer(App);
