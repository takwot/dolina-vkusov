import React, { useState } from "react";
import styles from "./CardItem.module.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCart, setFavourity } from "../../store/reducers/userReducer";
import api from "../../api/api";
import { useCookies } from "react-cookie";

const CardItemCart = ({ img, name, price, id, count }) => {
  const [bg, setBg] = useState(false);
  const [counter, setCounter] = useState(count);

  const cart = useSelector(state => state.user.cart);
  const favourity = useSelector(state => state.user.favourity);
  const user = useSelector(state => state.user);
  const [cookies] = useCookies();

  const [like, setLike] = useState(false);

  const dispatch = useDispatch();
  return (
    <div className={styles.card_container}>
      <NavLink style={{ textDecoration: "none" }} to={`/item/${id}`}>
        <div
          className={styles.img_container}
          onClick={() => {
            console.log(cart);
          }}
        >
          <img src={img} />
        </div>
      </NavLink>
      <div className={styles.price_container}>
        <NavLink style={{ textDecoration: "none" }} to={`/item/${id}`}>
          <div className={styles.name_container}>
            <p>{name}</p>
          </div>
          <p className={styles.price_text}>{price} руб</p>
        </NavLink>
      </div>
      <div className={styles.counter_container}>
        <p
          onClick={() => {
            if (counter === 1) {
              const newArr = cart.filter(el => el.id !== id);
              dispatch(setCart(newArr));
              localStorage.setItem("cart", JSON.stringify(newArr));
            } else {
              let newArr = [];
              cart.map(el => {
                if (el.id !== id) {
                  newArr.push(el);
                }
              });
              const array = [
                ...newArr,
                {
                  img,
                  name,
                  price,
                  id,
                  count: counter - 1,
                },
              ];
              dispatch(setCart(array));
              localStorage.setItem("cart", JSON.stringify(array));
              setCounter(counter - 1);
            }
          }}
        >
          -
        </p>
        <p>{counter}</p>
        <p
          onClick={() => {
            let newArr = [];
            cart.map(el => {
              if (el.id !== id) {
                newArr.push(el);
              }
            });
            const array = [
              ...newArr,
              {
                img,
                name,
                price,
                id,
                count: counter + 1,
              },
            ];
            dispatch(setCart(array));
            localStorage.setItem("cart", JSON.stringify(array));
            setCounter(counter + 1);
          }}
        >
          +
        </p>
      </div>
    </div>
  );
};

export default CardItemCart;
