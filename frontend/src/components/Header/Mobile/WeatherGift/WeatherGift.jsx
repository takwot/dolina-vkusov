import React, { useState } from "react";
import styles from "../Modals.module.scss";
import BackContainer from "../BackContainer/BackContainer";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setType } from "../../../../store/reducers/pathReducer";

const WeatherGift = ({ setPageView }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.main_container} style={{ border: "none" }}>
      <BackContainer setView={setPageView} />
      <div className={styles.container} style={{ border: "none" }}>
        <NavLink
          className={styles.link}
          to={"/weather-gift?id=Лечебные горные травы"}
          onClick={() => {
            dispatch(setType("Лечебные горные травы"));
          }}
        >
          Лечебные горные травы
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/weather-gift?id=Целебные средства"}
          onClick={() => {
            dispatch(setType("Целебные средства"));
          }}
        >
          Целебные средства
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/weather-gift?id=Мази"}
          onClick={() => {
            dispatch(setType("Мази"));
          }}
        >
          Мази
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/weather-gift?id=Бальзамы"}
          onClick={() => {
            dispatch(setType("Бальзамы"));
          }}
        >
          Бальзамы
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/weather-gift?id=Животный жир"}
          onClick={() => {
            dispatch(setType("Животный жир"));
          }}
        >
          Животный жир
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/weather-gift?id=Монастырская продукция"}
          onClick={() => {
            dispatch(setType("Монастырская продукция"));
          }}
        >
          Монастырская продукция
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/weather-gift?id=Мыло ручной работы"}
          onClick={() => {
            dispatch(setType("Мыло ручной работы"));
          }}
        >
          Мыло ручной работы
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/weather-gift?id=Для ванн и купелей"}
          onClick={() => {
            dispatch(setType("Для ванн и купелей"));
          }}
        >
          Для ванн и купелей
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/weather-gift?id=Шерстяные изделия и трикотаж"}
          onClick={() => {
            dispatch(setType("Шерстяные изделия и трикотаж"));
          }}
        >
          Шерстяные изделия и трикотаж
        </NavLink>
      </div>
    </div>
  );
};

export default WeatherGift;
