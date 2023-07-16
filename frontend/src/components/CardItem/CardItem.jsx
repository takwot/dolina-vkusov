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

const CardItem = ({ img, name, price, admin, id }) => {
  const [bg, setBg] = useState(false);

  const cart = useSelector(state => state.user.cart);
  const favourity = useSelector(state => state.user.favourity);
  const user = useSelector(state => state.user);
  const [cookies] = useCookies();

  const [like, setLike] = useState(false);

  const dispatch = useDispatch();
  return (
    <div className={styles.card_container}>
      {admin ? (
        <div
          className={styles.img_container}
          onClick={() => {
            console.log(cart);
          }}
        >
          <img src={img} />
        </div>
      ) : (
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
      )}
      <div className={styles.price_container}>
        {admin ? (
          <>
            {" "}
            <div className={styles.name_container}>
              <p>{name}</p>
            </div>
            <p className={styles.price_text}>{price} руб</p>
          </>
        ) : (
          <NavLink style={{ textDecoration: "none" }} to={`/item/${id}`}>
            <div className={styles.name_container}>
              <p>{name}</p>
            </div>
            <p className={styles.price_text}>{price} руб</p>
          </NavLink>
        )}
        <div className={styles.cart_container}>
          {!admin && (
            <>
              <div
                className={bg === true ? styles.cart_true : styles.cart}
                onClick={() => {
                  if (bg == true) {
                  } else {
                    const newArra = [
                      ...cart,
                      {
                        img,
                        name,
                        price,
                        id,
                      },
                    ];
                    const email = cookies.email;
                    user.isReg == true && api.setCart(email, newArra);

                    dispatch(setCart(newArra));
                  }
                  setBg(!bg);
                }}
              >
                В корзин{bg === true ? "е" : "у"}
                <ShoppingCartIcon
                  sx={{
                    color: bg === true ? "#9548dd" : "white",
                    cursor: "pointer",
                  }}
                />
              </div>
              {like ? (
                <FavoriteIcon
                  sx={{
                    color: "red",
                    cursor: "pointer",
                    fontSize: "25px",
                  }}
                />
              ) : (
                <FavoriteBorderOutlinedIcon
                  onClick={() => {
                    setLike(!like);
                    const data = [
                      ...favourity,
                      {
                        img,
                        name,
                        price,
                      },
                    ];
                    const email = cookies.email;
                    user.isReg == true && api.setFavourity(email, data);
                    dispatch(setFavourity(data));
                  }}
                  sx={{
                    color: "red",
                    cursor: "pointer",
                    fontSize: "25px",
                  }}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
