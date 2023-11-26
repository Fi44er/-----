import { Link } from "react-router-dom";
import "./contacts.css";

const Contacts = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="w-2/4">
        <h1 className="flex justify-center text-6xl text-blue-800 font-bold mb-12">
          Телефоны экстренных служб
        </h1>
        <div className="flex flex-col gap-y-16">
          <div className="flex justify-between items-center">
            <div className="border-2 rounded-3xl p-4 text-4xl text-blue-800 ">
              Авария на водопроводной или канализационной системе
            </div>
            <p className="text-5xl font-bold text-blue-800 ">35-05-08</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="border-2 rounded-3xl p-4 text-4xl text-blue-800 ">
              Авария на водопроводной или канализационной системе
            </div>
            <p className="text-5xl font-bold text-blue-800 ">35-05-08</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="border-2 rounded-3xl p-4 text-4xl text-blue-800 ">
              Авария на водопроводной или канализационной системе
            </div>
            <p className="text-5xl font-bold text-blue-800 ">35-05-08</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="border-2 rounded-3xl p-4 text-4xl text-blue-800 ">
              Авария на водопроводной или канализационной системе
            </div>
            <p className="text-5xl font-bold text-blue-800 ">35-05-08</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="border-2 rounded-3xl p-4 text-4xl text-blue-800 ">
              Авария на водопроводной или канализационной системе
            </div>
            <p className="text-5xl font-bold text-blue-800 ">35-05-08</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="border-2 rounded-3xl p-4 text-4xl c text-blue-800 ">
              Авария на водопроводной или канализационной системе
            </div>
            <p className="text-5xl font-bold text-blue-800 ">35-05-08</p>
          </div>
        </div>
        <div className="contactsButton">
          <Link
            className="w-full mt-44 h-16 bg-blue-800 p-10 text-white rounded-3xl"
            to="http://www.yandexmap.somee.com/"
          >
            Просмотреть карту
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
