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

const Main = ({ setting }) => {
  const [img, setImg] = useState([]);

  useEffect(() => {
    api.getImg().then(res => {
      setImg(res.data);
      console.log(res.data);
    });
  }, []);

  const user = useSelector(state => state.user);
  return (
    <>
      <Header setting={setting} />
      <div className={styles.main_container}>
        <Carucel>
          {img.map((el, index) => (
            <img src={el} key={index} />
          ))}
        </Carucel>
        <div className={styles.img_container}>
          <img src={destop_img} className={styles.des_img} />
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
