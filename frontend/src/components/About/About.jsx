import React, { useEffect, useState } from "react";
import styles from "./About.module.scss";
import api from "../../api/api";
import Modal from "./Modal/Modal";
import ModalChange from "./ModalChange/ModalChange";

const About = () => {
  const [about, setAbout] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalChange, setModalChange] = useState(false);

  useEffect(() => {
    api.getAbout().then(res => {
      setAbout(res.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      {modal && <Modal setModal={setModal} setData={setAbout} />}
      <div className={styles.main_container}>
        <button
          className={styles.button}
          onClick={() => {
            setModal(true);
          }}
        >
          Добавить раздел
        </button>
        <div className={styles.about_container}>
          {about.map(el => {
            const array = el.text.split("\n");
            return (
              <>
                <div className={styles.cont}>
                  {modalChange && (
                    <ModalChange
                      setModal={setModalChange}
                      setData={setAbout}
                      texta={el.text}
                      imga={el.image}
                      id={el._id}
                    />
                  )}
                  {array.map(el => (
                    <p style={{ marginTop: "10px" }}>{el}</p>
                  ))}
                  <img src={el.image} />
                </div>
                <button
                  className={styles.button}
                  style={{ marginTop: "10px" }}
                  onClick={() => {
                    api.deleteAbout(el._id).then(res => {
                      api.getAbout().then(res => {
                        setAbout(res.data);
                      });
                    });
                  }}
                >
                  Удалить
                </button>
                <button
                  className={styles.button}
                  style={{ marginTop: "10px" }}
                  onClick={() => {
                    setModalChange(true);
                  }}
                >
                  Изменить
                </button>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
