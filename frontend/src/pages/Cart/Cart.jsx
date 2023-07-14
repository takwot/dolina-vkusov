import React from "react";
import styles from "./Cart.module.scss";
import { useSelector } from "react-redux";
import CardItem from "../../components/CardItem/CardItem";
import Header from "../../components/Header/Header";

const Cart = () => {
  const cart = useSelector(state => state.user.cart);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.main_container}>
          {cart.length == 0 ? (
            <p className={styles.text}>Ваша корзина пуста</p>
          ) : (
            cart.map(function (el) {
              return (
                <CardItem
                  img={el.img}
                  name={el.name}
                  price={el.price}
                  admin={true}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
