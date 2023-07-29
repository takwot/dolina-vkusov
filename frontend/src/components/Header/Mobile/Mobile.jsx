import React, { useEffect, useState } from "react";
import styles from "./Mobile.module.scss";
import logo from "../../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Modal } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import ModalMenu from "./ModalMenu";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../../../api/api";

const Mobile = ({ setting }) => {
  const [view, setView] = useState(false);
  const [input, setInput] = useState(false);
  const [allItems, setAllItems] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    api.allItem().then(res => {
      setAllItems(res.data);
    });
  }, []);

  const filteredItems = allItems.filter(user => {
    return user.name.toLowerCase().includes(text.toLowerCase());
  });

  const cart = useSelector(state => state.user.cart);
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.logo_container}>
          <NavLink to={"/"}>
            <img src={logo} />
          </NavLink>
        </div>
        <div className={styles.container}>
          <MenuIcon
            onClick={() => {
              setView(true);
            }}
            sx={{ fontSize: 30, color: "#c273e7" }}
          />
          <div>
            <SearchIcon
              onClick={() => {
                setView(false);
                setInput(!input);
              }}
              sx={{ color: "#c273e7", cursor: "pointer", fontSize: 25 }}
            />
            <NavLink to={"/favourites"}>
              <FavoriteBorderOutlinedIcon
                sx={{ fontSize: 30, color: "#c273e7" }}
              />
            </NavLink>
            <NavLink to={"/cart"}>
              <Badge badgeContent={`${cart.length}`} color="secondary">
                <ShoppingCartOutlinedIcon
                  sx={{ fontSize: 30, color: "#c273e7" }}
                />
              </Badge>
            </NavLink>
          </div>
        </div>
        {input && (
          <div className={styles.search_container}>
            <input
              value={text}
              onChange={e => {
                setText(e.target.value);
              }}
              placeholder="Введите название товара"
            />
            {text !== "" &&
              filteredItems.map(el => (
                <NavLink to={`/item/${el._id}`}>{el.name}</NavLink>
              ))}
          </div>
        )}
      </div>
      <AnimatePresence>
        {view && <ModalMenu setting={setting} setView={setView} />}
      </AnimatePresence>
    </>
  );
};

export default Mobile;
