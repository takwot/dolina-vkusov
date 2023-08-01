import React, { useEffect, useState } from "react";
import styles from "./Modal.module.scss";
import api from "../../../api/api";

const Modal = ({ setData, setModal, data }) => {
  const [input, setInput] = useState("");

  const [allItems, setAllItems] = useState([]);
  const [allFavourity, setAllFavourity] = useState([]);

  const filteredItems = allItems.filter(el => {
    return el.name.toLowerCase().includes(input.toLowerCase());
  });

  useEffect(() => {
    api.allItem().then(res => {
      console.log(res.data);
      setAllItems(res.data);
    });
  }, []);

  return (
    <div
      className={styles.container}
      onClick={() => {
        setModal(false);
      }}
    >
      <div className={styles.main_container} onClick={e => e.stopPropagation()}>
        Выберите товар
        <input
          placeholder="Поиск..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        {filteredItems.map(function (el) {
          return data.find(elem => elem.name === el.name) ? (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>{el.name} </p>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => {
                  data.find(elem => {
                    if (elem.name === el.name) {
                      api.deleteFavourityItems(elem._id).then(res => {
                        console.log(res.data);
                        api.getFavourityItems().then(res => {
                          setData(res.data);
                        });
                      });
                    }
                  });
                }}
              >
                Удалить
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>{el.name}</p>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => {
                  api
                    .createFavourityItems(el.name, el.img, el.price, el._id)
                    .then(res => {
                      console.log(res.data);
                      api.getFavourityItems().then(res => {
                        setData(res.data);
                      });
                    });
                }}
              >
                Добавить
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Modal;
