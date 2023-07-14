import React, { useState } from "react";
import styles from "./Main.module.scss";
import img from "../../assets/desctop.png";
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

const Main = () => {
  const [img, setImg] = useState([]);
  const user = useSelector(state => state.user);
  return (
    <>
      <Header />
      <div className={styles.main_container}>
        <Carucel>
          {img.map(function (el) {
            return <img src={el.img} />;
          })}
        </Carucel>
        <div className={styles.img_container}>
          <img src={img} className={styles.des_img} />
          <img src={first} className={styles.mobile_img} />
          <img src={second} className={styles.mobile_img} />
          <img src={third} className={styles.mobile_img} />
          <img src={fouth} className={styles.mobile_img} />
        </div>
        <div className={styles.news_container}>
          <p
            className={styles.text}
            onClick={() => {
              console.log(user);
            }}
          >
            Лидеры продаж
          </p>
          <div className={styles.item_container}>
            Тут пока ничего нет
            {/* <CardItem />
          <CardItem />
          <CardItem />
          <CardItem /> */}
          </div>
        </div>
        <Questions />
      </div>
    </>
  );
};

export default Main;
