import React, { useEffect } from "react";

const Honny = ({ setCategory, change }) => {
  useEffect(() => {
    change && setCategory("Пыльца");
  }, []);
  return (
    <>
      <option value="Пыльца">Пыльца</option>
      <option value="Перга">Перга</option>
      <option value="Маточное молочко">Маточное молочко</option>
      <option value="Трутневое молочко">Трутневое молочко</option>
      <option value="Огевка">Огевка</option>
      <option value="Подмор">Подмор</option>
    </>
  );
};

export default Honny;
