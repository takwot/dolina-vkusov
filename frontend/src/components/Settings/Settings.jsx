import React, { useEffect, useState } from "react";
import api from "../../api/api";
import styles from "./Settings.module.scss";

const Settings = () => {
  const [settings, setSettings] = useState({
    phone: "",
    time: "",
  });

  useEffect(() => {
    api.getSettings().then(res => {
      setSettings(res.data);
    });
  }, []);

  return (
    <div className={styles.cont}>
      <div>
        <p>Телефон</p>
        <input
          value={settings.phone}
          onChange={e => {
            setSettings({
              time: settings.time,
              phone: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <p>Время работы</p>
        <input
          value={settings.time}
          onChange={e => {
            setSettings({
              time: e.target.value,
              phone: settings.phone,
            });
          }}
        />
      </div>
      <button
        onClick={() => {
          console.log();
          api.setSettings(settings).then(res => {
            console.log(res.data);
            setSettings(res.data);
          });
        }}
      >
        Сохранить
      </button>
    </div>
  );
};

export default Settings;
