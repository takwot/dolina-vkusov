import React, { useState } from "react";
import styles from "../Modals.module.scss";
import BackContainer from "../BackContainer/BackContainer";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAll } from "../../../../store/reducers/pathReducer";

const Honny = ({ setPageView }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.main_container_} style={{ border: "none" }}>
      <BackContainer setView={setPageView} />
      <div className={styles.container}>
        <NavLink
          className={styles.link}
          to={"/honny?id=Продукция пчеловодства&mini=Мед"}
          onClick={() => {
            dispatch(
              setAll({
                type: "Продукция пчеловодства",
                category: "Мед",
              })
            );
          }}
        >
          Мед
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/honny?id=Продукция пчеловодства&mini=Пыльца"}
          onClick={() => {
            dispatch(
              setAll({
                type: "Продукция пчеловодства",
                category: "Пыльца",
              })
            );
          }}
        >
          Пыльца
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/honny?id=Продукция пчеловодства&mini=Перга"}
          onClick={() => {
            dispatch(
              setAll({
                type: "Продукция пчеловодства",
                category: "Перга",
              })
            );
          }}
        >
          Перга
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/honny?id=Продукция пчеловодства&mini=Маточное молочко"}
          onClick={() => {
            dispatch(
              setAll({
                type: "Продукция пчеловодства",
                category: "Маточное молочко",
              })
            );
          }}
        >
          Маточное молочко
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/honny?id=Продукция пчеловодства&mini=Трутневое молочко"}
          onClick={() => {
            dispatch(
              setAll({
                type: "Продукция пчеловодства",
                category: "Трутневое молочко",
              })
            );
          }}
        >
          Трутневое молочко
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/honny?id=Продукция пчеловодства&mini=Огневка"}
          onClick={() => {
            dispatch(
              setAll({
                type: "Продукция пчеловодства",
                category: "Огневка",
              })
            );
          }}
        >
          Огневка
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/honny?id=Продукция пчеловодства&mini=Подмор"}
          onClick={() => {
            dispatch(
              setAll({
                type: "Продукция пчеловодства",
                category: "Подмор",
              })
            );
          }}
        >
          Подмор
        </NavLink>
      </div>
    </div>
  );
};

export default Honny;
