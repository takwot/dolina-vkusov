import React, { Children, cloneElement, useEffect, useState } from "react";
import styles from "./Carucel.module.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import api from "../../api/api";

const PAGE_WIDTH = 1300;

const Carucel = ({ images }) => {
  const [page, setPage] = useState(0);

  const [numberOfPage, setNumberOfPage] = useState(0);

  const [first, setFirst] = useState(true);

  const screenWidth = window.screen.width;

  useEffect(() => {
    setTimeout(() => {
      console.log(images.length);
      if (screenWidth > 1000) {
        if (first == true) {
          setPage(page - 1300);
          setFirst(false);
        } else {
          if (numberOfPage < images.length - 1) {
            setPage(page - 1300);
            setNumberOfPage(numberOfPage + 1);
          }
          if (numberOfPage == images.length - 1) {
            setPage(0);
            setNumberOfPage(0);
          }
        }
      } else {
        if (first == true) {
          setPage(page - 350);
          setFirst(false);
        } else {
          if (numberOfPage < images.length - 1) {
            setPage(page - 350);
            setNumberOfPage(numberOfPage + 1);
          }
          if (numberOfPage == images.length - 1) {
            setPage(0);
            setNumberOfPage(0);
          }
        }
      }
    }, 5000);
  }, [page]);

  return (
    <div className={styles.main_container}>
      <div className={styles.window}>
        <div
          className={styles.all_pages}
          style={{ transform: `translateX(${page}px)` }}
        >
          {images.map(el => (
            <img
              src={el}
              onClick={() => {}}
              key={el}
              style={{
                height: "100%",
                minWidth: screenWidth > 1000 ? `${PAGE_WIDTH}px` : `350px`,
                maxWidth: screenWidth > 1000 ? `${PAGE_WIDTH}px` : `350px`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carucel;
