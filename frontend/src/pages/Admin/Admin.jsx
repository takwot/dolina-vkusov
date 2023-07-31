import React, { useState } from "react";
import styles from "./Admin.module.scss";
import { NavLink, Route, Routes } from "react-router-dom";
import Password from "./Password/Password";
import Items from "../../components/Items/Items";
import CarucelAdmin from "../../components/CarucelAdmin/CarucelAdmin";
import FAQ from "../../components/FAQ/FAQ";
import Users from "../../components/Users/Users";
import Settings from "../../components/Settings/Settings";

const Admin = () => {
  const [admin, setAdmin] = useState(true);

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
              <div className={styles.info_container}>
                <NavLink to={"/admin/main"} className={styles.faq_text}>
                  Доступные товары
                </NavLink>
                <NavLink to={"/admin/carucel"} className={styles.faq_text}>
                  Карусель главной страницы
                </NavLink>
                <NavLink to={"/admin/question"} className={styles.faq_text}>
                  Часто задаваемые вопросы
                </NavLink>
                <NavLink to={"/admin/users"} className={styles.faq_text}>
                  Пользователи
                </NavLink>
                <NavLink to={"/admin/settings"} className={styles.faq_text}>
                  Настройки
                </NavLink>
              </div>
            </div>
            <Routes>
              <Route path="/main" element={<Items />} />
              <Route path="/carucel" element={<CarucelAdmin />} />
              <Route path="/question" element={<FAQ />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
