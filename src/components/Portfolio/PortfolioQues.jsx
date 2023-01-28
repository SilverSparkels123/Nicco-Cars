import React, { useState } from "react";
import classes from "./PortfolioQues.module.css";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
const PortfolioQues = (props) => {
  const [quesIsClicked, setQuesIsClicked] = useState(false);

  const quesClickHandler = () => {
    setQuesIsClicked(!quesIsClicked);
  };

  const answerHtml = (
    <div className={classes.answer}>
      <p>{props.question.answer}</p>
    </div>
  );

  return (
    <div className={classes.portfolio_ques}>
      <div className={classes.question} onClick={quesClickHandler}>
        <h4>{props.question.question}</h4>
        {!quesIsClicked ? <AiOutlinePlusCircle /> : <AiOutlineMinusCircle />}
      </div>
      {quesIsClicked && answerHtml}
    </div>
  );
};

export default PortfolioQues;
