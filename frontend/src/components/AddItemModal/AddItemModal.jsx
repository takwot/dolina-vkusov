import React, { useEffect, useRef, useState } from "react";
import styles from "./AddItemModal.module.scss";
import WeatherGift from "./WeatherGift";
import Sweets from "./Sweets";
import HonnyAndSweets from "./HonnyAndSweets";
import Cooking from "./Cooking";
import Honny from "./Honny";
import Sweet from "./Sweet";
import axios from "axios";
import api from "../../api/api";

const AddItemModal = ({ setModal, setCart, change, id, setChange }) => {
  const ref = useRef();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [des, setDes] = useState("");
  const [maker, setMaker] = useState("");
  const [type, setType] = useState("Дары природы");
  const [miniType, setMiniType] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("");
  const [year, setYear] = useState("");
  const [energy, setEnergy] = useState("");
  const [structure, setStructure] = useState("");
  const [photo, setPhoto] = useState(false);

  useEffect(() => {
    if (change === true) {
      api.getOneItem(id).then(res => {
        console.log(res.data);
        setName(res.data.name);
        setFile(res.data.img);
        setPhoto(true);
        setPrice(res.data.price);
        setDes(res.data.description);
        setMaker(res.data.maker);
        setEnergy(res.data.energy);
        setYear(res.data.year);
        setStructure(res.data.structure);
        setType(res.data.type);
        setCategory(res.data.category);
        setMiniType(res.data.mini_category);
      });
    }
  }, []);

  const clickHandle = () => {
    if (change === true) {
      const data = {
        name,
        price,
        img: file,
        description: des,
        maker,
        type,
        energy,
        year,
        structure,
        category,
        mini_category: miniType,
        id: id,
      };
      api.changeItem(data).then(res => {
        api.allItem().then(res => {
          setCart(res.data);
        });
        setModal(false);
        setChange(false);
      });
    } else {
      const data = {
        name,
        price,
        img: file,
        description: des,
        maker,
        type,
        energy,
        year,
        structure,
        category,
        mini_category: miniType,
      };
      api.createItem(data).then(res => {
        alert("Успешно!");
        api.allItem().then(res => {
          setCart(res.data);
        });
        setModal(false);
      });
    }
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
              setFile(res.data.urlfile);
              setPhoto(true);
            });
          }}
        />
        <div style={{}}>
          {photo && (
            <img style={{ width: "200px", height: "200px" }} src={file} />
          )}
        </div>
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
          <p>Энергетическая ценность в 100г</p>
          <input
            placeholder="Энергетическая ценность в 100г"
            value={energy}
            onChange={e => {
              setEnergy(e.target.value);
            }}
          />
        </div>
        <div className={styles.input_container}>
          <p>Срок хранения</p>
          <input
            placeholder="Срок хранения"
            value={year}
            onChange={e => {
              setYear(e.target.value);
            }}
          />
        </div>
        <div className={styles.input_container}>
          <p>Состав</p>
          <textarea
            placeholder="Состав"
            value={structure}
            onChange={e => {
              setStructure(e.target.value);
            }}
          />
        </div>
        <div className={styles.input_container}>
          <p>Тип товара</p>
          <select
            value={type}
            onChange={e => {
              setType(e.target.value);
            }}
          >
            <option value="Дары природы">Дары природы</option>
            <option value="Конфеты">Конфеты</option>
            <option value="Мед и сладости">Мед и сладости</option>
            <option value="Кулинария">Кулинария</option>
          </select>
        </div>
        <div className={styles.input_container}>
          <p>Категория товара</p>
          <select
            onChange={e => {
              setCategory(e.target.value);
            }}
          >
            {type == "Дары природы" && (
              <WeatherGift setCategory={setCategory} change={change} />
            )}
            {type == "Конфеты" && (
              <Sweets setCategory={setCategory} change={change} />
            )}
            {type == "Мед и сладости" && (
              <HonnyAndSweets setCategory={setCategory} change={change} />
            )}
            {type == "Кулинария" && (
              <Cooking setCategory={setCategory} change={change} />
            )}
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
              {category == "Продукция пчеловодства" && (
                <Honny setCategory={setMiniType} change={change} />
              )}
              {category == "Восточные сладости" && (
                <Sweet setCategory={setMiniType} change={change} />
              )}
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
            {photo ? "Изменить фото" : "Добавить фото"}
          </button>
          <button onClick={clickHandle}>Сохранить</button>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
