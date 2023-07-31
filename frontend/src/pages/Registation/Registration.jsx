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
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Registration = ({ setting }) => {
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [againPassword, setAgainPassword] = useState("");
  const [email, setEmail] = useState("");

  const [open, setOpen] = useState(false);
  const [warrning, setWarning] = useState("success");
  const [phone, setPhone] = useState("");

  const clickHandle = () => {
    if (againPassword === password) {
      api.createUser(email, name, password, phone).then(res => {
        if (res.data.message == "Error") {
          setWarning("error");
          setOpen(true);
        } else {
          setCookie("email", email);
          setCookie("password", password);
          dispatch(setUser(res.data));
          setWarning("success");
          setOpen(true);
        }
      });
    } else {
      setWarning("error");
      setOpen(true);
    }
  };

  return (
    <>
      <Header setting={setting} />

      <div className={styles.main_container}>
        <div className={styles.login_container}>
          <p className={styles.main_text}>Регистрация</p>
          <div className={styles.input_cotainer} style={{ marginTop: "40px" }}>
            <PhoneOutlinedIcon
              sx={{
                position: "absolute",
                color: "#333",
                fontSize: 25,
                marginTop: "-24px",
                marginLeft: "20px",
                zIndex: 0,
              }}
            />
            <input
              placeholder="Введите номер телефона *"
              value={phone}
              onChange={e => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={() => {
              setOpen(false);
            }}
          >
            <Alert variant="filled" severity={warrning}>
              {warrning === "error" ? "Произошла ошибка!" : "Успешно!"}
            </Alert>
          </Snackbar>
          <div className={styles.input_cotainer}>
            <PersonOutlineOutlinedIcon
              sx={{
                position: "absolute",
                color: "#333",
                fontSize: 25,
                marginTop: "-24px",
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
                marginTop: "-24px",
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
                marginTop: "-24px",
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
          <div className={styles.input_cotainer}>
            <HttpsOutlinedIcon
              sx={{
                position: "absolute",
                color: "#333",
                fontSize: 25,
                marginTop: "-24px",
                marginLeft: "20px",
                zIndex: 0,
              }}
            />
            <input
              placeholder="Повторите пароль*"
              value={againPassword}
              type="password"
              onChange={e => {
                setAgainPassword(e.target.value);
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
