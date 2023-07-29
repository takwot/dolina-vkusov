import React, { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import destop_img from "../../assets/desctop.png";
import first from "../../assets/first_img.png";
import second from "../../assets/second_img.png";
import third from "../../assets/third_img.png";
import fouth from "../../assets/fourth_img.png";
import Carucel from "../../components/Carucel/Carucel";
import CardItem from "../../components/CardItem/CardItem";
import { NavLink } from "react-router-dom";
import Questions from "../../components/Questions/Questions";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import api from "../../api/api";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";

const Main = ({ setting }) => {
  const [img, setImg] = useState([]);

  useEffect(() => {
    api.getCarucelImg().then(res => {
      setImg(res.data);
    });
  }, []);

  const user = useSelector(state => state.user);
  return (
    <>
      <Header setting={setting} />
      <div className={styles.main_container}>
        <Carucel images={img} />

        <div className={styles.img_container}>
          <div className={styles.item}>
            <AppsOutlinedIcon sx={{ fontSize: "40px" }} />
            <p>Более 1000 товаров</p>
          </div>
          <div className={styles.item}>
            <SpaOutlinedIcon sx={{ fontSize: "40px" }} />
            <p>100% натуральный и органический продукт</p>
          </div>
          <div className={styles.item}>
            <ThumbUpOutlinedIcon sx={{ fontSize: "40px" }} />
            <p>40 проверенных брендов</p>
          </div>
          <div className={styles.item}>
            <LocalShippingOutlinedIcon sx={{ fontSize: "40px" }} />
            <p>Быстрая доставка по России</p>
          </div>
        </div>
        <div className={styles.news_container}>
          <p className={styles.text}>Лидеры продаж</p>
          <div className={styles.item_container}>Тут пока ничего нет</div>
        </div>
        <Questions />
      </div>
    </>
  );
};

export default Main;
