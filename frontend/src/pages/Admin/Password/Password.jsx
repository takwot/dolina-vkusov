import React, { useState } from "react";
import styles from "./Password.module.scss";

const Password = ({ setAdmin }) => {
  const [text, setText] = useState("");
  return (
    <div className={styles.container}>
      <input
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (text == "Maltsev1") {
            setAdmin(true);
          }
        }}
      >
        Войти
      </button>
    </div>
  );
};

export default Password;
