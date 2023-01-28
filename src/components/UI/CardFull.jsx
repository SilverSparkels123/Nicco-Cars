import React from "react";
import classes from "./CardFull.module.css";

const CardFull = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default CardFull;
