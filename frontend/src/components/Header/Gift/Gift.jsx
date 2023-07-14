import React from "react";
import styles from "./Gift.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAll, setType } from "../../../store/reducers/pathReducer";

const Gift = ({ setView }) => {
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
            to={"/honny?id=Продукция пчеловодства"}
            onClick={() => {
              dispatch(setType("Продукция пчеловодства"));
            }}
          >
            Продукция пчеловодства
          </NavLink>
          <NavLink
            className={styles.text}
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
            className={styles.text}
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
            className={styles.text}
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
            className={styles.text}
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
            className={styles.text}
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
            className={styles.text}
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
            className={styles.text}
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
        <div>
          <NavLink
            className={styles.bold}
            to={"/honny?id=Восточные сладости"}
            onClick={() => {
              dispatch(setType("Восточные сладости"));
            }}
          >
            Восточные сладости
          </NavLink>
          <NavLink
            className={styles.text}
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
            className={styles.text}
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
            className={styles.text}
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
            className={styles.text}
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
            className={styles.text}
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
            className={styles.text}
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
            className={styles.text}
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
            className={styles.text}
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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <NavLink
              className={styles.bold}
              to={"/honny?id=Варенье"}
              onClick={() => {
                dispatch(setType("Варенье"));
              }}
            >
              Варенье
            </NavLink>
          </div>
          <div>
            <NavLink
              className={styles.bold}
              to={"/honny?id=Конфитюр"}
              onClick={() => {
                dispatch(setType("Конфитюр"));
              }}
            >
              Конфитюр
            </NavLink>
          </div>
          <div>
            <NavLink
              className={styles.bold}
              to={"/honny?id=Продукция для диабетиков"}
              onClick={() => {
                dispatch(setType("Продукция для диабетиков"));
              }}
            >
              Продукция для диабетиков
            </NavLink>
          </div>
          <div>
            <NavLink
              className={styles.bold}
              to={"/honny?id=Урбеч"}
              onClick={() => {
                dispatch(setType("Урбеч"));
              }}
            >
              Урбеч
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
