import React, { useEffect, useState } from "react";
import styles from "./Honny.module.scss";
import CardItem from "../../components/CardItem/CardItem";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import api from "../../api/api";

const Honny = ({ setting }) => {
  const [data, setData] = useState([]);
  const path = useSelector(state => state.path.type);
  const category = useSelector(state => state.path.category);
  const url = useLocation();

  useEffect(() => {
    const type = "Дары природы";
    if (url.search == "") {
      api.getItemWithOutAll(type).then(res => {
        setData(res.data);
      });
    } else {
      if (category == "") {
        api.getItemWithCategory(path, type).then(res => {
          setData(res.data);
        });
      } else {
        api.getItem(path, type, category).then(res => {
          setData(res.data);
        });
      }
    }
  }, [path, url]);
  return (
    <>
      <Header setting={setting} />
      <div className={styles.main_container}>
        <div className={styles.container}>
          {data.length == 0
            ? "Ничего не найдено"
            : data.map(function (el) {
                return (
                  <CardItem
                    img={el.img[0]}
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

export default Honny;
