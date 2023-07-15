import React from "react";
import styles from "./Favourity.module.scss";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "../../components/CardItem/CardItem";
import Header from "../../components/Header/Header";
import { setFavourity } from "../../store/reducers/userReducer";

const Favourity = ({ setting }) => {
  const favourity = useSelector(state => state.user.favourity);

  const dispatch = useDispatch();

  return (
    <>
      <Header setting={setting} />
      <div className={styles.container}>
        <div className={styles.main_container}>
          {favourity.length == 0 ? (
            <p className={styles.text}>Тут пока пусто</p>
          ) : (
            favourity.map(function (el) {
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

                      favourity.map(img => {
                        if (img.id != el.id) {
                          newArray.push(img);
                        }
                      });
                      dispatch(setFavourity(newArray));
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

export default Favourity;
