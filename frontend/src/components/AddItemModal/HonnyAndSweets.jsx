import React, { useEffect } from "react";

const HonnyAndSweets = ({ setCategory, change }) => {
  useEffect(() => {
    change === false && setCategory("Мед");
  }, []);
  return (
    <>
      <option value="Мед">Мед</option>
      <option value="Продукция пчеловодства">Продукция пчеловодства</option>
      <option value="Восточные сладости">Восточные сладости</option>
      <option value="Варенье">Варенье</option>
      <option value="Конфитюр">Конфитюр</option>
      <option value="Продукция для диабетиков">Продукция для диабетиков</option>
      <option value="Урбеч">Урбеч</option>
    </>
  );
};

export default HonnyAndSweets;
