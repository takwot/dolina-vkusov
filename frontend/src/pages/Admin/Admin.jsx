import React, { useEffect, useRef, useState } from "react";
import styles from "./Admin.module.scss";
import { NavLink } from "react-router-dom";
import CardItem from "../../components/CardItem/CardItem";
import AddItemModal from "../../components/AddItemModal/AddItemModal";
import api from "../../api/api";
import AnswerAndQuestion from "../../components/Questions/AnswerAndQuestion";
import AddFAQ from "../../components/AddFAQ/AddFAQ";
import axios from "axios";
import Password from "./Password/Password";

const Admin = () => {
  const [admin, setAdmin] = useState(false);
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const [text, setText] = useState("Доступные товары");
  const [faq, setFaq] = useState(false);
  const [img, setImg] = useState([]);
  const [users, setUsers] = useState([]);
  const [settings, setSettings] = useState({
    phone: "",
    time: "",
  });

  const ref = useRef();
  const second = useRef();

  useEffect(() => {
    api.allFaq().then(res => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    api.getImg().then(res => {
      console.log(res.data);
      setImg(res.data);
    });
  }, []);

  useEffect(() => {
    api.allItem().then(res => {
      setCart(res.data);
    });
  }, []);

  useEffect(() => {
    api.getSettings().then(res => {
      setSettings(res.data);
    });
  }, []);

  useEffect(() => {
    api.getAllUsers().then(res => {
      setUsers(res.data);
    });
  }, []);

  return (
    <>
      {admin == false ? (
        <Password setAdmin={setAdmin} />
      ) : (
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
                <p
                  className={styles.faq_text}
                  onClick={() => {
                    setText("Пользователи");
                  }}
                >
                  Пользователи
                </p>
                <p
                  className={styles.faq_text}
                  onClick={() => {
                    setText("Настройки");
                  }}
                >
                  Настройки
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
                            img={el.img}
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
                          src={el}
                          style={{ width: "300px", height: "150px" }}
                        />
                        <button
                          onClick={() => {
                            api.deleteImg(el).then(res => {
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
                                const id = index;
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
                    axios
                      .post("http://45.12.72.2:80/img", formData)
                      .then(res => {
                        console.log(res.data);
                        api.setImg(res.data.urlfile).then(() => {
                          api.getImg().then(res => {
                            setImg(res.data);
                          });
                          console.log(res.data);
                        });
                      });
                  }}
                />
              </div>
            )}
            {text == "Пользователи" && (
              <div className={styles.user_container}>
                {users.map(el => (
                  <div className={styles.user}>
                    <p>{el.name}</p>
                    <p>{el.email}</p>
                    <p>{el.phone}</p>
                  </div>
                ))}
              </div>
            )}
            {text == "Настройки" && (
              <div className={styles.cont}>
                <div>
                  <p>Телефон</p>
                  <input
                    value={settings.phone}
                    onChange={e => {
                      setSettings({
                        time: settings.time,
                        phone: e.target.value,
                      });
                    }}
                  />
                </div>
                <div>
                  <p>Время работы</p>
                  <input
                    value={settings.time}
                    onChange={e => {
                      setSettings({
                        time: e.target.value,
                        phone: settings.phone,
                      });
                    }}
                  />
                </div>
                <button
                  onClick={() => {
                    console.log();
                    api.setSettings(settings).then(res => {
                      console.log(res.data);
                      setSettings(res.data);
                    });
                  }}
                >
                  Сохранить
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
