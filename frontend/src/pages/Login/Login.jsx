import React, { useState } from "react";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import styles from "./Login.module.scss";
import { NavLink } from "react-router-dom";
import api from "../../api/api";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/reducers/userReducer";
import { useCookies } from "react-cookie";
import Header from "../../components/Header/Header";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Login = ({ setting }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies();

  const [open, setOpen] = useState(false);
  const [warrning, setWarning] = useState("success");

  const clickHandle = () => {
    api.loginUser(email, password).then(res => {
      console.log(res);
      if (res.data.message) {
        setWarning("error");
        setOpen(true);
      } else {
        console.log(res.data);
        setCookie("email", email);
        setCookie("password", password);
        dispatch(setUser(res.data));
        setWarning("success");
        setOpen(true);
      }
    });
  };

  return (
    <>
      <Header setting={setting} />
      <div className={styles.main_container}>
        <div className={styles.login_container}>
          <p className={styles.main_text}>Вход</p>
          <div className={styles.input_cotainer} style={{ marginTop: "40px" }}>
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
          <NavLink className={styles.link}>Забыли пароль?</NavLink>
          <button className={styles.button} onClick={clickHandle}>
            Войти
          </button>
          <div className={styles.reg_container}>
            <p>Нет аккаунта?</p>
            <NavLink className={styles.link} to={"/registration"}>
              Зарегистрироваться
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
