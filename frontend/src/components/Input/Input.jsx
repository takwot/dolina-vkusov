import React, { useEffect, useState } from "react";
import api from "../../api/api";
import styles from "./Input.module.scss";
import { NavLink } from "react-router-dom";

const Input = () => {
  const [text, setText] = useState("");
  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    api.allItem().then(res => {
      setAllItems(res.data);
    });
  }, []);

  const filteredItems = allItems.filter(user => {
    return user.name.toLowerCase().includes(text.toLowerCase());
  });

  return (
    <div className={styles.main_container}>
      <input
        placeholder="Поиск по товарам..."
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />

      {text !== "" && (
        <div className={styles.container}>
          {filteredItems.map(el => (
            <NavLink to={`/item/${el._id}`}>{el.name}</NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Input;
