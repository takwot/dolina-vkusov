import React, { useState } from "react";
import styles from "./Registation.module.scss";
import { NavLink } from "react-router-dom";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import api from "../../api/api";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/reducers/userReducer";
import { useCookies } from "react-cookie";
import Header from "../../components/Header/Header";

const Registration = () => {
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const clickHandle = () => {
    api.createUser(email, name, password).then(res => {
      if (res.status == 200) {
        setCookie("email", email);
        setCookie("password", password);
        dispatch(setUser(res.data));
      }
      console.log(res.data);
    });
  };

  return (
    <>
      <Header />
      <div className={styles.main_container}>
        <div className={styles.login_container}>
          <p className={styles.main_text}>Вход</p>
          <div className={styles.input_cotainer} style={{ marginTop: "40px" }}>
            <PersonOutlineOutlinedIcon
              sx={{
                position: "absolute",
                color: "#333",
                fontSize: 25,
                marginTop: "-26px",
                marginLeft: "20px",
                zIndex: 0,
              }}
            />
            <input
              placeholder="Введите имя *"
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className={styles.input_cotainer}>
            <EmailOutlinedIcon
              sx={{
                position: "absolute",
                color: "#333",
                fontSize: 25,
                marginTop: "-26px",
                marginLeft: "20px",
                zIndex: 0,
              }}
            />
            <input
              placeholder="Электронная почта *"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className={styles.input_cotainer}>
            <HttpsOutlinedIcon
              sx={{
                position: "absolute",
                color: "#333",
                fontSize: 25,
                marginTop: "-26px",
                marginLeft: "20px",
                zIndex: 0,
              }}
            />
            <input
              placeholder="Пароль *"
              value={password}
              type="password"
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button className={styles.button} onClick={clickHandle}>
            Зарегистрироваться
          </button>
        </div>
      </div>
    </>
  );
};

export default Registration;
