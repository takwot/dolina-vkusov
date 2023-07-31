import React, { useEffect } from "react";

const WeatherGift = ({ setCategory, change }) => {
  useEffect(() => {
    change === false && setCategory("Лечебные горные травы");
  }, []);
  return (
    <>
      <option value="Лечебные горные травы">Лечебные горные травы</option>
      <option value="Целебные средства">Целебные средства</option>
      <option value="Мази">Мази</option>
      <option value="Бальзам">Бальзам</option>
      <option value="Животный мир">Животный мир</option>
      <option value="Монастырская продукция">Монастырская продукция</option>
      <option value="Мыло ручной работы">Мыло ручной работы</option>
      <option value="Для ванн и купелей">Для ванн и купелей</option>
      <option value="Шерстяные изделия и трикотаж">
        Шерстяные изделия и трикотаж
      </option>
    </>
  );
};

export default WeatherGift;
