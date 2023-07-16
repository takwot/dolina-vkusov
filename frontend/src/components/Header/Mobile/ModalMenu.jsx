import styles from "./Mobile.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import WeatherGift from "./WeatherGift/WeatherGift";
import Cooking from "./Cooking/Cooking";
import Sweets from "./Sweets/Sweets";
import HonnyAndSweets from "./HonnyAndSweets/HonnyAndSweets";
import { useSelector } from "react-redux";

const ModalMenu = ({ setView, setting }) => {
  const [view, setViews] = useState(false);
  const user = useSelector(state => state.user);
  const [page, setPage] = useState(0);
  return (
    <motion.div
      transition={{ duration: 0.3 }}
      animate={{
        width: "70%",
      }}
      visible={{
        transition: {
          duration: 0.2,
        },
      }}
      exit={{
        width: 0,
        transition: {
          duration: 0.3,
        },
      }}
      className={styles.navigation}
    >
      <motion.div
        animate={{
          opacity: 1,
          transition: {
            delay: 0.15,
          },
        }}
        visible={{
          opacity: 1,
          transition: {
            duration: 0.2,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0,
          },
        }}
        style={{
          width: "100%",
          opacity: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className={styles.nav_top_container}>
          <div>
            <p className={styles.number_text}>{setting.phone}</p>
            <p>{setting.time}</p>
          </div>
          <CloseIcon
            sx={{ fontSize: 30, color: "#c273e7" }}
            onClick={() => {
              setView(false);
            }}
          />
        </div>
        <div className={styles.variants_container}>
          {view && page == 1 && <WeatherGift setPageView={setViews} />}
          {view && page == 2 && <Sweets setPageView={setViews} />}
          {view && page == 3 && <HonnyAndSweets setPageView={setViews} />}
          {view && page == 4 && <Cooking setPageView={setViews} />}
          <div style={{ border: "none" }}>
            <NavLink className={styles.link} to={"/weather-gift"}>
              Дары природы
            </NavLink>
            <ArrowForwardIosIcon
              sx={{ fontSize: 16 }}
              onClick={() => {
                setViews(true);
                setPage(1);
              }}
            />
          </div>
          <div style={{ border: "none" }}>
            <NavLink className={styles.link} to={"/sweets"}>
              Конфеты
            </NavLink>
            <ArrowForwardIosIcon
              sx={{ fontSize: 16 }}
              onClick={() => {
                setViews(true);
                setPage(2);
              }}
            />
          </div>
          <div style={{ border: "none" }}>
            <NavLink className={styles.link} to={"/honny"}>
              Мед и сладости
            </NavLink>
            <ArrowForwardIosIcon
              sx={{ fontSize: 16 }}
              onClick={() => {
                setViews(true);
                setPage(3);
              }}
            />
          </div>
          <div style={{ border: "none" }}>
            <NavLink className={styles.link} to={"/cooking"}>
              Кулинария
            </NavLink>
            <ArrowForwardIosIcon
              sx={{ fontSize: 16 }}
              onClick={() => {
                setViews(true);
                setPage(4);
              }}
            />
          </div>
        </div>
        <div className={styles.navigation_container}>
          <NavLink className={styles.link} to={"/about"}>
            О нас
          </NavLink>
          <NavLink className={styles.link} to={"/raiting"}>
            Отзывы
          </NavLink>
          <div>
            <PersonIcon sx={{ color: "#9c52b3" }} />
            {user.isReg == true ? (
              <p className={styles.text}>{user.user.name}</p>
            ) : (
              <>
                {" "}
                <NavLink className={styles.text} to={"/login"}>
                  Вход
                </NavLink>
                <p className={styles.text}>/</p>
                <NavLink className={styles.text} to={"/registration"}>
                  Регистрация
                </NavLink>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ModalMenu;
