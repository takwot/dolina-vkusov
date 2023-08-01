import React, { useState } from "react";
import styles from "./Header.module.scss";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { NavLink } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Production from "./Production/Production";
import Health from "./Health/Health";
import Gift from "./Gift/Gift";
import logo from "../../assets/logo.png";
import Cooking from "./Cooking/Cooking";
import Mobile from "./Mobile/Mobile";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import HeaderNav from "../HeaderNav/HeaderNav";
import Input from "../Input/Input";
import { useCookies } from "react-cookie";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Header = ({ setting }) => {
  const [view, setView] = useState(false);
  const [page, setPage] = useState(0);
  const [showInput, setShowInput] = useState(false);

  const user = useSelector(state => state.user);
  const cart = useSelector(state => state.user.cart);
  const favourity = useSelector(state => state.user.favourity);
  const [cookies, setCookie, removeCookie] = useCookies();

  return (
    <>
      <div className={styles.top_container}>
        <NavLink className={styles.text} to={"/about"}>
          О нас
        </NavLink>
        <NavLink className={styles.text} to={"/raiting"}>
          Отзывы
        </NavLink>
        <div className={styles.reg_container}>
          <PermIdentityOutlinedIcon sx={{ color: "white" }} />
          {user.isReg == true ? (
            <>
              <p>{user.user.name}</p>
              <p
                onClick={() => {
                  removeCookie("email");
                  removeCookie("password");
                  window.location.reload();
                }}
              >
                Выйти
              </p>
            </>
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
          <NavLink className={styles.text} to={"/admin/main"}>
            Админ панель
          </NavLink>
        )}
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.container}>
          <NavLink to={"/"} style={{ textDecoration: "none", width: "30%" }}>
            <div className={styles.cont_left}>
              <div>
                <img src={logo} />
              </div>
              <div>
                <p>Деликатесы кавказа</p>
              </div>
            </div>
          </NavLink>
          <div className={styles.cont_right}>
            <div className={styles.info_container}>
              <div
                style={{ display: "flex", gap: "6px", alignItems: "center" }}
              >
                <LocalPhoneIcon sx={{ color: "#9c52b3" }} />
                <p className={styles.number_text}>{setting.phone}</p>
              </div>
              <p className={styles.graph_text}>{setting.time}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navigation_container}>
        {showInput ? (
          <Input />
        ) : (
          <HeaderNav setPage={setPage} setView={setView} />
        )}
        <div className={styles.cart_container}>
          <SearchIcon
            onClick={() => {
              setShowInput(!showInput);
            }}
            sx={{ color: "#c273e7", cursor: "pointer", fontSize: 25 }}
          />
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
