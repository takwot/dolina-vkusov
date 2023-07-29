import React, { Children, cloneElement, useEffect, useState } from "react";
import styles from "./Carucel.module.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import api from "../../api/api";

const PAGE_WIDTH = 1300;

const Carucel = ({ images }) => {
  const [page, setPage] = useState(0);

  const screenWidth = window.screen.width;

  useEffect(() => {
    setTimeout(() => {
      if (page === (images.length - 1) * 100) {
        setPage(0);
      } else {
        setPage(page + 100);
      }
      console.log("end");
    }, 3500);
  }, [page]);

  return (
    <div className={styles.main_container}>
      <div className={styles.window}>
        <div
          className={styles.all_pages}
          style={{
            transform: `translateX(-${page}%)`,
          }}
        >
          {images.map((el, index) => (
            <img
              src={el.img}
              onClick={() => {}}
              key={el._id}
              style={{
                height: "100%",
                minWidth: "100%",
                maxWidth: "100%",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carucel;
