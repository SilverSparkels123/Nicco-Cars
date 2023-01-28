import React from "react";
import Paddle from "./Paddle";
import classes from "./FeaturesPaddle.module.css";
import { AiFillCar, AiFillPhone } from "react-icons/ai";
import { BsLaptop } from "react-icons/bs";

const FeaturesPaddle = () => {
  return (
    <div className={classes.features_paddle}>
      <h1>Renting A Car Has Never Been Easier</h1>
      <div className={classes.paddles}>
        <Paddle
          icon={<AiFillCar />}
          h3="Search Your Ride"
          h4="Checkout Cabs"
          btn="Search Cab"
        />
        <Paddle
          icon={<AiFillPhone />}
          h3="Reserve by Phone"
          h4="Call Us 24/7"
          btn="+91 8053453559"
        />
        <Paddle
          icon={<BsLaptop />}
          h3="Reserve Online"
          h4="In Just a Few Clicks"
          btn="GET STARTED"
        />
      </div>
    </div>
  );
};

export default FeaturesPaddle;
