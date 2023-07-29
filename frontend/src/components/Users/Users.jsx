import React, { useEffect, useState } from "react";
import styles from "./Users.module.scss";
import api from "../../api/api";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.getAllUsers().then(res => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className={styles.user_container}>
      {users.map(el => (
        <div className={styles.user}>
          <p>{el.name}</p>
          <p>{el.email}</p>
          <p>{el.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
