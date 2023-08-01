import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./Raiting.module.scss";
import api from "../../api/api";
import { useSelector } from "react-redux";
import Rating from "@mui/material/Rating";
import axios from "axios";

const Raiting = ({ setting }) => {
  const [raiting, setRaiting] = useState([]);

  const [photo, setPhoto] = useState(false);

  const [text, setText] = useState("");
  const [value, setValue] = useState(0);
  const [image, setImage] = useState("");

  const name = useSelector(state => state.user);
  const ref = useRef();

  const clickHandle = () => {
    const data = {
      name: name.user.name,
      text,
      raiting: String(value),
      image: image,
    };
    console.log(data);
    api.addRaiting(data).then(res => {
      console.log(res.data);
      api.allRaiting().then(res => {
        setRaiting(res.data);
        console.log(res.data);
      });
    });
  };

  useEffect(() => {
    api.allRaiting().then(res => {
      setRaiting(res.data);
    });
  }, []);

  return (
    <>
      <Header setting={setting} />
      <div className={styles.container}>
        <div className={styles.main_container}>
          {name.isReg == true && (
            <>
              <input
                style={{ display: "none" }}
                type="file"
                ref={ref}
                onChange={e => {
                  const file = e.target.files[0];

                  const data = new FormData();

                  data.append("file", file);
                  axios.post("http://45.12.72.2:80/img", data).then(res => {
                    setImage(res.data.urlfile);
                    setPhoto(true);
                    console.log(res.data.urlfile);
                  });
                }}
              />
              <p className={styles.text}>Добавить отзыв</p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <textarea
                  value={text}
                  onChange={e => {
                    setText(e.target.value);
                  }}
                />
                <p
                  style={{
                    marginTop: "10px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    ref.current.click();
                  }}
                >
                  {photo ? "Изменить фото" : "Прикрепить фото"}
                </p>
                <Rating
                  sx={{ marginTop: "10px" }}
                  name="half-rating"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </div>

              <button onClick={clickHandle}>Опубликовать</button>
            </>
          )}
          <p className={styles.text_raiting}>Опубликованные отзывы</p>
          <div className={styles.all_raiting}>
            {raiting.map(function (el) {
              return (
                <div key={el.id} className={styles.raiting_container}>
                  <p className={styles.name}>{el.name}</p>
                  <Rating
                    name={el.name}
                    sx={{ marginTop: "10px" }}
                    value={Number(el.raiting)}
                    readOnly
                  />
                  <p>{el.text}</p>
                  <img src={el.image} />
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
