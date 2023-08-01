import api from "../../api/api";
import styles from "./FavourityItems.module.scss";
import React, { useEffect, useState } from "react";
import Modal from "./Modal/Modal";

const FavourityItems = () => {
  const [allFavourity, setAllFavourity] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    api.getFavourityItems().then(res => {
      console.log(res.data);
      setAllFavourity(res.data);
    });
  }, []);

  return (
    <div className={styles.main_container}>
      {modal && (
        <Modal
          setData={setAllFavourity}
          setModal={setModal}
          data={allFavourity}
        />
      )}
      <div className={styles.container}>
        <button
          onClick={() => {
            setModal(true);
          }}
        >
          Редактировать раздел
        </button>
        <div className={styles.items}>
          {allFavourity.map(el => (
            <div>
              <img src={el.img} />
              <p>{el.name}</p>
              <p>{el.price}руб</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavourityItems;
