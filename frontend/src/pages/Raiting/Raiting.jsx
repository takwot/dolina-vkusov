import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./Raiting.module.scss";
import api from "../../api/api";
import { useSelector } from "react-redux";

const Raiting = () => {
  const [raiting, setRaiting] = useState([]);

  const [text, setText] = useState("");

  const name = useSelector(state => state.user);

  useEffect(() => {
    api.allRaiting().then(res => {
      setRaiting(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.main_container}>
          {name.isReg == true && (
            <>
              <p className={styles.text}>Добавить отзыв</p>
              <textarea
                value={text}
                onChange={e => {
                  setText(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  api.addRaiting(name.user.name, text).then(() => {
                    setText("");
                    api.allRaiting(res => {
                      setRaiting(res.data);
                    });
                  });
                }}
              >
                Опубликовать
              </button>
            </>
          )}
          <p className={styles.text_raiting}>Опубликованные отзывы</p>
          <div className={styles.all_raiting}>
            {raiting.map(function (el) {
              return (
                <div key={el.id} className={styles.raiting_container}>
                  <p className={styles.name}>{el.name}</p>
                  <p>{el.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Raiting;
