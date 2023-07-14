import React from "react";
import styles from "./Health.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setType } from "../../../store/reducers/pathReducer";

const Health = ({ setView }) => {
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
        <div>
          <NavLink
            className={styles.bold}
            to={"/sweets?id=Конфеты Нальчик"}
            onClick={() => {
              dispatch(setType("Конфеты Нальчик"));
            }}
          >
            Конфеты Нальчик
          </NavLink>
          <NavLink
            className={styles.bold}
            to={"/sweets?id=Конфеты из Ирана"}
            onClick={() => {
              dispatch(setType("Конфеты из Ирана"));
            }}
          >
            Конфеты из Ирана
          </NavLink>
          <NavLink
            className={styles.bold}
            to={"/sweets?id=Конфеты из Турции"}
            onClick={() => {
              dispatch(setType("Конфеты из Турции"));
            }}
          >
            Конфеты из Турции
          </NavLink>
          <NavLink
            className={styles.bold}
            to={"/sweets?id=Подарочные коробки"}
            onClick={() => {
              dispatch(setType("Подарочные коробки"));
            }}
          >
            Подарочные коробки
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Health;
