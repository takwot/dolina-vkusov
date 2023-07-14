import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AnswerAndQuestion = ({ answer, question }) => {
  const [active, setActive] = useState(false);
  return (
    <Accordion sx={{ width: "100%" }}>
      <AccordionSummary
        onClick={() => {
          setActive(!active);
        }}
        expandIcon={
          <ExpandMoreIcon sx={{ color: active ? "#e7a173" : "black" }} />
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 600,
            color: active ? "#e7a173" : "black",
          }}
        >
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AnswerAndQuestion;
