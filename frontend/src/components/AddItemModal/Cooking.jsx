import React, { useEffect } from "react";

const Cooking = ({ setCategory, change }) => {
  useEffect(() => {
    change && setCategory("Сыры");
  }, []);
  return (
    <>
      <option value="Сыры">Сыры</option>
      <option value="Колбасы">Колбасы</option>
      <option value="Суджук">Суджук</option>
      <option value="Бастума">Бастума</option>
      <option value="Масла">Масла</option>
      <option value="Специи">Специи</option>
      <option value="Плоды, ягоды">Плоды, ягоды</option>
      <option value="Чаи">Чаи</option>
      <option value="Кофе">Кофе</option>
      <option value="Сухофрукты">Сухофрукты</option>
      <option value="Орехи">Орехи</option>
      <option value="Соусы">Соусы</option>
      <option value="Ажика">Ажика</option>
    </>
  );
};

export default Cooking;
