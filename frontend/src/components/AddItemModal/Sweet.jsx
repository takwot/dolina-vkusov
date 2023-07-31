import React, { useEffect } from "react";

const Sweet = ({ setCategory, change }) => {
  useEffect(() => {
    change === false && setCategory("Рахат лукум");
  }, []);
  return (
    <>
      <option value="Рахат лукум">Рахат лукум</option>
      <option value="Нуга">Нуга</option>
      <option value="Чурчхела">Чурчхела</option>
      <option value="Пастила">Пастила</option>
      <option value="Пахвала">Пахвала</option>
      <option value="Халва">Халва</option>
      <option value="Щербет">Щербет</option>
      <option value="Джезерье">Джезерье</option>
    </>
  );
};

export default Sweet;
