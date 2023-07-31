import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";

import Footer from "./components/Footer/Footer";

import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Favourity from "./pages/Favouite/Favourity";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registation/Registration";
import Sweets from "./pages/Sweets/Sweets";
import Honny from "./pages/Honny/Honny";
import Cooking from "./pages/Cooking/Cooking";
import WeatherGift from "./pages/WeatherGist/WeatherGift";

import api from "./api/api";
import { setCart, setFavourity, setUser } from "./store/reducers/userReducer";
import Admin from "./pages/Admin/Admin";
import Raiting from "./pages/Raiting/Raiting";
import Item from "./pages/Item/Item";

const AppRouter = () => {
  const isReg = useSelector(state => state.user.isReg);
  const [cookies, setCookie, removeCookie] = useCookies();

  const [setting, setSetting] = useState({});

  const dispatch = useDispatch();
  const email = cookies.email;
  const password = cookies.password;
  useEffect(() => {
    const first = localStorage.getItem("time");
    if (first === null) {
      localStorage.setItem("time", "yyyes");
      localStorage.setItem("cart", JSON.stringify([]));
      localStorage.setItem("favourity", JSON.stringify([]));
    } else {
      const cart = localStorage.getItem("cart");
      const favourity = localStorage.getItem("favourity");
      dispatch(setCart(JSON.parse(cart)));
      dispatch(setFavourity(JSON.parse(favourity)));
    }
    api.getSettings().then(res => {
      setSetting({ time: res.data.time, phone: res.data.phone });
      console.log(res.data);
    });
    api.loginUser(email, password).then(res => {
      if (res.data.message == "Error") {
      } else {
        dispatch(setUser(res.data));
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main setting={setting} />} path="/" />
        <Route element={<About setting={setting} />} path="/about" />
        <Route element={<Cart setting={setting} />} path="/cart" />
        <Route element={<Favourity setting={setting} />} path="/favourites" />
        {isReg === false && (
          <>
            <Route element={<Login setting={setting} />} path="/login" />
            <Route
              element={<Registration setting={setting} />}
              path="/registration"
            />
          </>
        )}
        <Route
          element={<WeatherGift setting={setting} />}
          path="/weather-gift"
        />
        <Route element={<Sweets setting={setting} />} path="/sweets" />
        <Route element={<Honny setting={setting} />} path="/honny" />
        <Route element={<Cooking setting={setting} />} path="/cooking" />
        <Route element={<Navigate to={"/"} />} path="*" />
        <Route element={<Admin />} path="/admin/*" />
        <Route element={<Raiting setting={setting} />} path="/raiting" />
        <Route element={<Item setting={setting} />} path="/item/:id" />
      </Routes>
      <Footer setting={setting} />
    </BrowserRouter>
  );
};

export default AppRouter;
