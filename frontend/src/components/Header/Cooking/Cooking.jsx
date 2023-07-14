import React from "react";
import styles from "./Cooking.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setType } from "../../../store/reducers/pathReducer";

const Cooking = ({ setView }) => {
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
            to={"/cooking?id=Сыры"}
            onClick={() => {
              dispatch(setType("Сыры"));
            }}
          >
            Сыры
          </NavLink>
          <NavLink
            className={styles.bold}
            to={"/cooking?id=Колбасы"}
            onClick={() => {
              dispatch(setType("Колбасы"));
            }}
          >
            Колбасы
          </NavLink>
          <NavLink
            className={styles.bold}
            to={"/cooking?id=Суджук"}
            onClick={() => {
              dispatch(setType("Суджук"));
            }}
          >
            Суджук
          </NavLink>
          <NavLink
            className={styles.bold}
            to={"/cooking?id=Бастурма"}
            onClick={() => {
              dispatch(setType("Бастурма"));
            }}
          >
            Бастурма
          </NavLink>
          <NavLink
            className={styles.bold}
            to={"/cooking?id=Масла"}
            onClick={() => {
              dispatch(setType("Масла"));
            }}
          >
            Масла
          </NavLink>
          <NavLink
            className={styles.bold}
            to={"/cooking?id=Специи"}
            onClick={() => {
              dispatch(setType("Специи"));
            }}
          >
            Специи
          </NavLink>
          <NavLink
            className={styles.bold}
            to={"/cooking?id=Плоды, ягоды"}
            onClick={() => {
              dispatch(setType("Плоды, ягоды"));
            }}
          >
            Плоды, ягоды
          </NavLink>
        </div>
        <div>
          <NavLink
            className={styles.bold}
            to={"/cooking?id=Консервация"}
            onClick={() => {
              dispatch(setType("Консервация"));
            }}
          >
            Консервация
          </NavLink>
          <NavLink
            className={styles.bold}
            to={"/cooking?id=Чаи"}
            onClick={() => {
              dispatch(setType("Чаи"));
            }}
          >
            Чаи
          </NavLink>
          <NavLink
            className={styles.bold}
            to={"/cooking?id=Кофе"}
            onClick={() => {
              dispatch(setType("Кофе"));
            }}
          >
            Кофе
          </NavLink>
          <NavLink
            className={styles.bold}
            to={"/cooking?id=Сухофрукты"}
            onClick={() => {
              dispatch(setType("Сухофрукты"));
            }}
          >
            Сухофрукты
          </NavLink>
          <NavLink
            className={styles.bold}
            to={"/cooking?id=Орехи"}
            onClick={() => {
              dispatch(setType("Орехи"));
            }}
          >
            Орехи
          </NavLink>
          <NavLink
            className={styles.bold}
            to={"/cooking?id=Соусы"}
            onClick={() => {
              dispatch(setType("Соусы"));
            }}
          >
            Соусы
          </NavLink>
          <NavLink
            className={styles.bold}
            to={"/cooking?id=Аджика"}
            onClick={() => {
              dispatch(setType("Аджика"));
            }}
          >
            Аджика
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cooking;
