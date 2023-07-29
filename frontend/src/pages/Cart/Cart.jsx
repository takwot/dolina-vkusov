import React, { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { setCart } from "../../store/reducers/userReducer";
import CardItemCart from "../../components/CardItemCart/CardItemCart";

const Cart = ({ setting }) => {
  const dispatch = useDispatch();

  const [price, setPrice] = useState(0);

  const cart = useSelector(state => state.user.cart);

  useEffect(() => {
    let price = [];
    cart.map(el => price.push(Number(el.price) * el.count));
    const initialValue = 0;
    const sumWithInitial = price.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );

    setPrice(sumWithInitial);
  }, [cart]);

  return (
    <>
      <Header setting={setting} />
      <div className={styles.container}>
        <div className={styles.main_container}>
          <div className={styles.info_container}>
            <p className={styles.price_text}>Товаров на {price} руб</p>
            <p className={styles.text_order}>Оформить заказ</p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              gap: "30px",
              flexWrap: "wrap",
            }}
          >
            {cart.length == 0 ? (
              <p className={styles.text}>Ваша корзина пуста</p>
            ) : (
              cart.map(function (el) {
                return (
                  <div>
                    <CardItemCart
                      img={el.img}
                      name={el.name}
                      price={el.price}
                      admin={true}
                      id={el.id}
                      count={el.count}
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
                        localStorage.setItem("cart", JSON.stringify(newArray));
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
      </div>
    </>
  );
};

export default Cart;
