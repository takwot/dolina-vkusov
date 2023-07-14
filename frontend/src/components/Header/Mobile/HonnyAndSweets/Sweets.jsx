import React, { useState } from "react";
import styles from "../Modals.module.scss";
import BackContainer from "../BackContainer/BackContainer";
import { NavLink } from "react-router-dom";
import { setAll } from "../../../../store/reducers/pathReducer";

const Sweets = ({ setPageView }) => {
  return (
    <div className={styles.main_container_} style={{ border: "none" }}>
      <BackContainer setView={setPageView} />
      <div className={styles.container}>
        <NavLink
          className={styles.link}
          to={"/honny?id=Восточные сладости&mini=Рахат лукум"}
          onClick={() => {
            dispatch(
              setAll({
                type: "Восточные сладости",
                category: "Рахат лукум",
              })
            );
          }}
        >
          Рахат лукум
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/honny?id=Восточные сладости&mini=Нуга"}
          onClick={() => {
            dispatch(
              setAll({
                type: "Восточные сладости",
                category: "Нуга",
              })
            );
          }}
        >
          Нуга
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/honny?id=Восточные сладости&mini=Чурчхела"}
          onClick={() => {
            dispatch(
              setAll({
                type: "Восточные сладости",
                category: "Чурчхела",
              })
            );
          }}
        >
          Чурчхела
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/honny?id=Восточные сладости&mini=Пастила"}
          onClick={() => {
            dispatch(
              setAll({
                type: "Восточные сладости",
                category: "Пастила",
              })
            );
          }}
        >
          Пастила
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/honny?id=Восточные сладости&mini=Пахлава"}
          onClick={() => {
            dispatch(
              setAll({
                type: "Восточные сладости",
                category: "Пахлава",
              })
            );
          }}
        >
          Пахлава
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/honny?id=Восточные сладости&mini=Халва"}
          onClick={() => {
            dispatch(
              setAll({
                type: "Восточные сладости",
                category: "Халва",
              })
            );
          }}
        >
          Халва
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/honny?id=Восточные сладости&mini=Щербет"}
          onClick={() => {
            dispatch(
              setAll({
                type: "Восточные сладости",
                category: "Щербет",
              })
            );
          }}
        >
          Щербет
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/honny?id=Восточные сладости&mini=Джезерье"}
          onClick={() => {
            dispatch(
              setAll({
                type: "Восточные сладости",
                category: "Джезерье",
              })
            );
          }}
        >
          Джезерье
        </NavLink>
      </div>
    </div>
  );
};

export default Sweets;
