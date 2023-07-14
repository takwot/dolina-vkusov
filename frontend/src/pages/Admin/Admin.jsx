import React, { useEffect, useRef, useState } from "react";
import styles from "./Admin.module.scss";
import { NavLink } from "react-router-dom";
import CardItem from "../../components/CardItem/CardItem";
import AddItemModal from "../../components/AddItemModal/AddItemModal";
import api from "../../api/api";
import AnswerAndQuestion from "../../components/Questions/AnswerAndQuestion";
import AddFAQ from "../../components/AddFAQ/AddFAQ";
import axios from "axios";

const Admin = () => {
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const [text, setText] = useState("Доступные товары");
  const [faq, setFaq] = useState(false);
  const [img, setImg] = useState([]);

  const ref = useRef();
  const second = useRef();

  useEffect(() => {
    api.allFaq().then(res => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    api.getImg().then(res => {
      setImg(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    api.allItem().then(res => {
      setCart(res.data);
    });
  }, []);

  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <NavLink className={styles.link} to={"/"}>
          вернутся в магазин
        </NavLink>
        <div className={styles.all_item}>
          {modal && <AddItemModal setModal={setModal} setCart={setCart} />}
          <div className={styles.info_container}>
            <p
              onClick={() => {
                setText("Доступные товары");
              }}
            >
              Доступные товары
            </p>

            <p
              className={styles.faq_text}
              onClick={() => {
                setText("Карусель главной страницы");
              }}
            >
              Карусель главной страницы
            </p>
            <p
              className={styles.faq_text}
              onClick={() => {
                setText("Часто задаваемые вопросы");
              }}
            >
              Часто задаваемые вопросы
            </p>
          </div>
          {text == "Доступные товары" && (
            <div className={styles.item_cnbonae}>
              <button
                className={styles.button_text}
                onClick={() => {
                  setModal(true);
                }}
              >
                Добавить товар
              </button>
              <div className={styles.all_items}>
                {cart.map(function (el) {
                  return (
                    <div>
                      <CardItem
                        key={el._id}
                        name={el.name}
                        price={el.price}
                        img={el.img[0]}
                        admin={true}
                      />
                      <button
                        className={styles.button_item}
                        onClick={() => {
                          const id = el._id;
                          console.log(id);
                          api.deleteItem(id).then(() => {
                            api.allItem().then(res => {
                              setCart(res.data);
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
          )}
        </div>
        {text == "Часто задаваемые вопросы" && (
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
                    <AnswerAndQuestion
                      answer={el.answer}
                      question={el.question}
                    />
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
        )}
        {text == "Карусель главной страницы" && (
          <div
            style={{
              width: "100%",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <button
              className={styles.button_item}
              style={{ width: "25%", marginBottom: "30px" }}
              onClick={() => {
                second.current.click();
              }}
            >
              Добавить картинку
            </button>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
              {img.map(function (el, index) {
                return (
                  <div className={styles.iamge}>
                    <img
                      src={el.img}
                      style={{ width: "300px", height: "150px" }}
                    />
                    <button
                      onClick={() => {
                        const id = el.id;
                        api.deleteImg(id).then(res => {
                          api.getImg().then(res => {
                            setImg(res.data);
                          });
                        });
                      }}
                    >
                      Удалить
                    </button>
                    <button
                      onClick={() => {
                        ref.current.click();
                      }}
                    >
                      Изменить
                    </button>
                    <input
                      style={{ display: "none" }}
                      type="file"
                      ref={ref}
                      onChange={e => {
                        const formData = new FormData();
                        formData.append("file", e.target.files[0]);
                        axios
                          .post("http://45.12.72.2:80/img", formData)
                          .then(res => {
                            const id = el.id;
                            api.addImg(res.data.urlfile, id).then(() => {
                              api.getImg().then(res => {
                                setImg(res.data);
                              });
                            });
                          });
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <input
              style={{ display: "none" }}
              type="file"
              ref={second}
              onChange={e => {
                console.log(e.target.files);
                const formData = new FormData();
                formData.append("file", e.target.files[0]);
                axios.post("http://45.12.72.2:80/img", formData).then(res => {
                  console.log(res.data);
                  api.setImg(res.data.urlfile).then(() => {
                    api.getImg().then(res => {
                      setImg(res.data);
                      console.log(res.data);
                    });
                  });
                });
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
