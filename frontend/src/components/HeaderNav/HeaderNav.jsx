import React from "react";
import { NavLink } from "react-router-dom";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import styles from "./HeaderNav.module.scss";

const HeaderNav = ({ setView, setPage }) => {
  return (
    <>
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
    </>
  );
};

export default HeaderNav;
