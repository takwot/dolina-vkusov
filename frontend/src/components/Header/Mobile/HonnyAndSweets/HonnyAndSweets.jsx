import React, { useState } from "react";
import styles from "../Modals.module.scss";
import BackContainer from "../BackContainer/BackContainer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import Honny from "./Honny";
import Sweets from "./Sweets";
import { useDispatch } from "react-redux";
import { setType } from "../../../../store/reducers/pathReducer";

const HonnyAndSweets = ({ setPageView }) => {
  const [view, setView] = useState(false);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className={styles.main_container} style={{ border: "none" }}>
      <BackContainer setView={setPageView} setViews={setView} />
      <div className={styles.container}>
        {view && page == 1 && <Honny setPageView={setView} />}
        {view && page == 2 && <Sweets setPageView={setView} />}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            border: "none",
          }}
        >
          <NavLink
            className={styles.link}
            to={"/honny?id=Продукция пчеловодства"}
            onClick={() => {
              dispatch(setType("Продукция пчеловодства"));
            }}
          >
            Продукция пчеловодства
          </NavLink>
          <ArrowForwardIosIcon
            sx={{ fontSize: 18, color: "#333" }}
            onClick={() => {
              setView(true);
              setPage(1);
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            border: "none",
          }}
        >
          <NavLink
            className={styles.link}
            to={"/honny?id=Восточные сладости"}
            onClick={() => {
              dispatch(setType("Восточные сладости"));
            }}
          >
            Восточные сладости
          </NavLink>
          <ArrowForwardIosIcon
            sx={{ fontSize: 18, color: "#333" }}
            onClick={() => {
              setView(true);
              setPage(2);
            }}
          />
        </div>
        <NavLink
          className={styles.link}
          to={"/honny?id=Варенье"}
          onClick={() => {
            dispatch(setType("Варенье"));
          }}
        >
          Варенье
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/honny?id=Конфитюр"}
          onClick={() => {
            dispatch(setType("Конфитюр"));
          }}
        >
          Конфитюр
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/honny?id=Продукция для диабетиков"}
          onClick={() => {
            dispatch(setType("Продукция для диабетиков"));
          }}
        >
          Продукция для диабетиков
        </NavLink>
        <NavLink
          className={styles.link}
          to={"/honny?id=Урбеч"}
          onClick={() => {
            dispatch(setType("Урбеч"));
          }}
        >
          Урбеч
        </NavLink>
      </div>
    </div>
  );
};

export default HonnyAndSweets;
