import React from "react";
import classes from "./Paddle.module.css";

const Paddle = (props) => {
  return (
    <div className={classes.paddle}>
      <div>{props.icon}</div>

      <h3>{props.h3}</h3>

      <h4>{props.h4}</h4>

      <button className={classes.paddle_btn} onClick={props.onClick}>
        {props.btn}
      </button>
    </div>
  );
};

export default Paddle;
