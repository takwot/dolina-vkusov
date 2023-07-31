import React, { useEffect, useState } from "react";
import styles from "./Items.module.scss";
import CardItem from "../CardItem/CardItem";
import api from "../../api/api";
import AddItemModal from "../AddItemModal/AddItemModal";

const Items = () => {
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);
  const [change, setChange] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    api.allItem().then(res => {
      setCart(res.data);
    });
  }, []);

  return (
    <div className={styles.item_cnbonae}>
      {modal && (
        <AddItemModal
          setModal={setModal}
          setCart={setCart}
          change={change}
          setChange={setChange}
          id={id}
        />
      )}
      <button
        className={styles.button_text}
        onClick={() => {
          setModal(true);
        }}
      >
        Добавить товар
      </button>
      <div className={styles.all_items}>
        {cart.map(function (el) {
          return (
            <div>
              <CardItem
                key={el._id}
                name={el.name}
                price={el.price}
                img={el.img}
                admin={true}
              />
              <button
                className={styles.button_item}
                onClick={() => {
                  setModal(true);
                  setChange(true);
                  setId(el._id);
                }}
              >
                Изменить
              </button>
              <button
                className={styles.button_item}
                style={{ marginTop: "10px" }}
                onClick={() => {
                  const id = el._id;
                  api.deleteItem(id).then(() => {
                    api.allItem().then(res => {
                      setCart(res.data);
                    });
                  });
                }}
              >
                Удалить
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Items;
