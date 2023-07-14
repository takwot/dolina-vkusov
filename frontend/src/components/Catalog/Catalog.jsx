import React from "react";
import styles from "./Catalog.module.scss";
import { NavLink } from "react-router-dom";

const Catalog = () => {
  return (
    <div className={styles.main_container}>
      <p>Каталог</p>
      <div className={styles.container}>
        <NavLink>Дары природы</NavLink>
        <div>
          <NavLink>Лечебные горные травы</NavLink>
          <NavLink>Целебные средства</NavLink>
          <NavLink>Мази</NavLink>
          <NavLink>Бальзамы</NavLink>
          <NavLink>Животный жир</NavLink>
          <NavLink>Монастырская продукция</NavLink>
          <NavLink>Мыло ручной работы</NavLink>
          <NavLink>Для ванн и купелей</NavLink>
          <NavLink>Шерстяные изделия и трикотаж</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
