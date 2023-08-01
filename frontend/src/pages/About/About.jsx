import React, { useEffect, useState } from "react";
import styles from "./About.module.scss";
import Header from "../../components/Header/Header";
import api from "../../api/api";

const About = ({ setting }) => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    api.getAbout().then(res => {
      setAbout(res.data);
    });
  }, []);
  return (
    <>
      <Header setting={setting} />
      <div className={styles.main_container}>
        <div className={styles.cont}>
          {about.map(el => {
            const array = el.text.split("\n");
            return (
              <div className={styles.container}>
                {array.map(el => (
                  <p style={{ marginTop: "10px" }}>{el}</p>
                ))}
                <img src={el.image} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
