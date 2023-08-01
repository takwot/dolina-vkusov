import React, { useRef, useState } from "react";
import styles from "./ModalChange.module.scss";
import api from "../../../api/api";
import axios from "axios";

const ModalChange = ({ setModal, setData, texta, imga, id }) => {
  const [text, setText] = useState(texta);
  const [img, setImg] = useState(imga);
  const [photo, setPhoto] = useState(imga === "" ? false : true);
  const ref = useRef();

  const handleClick = () => {
    api.changeAbout(text, img, id).then(res => {
      console.log(res.data);
      api.getAbout().then(res => {
        setData(res.data);
        setModal(false);
        setText("");
      });
    });
  };

  return (
    <div
      onClick={() => {
        setModal(false);
      }}
      className={styles.container}
    >
      <div className={styles.main_container} onClick={e => e.stopPropagation()}>
        <input
          ref={ref}
          style={{ display: "none" }}
          type="file"
          onChange={e => {
            const file = e.target.files[0];
            const data = new FormData();
            data.append("file", file);
            axios.post("http://45.12.72.2:80/img", data).then(res => {
              setImg(res.data.urlfile);
              setPhoto(true);
            });
          }}
        />
        <textarea value={text} onChange={e => setText(e.target.value)} />
        <button onClick={() => ref.current.click()}>
          {photo ? "Изменить" : "Добавить"} изображение
        </button>
        <button onClick={handleClick}>Сохранить</button>
      </div>
    </div>
  );
};

export default ModalChange;
