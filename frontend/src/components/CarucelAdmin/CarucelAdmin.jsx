import React, { useEffect, useRef, useState } from "react";
import styles from "./CarucelAdmin.module.scss";
import api from "../../api/api";
import axios from "axios";

const CarucelAdmin = () => {
  const [img, setImg] = useState([]);

  const ref = useRef();
  const second = useRef();

  useEffect(() => {
    api.getCarucelImg().then(res => {
      setImg(res.data);
    });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      <button
        className={styles.button_item}
        style={{ width: "25%", marginBottom: "30px" }}
        onClick={() => {
          second.current.click();
        }}
      >
        Добавить картинку
      </button>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
        {img.map(function (el, index) {
          return (
            <div className={styles.iamge}>
              <img src={el.img} style={{ width: "300px", height: "150px" }} />
              <button
                onClick={() => {
                  api.deleteCarucelImg(el._id).then(res => {
                    api.getCarucelImg().then(res => {
                      setImg(res.data);
                    });
                  });
                }}
              >
                Удалить
              </button>
              <button
                onClick={() => {
                  ref.current.click();
                }}
              >
                Изменить
              </button>
              <input
                style={{ display: "none" }}
                type="file"
                ref={ref}
                onChange={e => {
                  const formData = new FormData();
                  formData.append("file", e.target.files[0]);
                  axios.post("http://45.12.72.2:80/img", formData).then(res => {
                    api.updateCarucelImg(el._id, res.data.urlfile).then(() => {
                      api.getCarucelImg().then(res => {
                        setImg(res.data);
                      });
                    });
                  });
                }}
              />
            </div>
          );
        })}
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        ref={second}
        onChange={e => {
          const formData = new FormData();
          formData.append("file", e.target.files[0]);
          axios.post("http://45.12.72.2:80/img", formData).then(res => {
            api.addCarucelImg(res.data.urlfile).then(() => {
              api.getCarucelImg().then(res => {
                setImg(res.data);
              });
            });
          });
        }}
      />
    </div>
  );
};

export default CarucelAdmin;
