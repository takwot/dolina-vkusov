import React, { useEffect, useState } from "react";
import styles from "./Item.module.scss";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import api from "../../api/api";

const Item = ({ setting }) => {
  const { id } = useParams();

  const [item, setItem] = useState({});
  const [img, setImg] = useState([]);

  useEffect(() => {
    api.getOneItem(id).then(res => {
      setItem(res.data);
      setImg(res.data.img);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <Header setting={setting} />
      <div className={styles.container}>
        <div className={styles.main_container}>
          <div className={styles.top_container}>
            <p>{item.name}</p>
          </div>
          <div className={styles.info_container}>
            <div className={styles.image}>
              <img src={item.img} />
            </div>
            <div className={styles.info}>
              <p className={styles.main_text}>Энергетическая ценность</p>
              <p className={styles.text}>{item.description}</p>
              <p className={styles.main_text}>Производитель</p>
              <p className={styles.text}>{item.maker}</p>
              <p className={styles.main_text}>Срок хранения</p>
              <p className={styles.text}>{item.year}</p>
              <p className={styles.main_text}>Тип товара</p>
              <p className={styles.text}>{item.type}</p>
              <p className={styles.main_text}>Категория товара</p>
              <p className={styles.text}>{item.category}</p>
            </div>
          </div>
          <div className={styles.des_container}>
            <p className={styles.main_text}>Описание товара</p>
            <p className={styles.text}>{item.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
