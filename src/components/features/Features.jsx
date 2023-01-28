import React from "react";
import classes from "./Features.module.css";
import CardFull from "./../UI/CardFull";
import Card from "./../UI/Card";
// import { CiBookmarkCheck } from "react-icons/ci";
import Button from "../UI/Button";
import { TiTick } from "react-icons/ti";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

const Features = () => {
  return (
    <CardFull className={classes.features_bg_full}>
      <Card className={classes.features_bg}>
        <h1>Satisfaction Guaranteed</h1>
        <div className={classes.features_div}>
          <ul>
            <li>
              <div className={classes.features_opt}>
                <TiTick /> <span>100% Pickup & Drop on time</span>
              </div>
            </li>
            <li>
              <div className={classes.features_opt}>
                <TiTick /> <span>No limits</span>
              </div>
            </li>
            <li>
              <div className={classes.features_opt}>
                <TiTick /> <span>Limited Liabilities</span>
              </div>
            </li>
            <li>
              <div className={classes.features_opt}>
                <TiTick /> <span>No Hidden Charges</span>
              </div>
            </li>
            <li>
              <div className={classes.features_opt}>
                <TiTick /> <span>Provide cabs in All India</span>
              </div>
            </li>
            <li>
              <div className={classes.features_opt}>
                <TiTick /> <span>Safe, Sanitized Car</span>
              </div>
            </li>
          </ul>
        </div>
        <div className={classes.btn_features_div}>
          <Link
            to="Section1"
            spy={true}
            smooth={true}
            offset={-150}
            duration={300}
          >
            <Button className={classes.btn_features}>Reserve A Car</Button>
          </Link>
        </div>
      </Card>
    </CardFull>
  );
};

export default Features;
