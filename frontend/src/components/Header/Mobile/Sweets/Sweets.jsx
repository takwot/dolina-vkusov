import React, { useState } from "react";
import styles from "../Modals.module.scss";
import BackContainer from "../BackContainer/BackContainer";
import { NavLink } from "react-router-dom";
import { setType } from "../../../../store/reducers/pathReducer";
import { useDispatch } from "react-redux";

const Sweets = ({ setPageView }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.main_container} style={{ border: "none" }}>
      <BackContainer setView={setPageView} />
      <div className={styles.container}>
        <NavLink
          className={styles.link}
          to={"/sweets?id=Конфеты Нальчик"}
          onClick={() => {
            dispatch(setType("Конфеты Нальчик"));
          }}
        >
          Конфеты Нальчик
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/sweets?id=Конфеты из Ирана"}
          onClick={() => {
            dispatch(setType("Конфеты из Ирана"));
          }}
        >
          Конфеты из Ирана
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/sweets?id=Конфеты из Турции"}
          onClick={() => {
            dispatch(setType("Конфеты из Турции"));
          }}
        >
          Конфеты из Турции
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/sweets?id=Подарочные коробки"}
          onClick={() => {
            dispatch(setType("Подарочные коробки"));
          }}
        >
          Подарочные коробки
        </NavLink>
      </div>
    </div>
  );
};

export default Sweets;
