// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import ContactList from "./components/ContactList/ContactList";
// import SearchBox from "./components/SearchBox/SearchBox";
// import ContactForm from "./components/ContactForm/ContactForm";
import css from "./App.module.css";


import { Route, Routes } from 'react-router-dom';
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Home from './pages/Home/Home';
import LayoutComp from "./components/LayoutComp/LayoutComp";
import Register from "./pages/Register/Register";
import Contacts from "./pages/Contacts/Contacts";


function App() {


  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<LayoutComp />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
