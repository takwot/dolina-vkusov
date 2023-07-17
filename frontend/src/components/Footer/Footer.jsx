import React from "react";
import styles from "./Footer.module.scss";
import cards from "../../assets/cards.png";
import develiry from "../../assets/develiry.png";
import logo from "../../assets/logo.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = ({ setting }) => {
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <div className={styles.content_container}>
          <img src={logo} className={styles.logo} />
          <p>Оплата</p>
          <img src={cards} className={styles.card} />
          <p>Доставка</p>
          <img src={develiry} className={styles.card} />
        </div>
        <div className={styles.content_container}>
          <p className={styles.main_text}>Контакты</p>
          <div
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
            className={styles.phone_container}
          >
            <LocalPhoneIcon />
            <p>{setting.phone}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <EmailIcon />
            <p>info@dolinavkusov.ru</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
