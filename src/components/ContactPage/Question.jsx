import React from "react";
import classes from "./Question.module.css";
import { BsFillQuestionSquareFill } from "react-icons/bs";

const Question = (props) => {
  return (
    <div className={classes.question_section}>
      <div className={classes.question_logo}>
        <BsFillQuestionSquareFill />
      </div>
      <div className={classes.question_answer}>
        <h3>{props.question}</h3>
        <p>{props.answer}</p>
      </div>
    </div>
  );
};

export default Question;
