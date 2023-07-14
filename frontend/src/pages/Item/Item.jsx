import React, { useEffect, useState } from "react";
import styles from "./Item.module.scss";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import api from "../../api/api";
import Carucel from "./Carucel/Carucel";

const Item = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});
  const [img, setImg] = useState([]);

  useEffect(() => {
    api.getOneItem(id).then(res => {
      setItem(res.data);
      setImg(res.data.img);
    });
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.main_container}>
          <div className={styles.top_container}>
            <div className={styles.img_container}>
              <Carucel>
                {img.map(function (el) {
                  <img src={el} />;
                })}
              </Carucel>
            </div>
            <div className={styles.info_container}>
              <div>
                <p className={styles.name_text}>{item.name}</p>
                <p className={styles.description_text}>{item.description}</p>
                <div className={styles.maker_text}>
                  Производитель
                  <p>{item.maker}</p>
                </div>
              </div>
              <button className={styles.button}>Купить</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
