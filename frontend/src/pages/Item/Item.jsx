import React, { useEffect, useState } from "react";
import styles from "./Item.module.scss";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import api from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../store/reducers/userReducer";

const Item = ({ setting }) => {
  const { id } = useParams();
  const [inCart, setInCart] = useState(false);

  const dispatch = useDispatch();

  const [item, setItem] = useState({});
  const cart = useSelector(state => state.user.cart);

  useEffect(() => {
    cart.find(item => item.id === id) ? setInCart(true) : setInCart(false);
    api.getOneItem(id).then(res => {
      setItem(res.data);
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
            <p>{item.price} руб</p>
          </div>
          <div className={styles.info_container}>
            <div className={styles.image}>
              <img src={item.img} />
            </div>
            <div className={styles.info}>
              <p className={styles.main_text}>Энергетическая ценность</p>
              <p className={styles.text}>{item.energy}</p>
              <p className={styles.main_text}>Производитель</p>
              <p className={styles.text}>{item.maker}</p>
              <p className={styles.main_text}>Срок хранения</p>
              <p className={styles.text}>{item.year}</p>
              <p className={styles.main_text}>Тип товара</p>
              <p className={styles.text}>{item.type}</p>
              <p className={styles.main_text}>Категория товара</p>
              <p className={styles.text}>{item.category}</p>
              <p className={styles.main_text}>Состав товара</p>
              <p className={styles.text}>{item.structure}</p>
            </div>
          </div>
          <div className={styles.des_container}>
            <p className={styles.main_text}>Описание товара</p>
            <p className={styles.text}>{item.description}</p>
          </div>
          <div
            className={inCart ? styles.button_active : styles.button}
            onClick={() => {
              if (inCart === false) {
                const newArra = [
                  ...cart,
                  {
                    img: item.img,
                    name: item.name,
                    price: item.price,
                    id: item._id,
                    count: 1,
                  },
                ];
                dispatch(setCart(newArra));
                localStorage.setItem("cart", JSON.stringify(newArra));
                setInCart(true);
              } else {
                const newArr = cart.filter(el => el.id !== id);
                dispatch(setCart(newArr));
                localStorage.setItem("cart", JSON.stringify(newArr));
                setInCart(false);
              }
            }}
          >
            {inCart ? "В корзине" : "В корзину"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
