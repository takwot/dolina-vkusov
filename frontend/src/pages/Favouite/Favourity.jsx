import React from "react";
import styles from "./Favourity.module.scss";
import { useSelector } from "react-redux";
import CardItem from "../../components/CardItem/CardItem";
import Header from "../../components/Header/Header";

const Favourity = () => {
  // const cart = useSelector(state => state.user.favourity);

  const cart = [];

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.main_container}>
          {cart.length == 0 ? (
            <p className={styles.text}>Тут пока пусто</p>
          ) : (
            cart.map(function (el) {
              return <CardItem img={el.img} name={el.name} price={el.price} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Favourity;
