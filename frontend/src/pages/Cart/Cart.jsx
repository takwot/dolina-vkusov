import React, { useState } from "react";
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "../../components/CardItem/CardItem";
import Header from "../../components/Header/Header";
import { setCart } from "../../store/reducers/userReducer";

const Cart = ({ setting }) => {
  const dispatch = useDispatch();

  const [price, setPrice] = useState(0);

  const cart = useSelector(state => state.user.cart);

  cart.map(function (el) {
    setPrice(prev => prev + el.price);
  });

  return (
    <>
      <Header setting={setting} />
      <div className={styles.container}>
        <div className={styles.main_container}>
          <div className={styles.info_container}>
            <p className={styles.price_text}>Товаров на {price} руб</p>
            <p className={styles.text_order}>Оформить заказ</p>
          </div>
          {cart.length == 0 ? (
            <p className={styles.text}>Ваша корзина пуста</p>
          ) : (
            cart.map(function (el) {
              return (
                <div>
                  <CardItem
                    img={el.img}
                    name={el.name}
                    price={el.price}
                    admin={true}
                    id={el.id}
                  />
                  <button
                    className={styles.button}
                    onClick={() => {
                      let newArray = [];

                      cart.map(img => {
                        if (img.id != el.id) {
                          newArray.push(img);
                        }
                      });
                      dispatch(setCart(newArray));
                    }}
                  >
                    Удалить
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
