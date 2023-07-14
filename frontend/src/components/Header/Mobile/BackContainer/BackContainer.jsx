import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const BackContainer = ({ setView }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "none",
      }}
      onClick={() => {
        setView(false);
      }}
    >
      <p style={{ fontSize: "17px", fontWeight: "600" }}>Назад</p>
      <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
    </div>
  );
};

export default BackContainer;
