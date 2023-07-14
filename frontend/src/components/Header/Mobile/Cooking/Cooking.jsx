import React, { useState } from "react";
import styles from "../Modals.module.scss";
import BackContainer from "../BackContainer/BackContainer";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setType } from "../../../../store/reducers/pathReducer";

const Cooking = ({ setPageView }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.main_container} style={{ border: "none" }}>
      <BackContainer setView={setPageView} />
      <div className={styles.container}>
        <NavLink
          className={styles.link}
          to={"/cooking?id=Сыры"}
          onClick={() => {
            dispatch(setType("Сыры"));
          }}
        >
          Сыры
        </NavLink>
        <NavLink
          className={styles.link}
          onClick={() => {
            dispatch(setType("Колбасы"));
          }}
        >
          Колбасы
        </NavLink>
        <NavLink
          className={styles.link}
          onClick={() => {
            dispatch(setType("Суджук"));
          }}
        >
          Суджук
        </NavLink>
        <NavLink
          className={styles.link}
          onClick={() => {
            dispatch(setType("Бастурма"));
          }}
        >
          Бастурма
        </NavLink>
        <NavLink
          className={styles.link}
          onClick={() => {
            dispatch(setType("Масла"));
          }}
        >
          Масла
        </NavLink>
        <NavLink
          className={styles.link}
          onClick={() => {
            dispatch(setType("Специи"));
          }}
        >
          Специи
        </NavLink>
        <NavLink
          className={styles.link}
          onClick={() => {
            dispatch(setType("Плоды, ягоды"));
          }}
        >
          Плоды, ягоды
        </NavLink>
        <NavLink
          className={styles.link}
          onClick={() => {
            dispatch(setType("Чаи"));
          }}
        >
          Чаи
        </NavLink>
        <NavLink
          className={styles.link}
          onClick={() => {
            dispatch(setType("Кофе"));
          }}
        >
          Кофе
        </NavLink>
        <NavLink
          className={styles.link}
          onClick={() => {
            dispatch(setType("Сухофрукты"));
          }}
        >
          Сухофрукты
        </NavLink>
        <NavLink
          className={styles.link}
          onClick={() => {
            dispatch(setType("Орехи"));
          }}
        >
          Орехи
        </NavLink>
        <NavLink
          className={styles.link}
          onClick={() => {
            dispatch(setType("Соусы"));
          }}
        >
          Соусы
        </NavLink>
        <NavLink
          className={styles.link}
          onClick={() => {
            dispatch(setType("Аджика"));
          }}
        >
          Аджика
        </NavLink>
      </div>
    </div>
  );
};

export default Cooking;
