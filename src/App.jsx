
import css from "./App.module.css";


import { Route, Routes } from 'react-router-dom';
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Home from './pages/Home/Home';
import LayoutComp from "./components/Layout/Layout";
import Register from "./pages/Register/Register";
import Contacts from "./pages/Contacts/Contacts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
import { Toaster } from "react-hot-toast";
import { getMeThunk } from "./redux/auth/operations";


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getMeThunk())
  },[dispatch])

  return (
    
    <div className={css.container}>
      <Toaster   
      position="top-right"
      reverseOrder={true}/>
      <Routes>
        <Route path="/" element={<LayoutComp />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>} />
        </Route>
        <Route path="login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
          } />
        <Route path="register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>
          } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
