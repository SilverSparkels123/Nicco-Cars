import React from "react";
import CardFull from "../UI/CardFull";
import classes from "./OurFleetHead.module.css";

const OurFleetHead = () => {
  return (
    <CardFull className={classes.heading_bg}>
      <h1>
        Our <span>Fleet</span>
      </h1>
    </CardFull>
  );
};

export default OurFleetHead;
