import React, { useEffect, useState } from "react";
import styles from "./Sweets.module.scss";
import CardItem from "../../components/CardItem/CardItem";
import api from "../../api/api";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Sweets = ({ setting }) => {
  const [data, setData] = useState([]);
  const path = useSelector(state => state.path.type);
  const cart = useSelector(state => state.user.cart);
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
      <Header setting={setting} />
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
                    img={el.img}
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
