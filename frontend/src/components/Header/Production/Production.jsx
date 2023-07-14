import React from "react";
import styles from "./Production.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setType } from "../../../store/reducers/pathReducer";

const Production = ({ setView }) => {
  const dispatch = useDispatch();
  return (
    <div
      onMouseEnter={() => {
        setView(true);
      }}
      onMouseLeave={() => {
        setView(false);
      }}
      className={styles.main_container}
    >
      <div className={styles.content}>
        <div style={{ height: "40%" }}>
          <NavLink
            className={styles.bold}
            to={"/weather-gift?id=Лечебные горные травы"}
            onClick={() => {
              dispatch(setType("Лечебные горные травы"));
            }}
          >
            Лечебные горные травы
          </NavLink>
          <NavLink
            className={styles.bold}
            to={"/weather-gift?id=Целебные средства"}
            onClick={() => {
              dispatch(setType("Целебные средства"));
            }}
          >
            Целебные средства
          </NavLink>
          <NavLink
            className={styles.bold}
            to={"/weather-gift?id=Мази"}
            onClick={() => {
              dispatch(setType("Мази"));
            }}
          >
            Мази
          </NavLink>
          <NavLink
            className={styles.bold}
            to={"/weather-gift?id=Бальзамы"}
            onClick={() => {
              dispatch(setType("Бальзамы"));
            }}
          >
            Бальзамы
          </NavLink>
        </div>
        <div>
          <NavLink
            className={styles.bold}
            to={"/weather-gift?id=Животный жир"}
            onClick={() => {
              dispatch(setType("Животный жир"));
            }}
          >
            Животный жир
          </NavLink>
          <NavLink
            className={styles.bold}
            to={"/weather-gift?id=Монастырская продукция"}
            onClick={() => {
              dispatch(setType("Монастырская продукция"));
            }}
          >
            Монастырская продукция
          </NavLink>
          <NavLink
            className={styles.bold}
            to={"/weather-gift?id=Мыло ручной работы"}
            onClick={() => {
              dispatch(setType("Мыло ручной работы"));
            }}
          >
            Мыло ручной работы
          </NavLink>
          <NavLink
            className={styles.bold}
            to={"/weather-gift?id=Для ванн и купелей"}
            onClick={() => {
              dispatch(setType("Для ванн и купелей"));
            }}
          >
            Для ванн и купелей
          </NavLink>
          <NavLink
            className={styles.bold}
            to={"/weather-gift?id=Шерстяные изделия и трикотаж"}
            onClick={() => {
              dispatch(setType("Конфеты из Турции"));
            }}
          >
            Шерстяные изделия и трикотаж
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Production;
