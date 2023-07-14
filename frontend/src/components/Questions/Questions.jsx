import styles from "./Questions.module.scss";
import React, { useEffect, useState } from "react";
import AnswerAndQuestion from "./AnswerAndQuestion";
import api from "../../api/api";

const Questions = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.allFaq().then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <h3 className={styles.text}>Часто задаваемые вопросы</h3>
        {data.map(function (el) {
          return (
            <AnswerAndQuestion answer={el.answer} question={el.question} />
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
