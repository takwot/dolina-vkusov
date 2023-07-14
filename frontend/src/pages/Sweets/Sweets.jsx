import React, { useEffect, useState } from "react";
import styles from "./Sweets.module.scss";
import CardItem from "../../components/CardItem/CardItem";
import api from "../../api/api";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Sweets = () => {
  const [data, setData] = useState([]);
  const path = useSelector(state => state.path.type);
  const url = useLocation();

  useEffect(() => {
    const type = "Конфеты";
    if (url.search == "") {
      api.getItemWithOutAll(type).then(res => {
        setData(res.data);
      });
    } else {
      api.getItemWithCategory(path, type).then(res => {
        setData(res.data);
      });
    }
  }, [path, url]);

  return (
    <>
      <Header />
      <div className={styles.main_container}>
        <div
          className={styles.container}
          onClick={() => {
            console.log(data);
          }}
        >
          {data.length == 0
            ? "Ничего не найдено"
            : data.map(function (el) {
                return (
                  <CardItem
                    img={el.img[0]}
                    // img={
                    //   "http://localhost:80/file?filename=1689343074269-img.png"
                    // }
                    key={el.id}
                    name={el.name}
                    price={el.price}
                    id={el._id}
                  />
                );
              })}
        </div>
      </div>
    </>
  );
};

export default Sweets;
