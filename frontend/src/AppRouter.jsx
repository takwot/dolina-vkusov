import React, { useEffect } from "react";
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
  const dispatch = useDispatch();
  const email = cookies.email;
  const password = cookies.password;
  useEffect(() => {
    api.loginUser(email, password).then(res => {
      if (res.data.message == "Error") {
      } else {
        dispatch(setUser(res.data));
        dispatch(setCart(res.data.cart));
        dispatch(setFavourity(res.data.favourite));
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<Favourity />} path="/favourites" />
        {isReg === false && (
          <>
            <Route element={<Login />} path="/login" />
            <Route element={<Registration />} path="/registration" />
          </>
        )}
        <Route element={<WeatherGift />} path="/weather-gift" />
        <Route element={<Sweets />} path="/sweets" />
        <Route element={<Honny />} path="/honny" />
        <Route element={<Cooking />} path="/cooking" />
        <Route element={<Navigate to={"/"} />} path="*" />
        <Route element={<Admin />} path="/admin" />
        <Route element={<Raiting />} path="/raiting" />
        <Route element={<Item />} path="/item/:id" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
