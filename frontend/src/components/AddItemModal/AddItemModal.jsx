import React, { useRef, useState } from "react";
import styles from "./AddItemModal.module.scss";
import WeatherGift from "./WeatherGift";
import Sweets from "./Sweets";
import HonnyAndSweets from "./HonnyAndSweets";
import Cooking from "./Cooking";
import Honny from "./Honny";
import Sweet from "./Sweet";
import axios from "axios";
import api from "../../api/api";

const AddItemModal = ({ setModal }) => {
  const ref = useRef();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [des, setDes] = useState("");
  const [maker, setMaker] = useState("");
  const [type, setType] = useState("Дары природы");
  const [miniType, setMiniType] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState([]);

  const clickHandle = () => {
    const data = {
      name,
      price,
      img: [...file],
      description: des,
      maker,
      type,
      category,
      mini_category: miniType,
    };
    api.createItem(data).then(res => {
      console.log(res.data);
      alert("Успешно!");
      setModal(false);
    });
  };

  return (
    <div
      className={styles.container}
      onClick={() => {
        setModal(false);
      }}
    >
      <div
        className={styles.main_container}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <input
          ref={ref}
          style={{ display: "none" }}
          type="file"
          onChange={e => {
            const formData = new FormData();
            formData.append("file", e.target.files[0]);
            axios.post("http://45.12.72.2:80/img", formData).then(res => {
              setFile(files => [...files, res.data.urlfile]);
            });
          }}
        />
        <div className={styles.input_container}>
          <p>Название товара</p>
          <input
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
            placeholder="Название товара"
          />
        </div>
        <div className={styles.input_container}>
          <p>Цена товара</p>
          <input
            placeholder="Цена товара"
            value={price}
            onChange={e => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className={styles.input_container}>
          <p>Описание товара</p>
          <textarea
            placeholder="Описание товара"
            value={des}
            onChange={e => {
              setDes(e.target.value);
            }}
          />
        </div>
        <div className={styles.input_container}>
          <p>Производитель товара</p>
          <input
            placeholder="Производитель"
            value={maker}
            onChange={e => {
              setMaker(e.target.value);
            }}
          />
        </div>
        <div className={styles.input_container}>
          <p>Тип товара</p>
          <select
            onChange={e => {
              setType(e.target.value);
            }}
          >
            <option>Дары природы</option>
            <option>Конфеты</option>
            <option>Мед и сладости</option>
            <option>Кулинария</option>
          </select>
        </div>
        <div className={styles.input_container}>
          <p>Категория товара</p>
          <select
            onChange={e => {
              setCategory(e.target.value);
            }}
          >
            {type == "Дары природы" && <WeatherGift />}
            {type == "Конфеты" && <Sweets />}
            {type == "Мед и сладости" && <HonnyAndSweets />}
            {type == "Кулинария" && <Cooking />}
          </select>
        </div>
        {(category == "Продукция пчеловодства" ||
          category == "Восточные сладости") && (
          <div className={styles.input_container}>
            <p>Мини категория товара</p>
            <select
              onChange={e => {
                setMiniType(e.target.value);
              }}
            >
              {category == "Продукция пчеловодства" && <Honny />}
              {category == "Восточные сладости" && <Sweet />}
            </select>
          </div>
        )}
        <div className={styles.add_photo_and_save}>
          <button
            onClick={e => {
              e.stopPropagation();
              ref.current.click();
            }}
          >
            Добавить {file.length != 0 && "еще"} фото
          </button>
          <button onClick={clickHandle}>Сохранить</button>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
