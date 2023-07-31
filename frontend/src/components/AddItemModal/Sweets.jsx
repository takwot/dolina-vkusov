import React, { useEffect } from "react";

const Sweets = ({ setCategory, change }) => {
  useEffect(() => {
    change && setCategory("Конфеты Нальчик");
  }, []);
  return (
    <>
      <option value="Конфеты Нальчик">Конфеты Нальчик</option>
      <option value="Конфеты из Ирана">Конфеты из Ирана</option>
      <option value="Конфеты из Турции">Конфеты из Турции</option>
      <option value="Подарочные коробки">Подарочные коробки</option>
    </>
  );
};

export default Sweets;
