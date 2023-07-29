import React, { useEffect, useState } from "react";
import styles from "./FAQ.module.scss";
import api from "../../api/api";
import AddFAQ from "../AddFAQ/AddFAQ";
import AnswerAndQuestion from "../Questions/AnswerAndQuestion";

const FAQ = () => {
  const [data, setData] = useState([]);
  const [faq, setFaq] = useState(false);

  useEffect(() => {
    api.allFaq().then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <div className={styles.faq}>
      <p className={styles.faq_text}>Часто задаваемые вопросы</p>
      <button
        className={styles.button_text}
        onClick={() => {
          setFaq(true);
        }}
      >
        Добавить
      </button>
      {faq && <AddFAQ setModal={setFaq} setCart={setData} />}
      <div style={{ marginTop: "30px" }}>
        {data.map(function (el) {
          return (
            <div style={{ marginTop: "20px" }}>
              <AnswerAndQuestion answer={el.answer} question={el.question} />
              <button
                style={{ width: "20%", marginTop: "20px" }}
                className={styles.button_item}
                onClick={() => {
                  api.deleteFaq(el.id).then(() => {
                    api.allFaq().then(res => {
                      setData(res.data);
                    });
                  });
                }}
              >
                Удалить
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
