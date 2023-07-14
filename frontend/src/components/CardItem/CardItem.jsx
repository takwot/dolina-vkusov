import React, { useState } from "react";
import styles from "./CardItem.module.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCart, setFavourity } from "../../store/reducers/userReducer";

const CardItem = ({ img, name, price, admin, id }) => {
  const [bg, setBg] = useState(false);
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className={styles.card_container}>
      <NavLink style={{ textDecoration: "none" }} to={`/item/${id}`}>
        <div className={styles.img_container}>
          <img src={img} />
        </div>
        <div className={styles.name_container}>
          <p>{name}</p>
        </div>
      </NavLink>
      <div className={styles.price_container}>
        <NavLink style={{ textDecoration: "none" }} to={`/item/${id}`}>
          <p className={styles.price_text}>{price} руб</p>
        </NavLink>
        <div className={styles.cart_container}>
          {!admin && (
            <>
              <div
                className={bg === true ? styles.cart_true : styles.cart}
                onClick={() => {
                  setBg(!bg);
                  dispatch(
                    setCart({
                      img,
                      name,
                      price,
                    })
                  );
                }}
              >
                В корзин{bg === true ? "е" : "у"}
                <ShoppingCartIcon
                  sx={{
                    color: bg === true ? "#8bc1f4" : "white",
                    cursor: "pointer",
                  }}
                />
              </div>
              {like ? (
                <FavoriteIcon
                  onClick={() => {
                    setLike(!like);
                  }}
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
                    dispatch(
                      setFavourity({
                        img,
                        name,
                        price,
                      })
                    );
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
