import React, { useState } from "react";
import styles from "./AddFaq.module.scss";
import api from "../../api/api";

const AddFAQ = ({ setModal, setCart }) => {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  return (
    <div
      onClick={() => {
        setModal(false);
      }}
      className={styles.container}
    >
      <div
        className={styles.main_container}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div className={styles.input}>
          <p>Вопрос</p>
          <input
            value={question}
            onChange={e => {
              setQuestion(e.target.value);
            }}
          />
        </div>
        <div className={styles.input}>
          <p>Ответ</p>
          <input
            value={answer}
            onChange={e => {
              setAnswer(e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            api.addFaq(answer, question).then(() => {
              api.allFaq().then(res => {
                setCart(res.data);
              });
            });
            setModal(false);
          }}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export default AddFAQ;
