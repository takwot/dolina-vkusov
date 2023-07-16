import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { NavLink } from "react-router-dom";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Production from "./Production/Production";
import Health from "./Health/Health";
import Gift from "./Gift/Gift";
import logo from "../../assets/logo.png";
import Cooking from "./Cooking/Cooking";
import Mobile from "./Mobile/Mobile";
import { useSelector } from "react-redux";
import api from "../../api/api";

const Header = ({ setting }) => {
  const [view, setView] = useState(false);
  const [page, setPage] = useState(0);
  const [showInput, setShowInput] = useState();

  const user = useSelector(state => state.user);
  const cart = useSelector(state => state.user.cart);
  const favourity = useSelector(state => state.user.favourity);

  return (
    <>
      <div className={styles.top_container}>
        <NavLink className={styles.text} to={"/about"}>
          О нас
        </NavLink>
        {/* <NavLink className={styles.text}>Доставка и оплата</NavLink> */}
        <NavLink className={styles.text} to={"/raiting"}>
          Отзывы
        </NavLink>
        <div className={styles.reg_container}>
          <PermIdentityOutlinedIcon sx={{ color: "white" }} />
          {user.isReg == true ? (
            <p
              onClick={() => {
                console.log(cart[0]);
              }}
            >
              {user.user.name}
            </p>
          ) : (
            <>
              <NavLink className={styles.text} to={"/login"}>
                Войти
              </NavLink>
              <p>/</p>
              <NavLink className={styles.text} to={"/registration"}>
                Регистрация
              </NavLink>
            </>
          )}
        </div>
        {user.user.email == "I.maltsev95@gmail.com" && (
          <NavLink className={styles.text} to={"/admin"}>
            Админ панель
          </NavLink>
        )}
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.container}>
          <NavLink to={"/"} style={{ textDecoration: "none" }}>
            <div className={styles.cont_left}>
              <div>
                <img src={logo} />
              </div>
              <div>
                <p>Деликатесы</p>
                <p>со всего мира</p>
              </div>
            </div>
          </NavLink>
          <div className={styles.cont_right}>
            <div className={styles.info_container}>
              <p className={styles.number_text}>{setting.phone}</p>
              <p className={styles.graph_text}>{setting.time}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navigation_container}>
        <div
          className={styles.nav}
          onMouseEnter={() => {
            setView(true);
            setPage(1);
          }}
          onMouseLeave={() => {
            setView(false);
          }}
        >
          <NavLink className={styles.link} to={"/weather-gift"}>
            <p>Дары природы</p>
          </NavLink>
          <div className={styles.arrow}>
            <ArrowBackIosNewOutlinedIcon sx={{ fontSize: "18px" }} />
          </div>
        </div>
        <div
          className={styles.nav}
          onMouseEnter={() => {
            setView(true);
            setPage(2);
          }}
          onMouseLeave={() => {
            setView(false);
          }}
        >
          <NavLink className={styles.link} to={"/sweets"}>
            <p>Конфеты</p>
          </NavLink>
          <div className={styles.arrow}>
            <ArrowBackIosNewOutlinedIcon sx={{ fontSize: "18px" }} />
          </div>
        </div>
        <div
          className={styles.nav}
          onMouseEnter={() => {
            setView(true);
            setPage(3);
          }}
          onMouseLeave={() => {
            setView(false);
          }}
        >
          <NavLink className={styles.link} to={"/honny"}>
            <p>Мед и сладости</p>
          </NavLink>
          <div className={styles.arrow}>
            <ArrowBackIosNewOutlinedIcon sx={{ fontSize: "18px" }} />
          </div>
        </div>
        <div
          className={styles.nav}
          onMouseEnter={() => {
            setView(true);
            setPage(4);
          }}
          onMouseLeave={() => {
            setView(false);
          }}
        >
          <NavLink className={styles.link} to={"/cooking"}>
            <p>Кулинария</p>
          </NavLink>
          <div className={styles.arrow}>
            <ArrowBackIosNewOutlinedIcon sx={{ fontSize: "18px" }} />
          </div>
        </div>

        <div className={styles.cart_container}>
          <NavLink style={{ textDecoration: "none" }} to={"/favourites"}>
            <div className={styles.item_container}>
              <FavoriteBorderOutlinedIcon
                sx={{ color: "#c273e7", cursor: "pointer" }}
              />
              <p>Избранное ({favourity.length})</p>
            </div>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to={"/cart"}>
            <div className={styles.item_container}>
              <ShoppingCartIcon sx={{ color: "#c273e7", cursor: "pointer" }} />
              <p>{cart.length}</p>
            </div>
          </NavLink>
        </div>
      </div>
      {view && (
        <div className={styles.more_info_container}>
          {page == 1 && <Production setView={setView} />}
          {page == 2 && <Health setView={setView} />}
          {page == 3 && <Gift setView={setView} />}
          {page == 4 && <Cooking setView={setView} />}
        </div>
      )}
      <Mobile setting={setting} />
    </>
  );
};

export default Header;
