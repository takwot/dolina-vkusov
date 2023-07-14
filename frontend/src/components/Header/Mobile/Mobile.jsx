import React, { useState } from "react";
import styles from "./Mobile.module.scss";
import logo from "../../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { AnimatePresence, motion } from "framer-motion";
import ModalMenu from "./ModalMenu";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Mobile = () => {
  const [view, setView] = useState(false);
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
            sx={{ fontSize: 30, color: "#e7a173" }}
          />
          <div>
            <NavLink to={"/favourites"}>
              <FavoriteBorderOutlinedIcon
                sx={{ fontSize: 30, color: "#e7a173" }}
              />
            </NavLink>
            <NavLink to={"/cart"}>
              <Badge badgeContent={`${cart.length}`} color="secondary">
                <ShoppingCartOutlinedIcon
                  sx={{ fontSize: 30, color: "#e7a173" }}
                />
              </Badge>
            </NavLink>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {view && <ModalMenu setView={setView} />}
      </AnimatePresence>
    </>
  );
};

export default Mobile;
