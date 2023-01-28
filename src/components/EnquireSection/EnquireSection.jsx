import React, { useContext } from "react";
import carEnquirePic from "../../assets/carEnquirePic.png";
import EnquireContext from "../store/enquire-context";
import Card from "../UI/Card";
import CardFull from "../UI/CardFull";
import EnquireForm from "./EnquireForm";
import classes from "./EnquireSection.module.css";
import ReturnEnquire from "./ReturnEnquire";

const EnquireSection = () => {
  const btnAction = useContext(EnquireContext);
  return (
    <CardFull className={classes.enquire_section__bg}>
      <Card className={classes.enquire_section}>
        <h1>
          Rental Cars Just a Step Away <span>Enquire Now</span>
        </h1>
        <div className={classes.enquire_div}>
          {/* <ReturnEnquire /> */}
          {!btnAction.btnClicked ? <EnquireForm /> : <ReturnEnquire />}
          <div className={classes.enquire_img_div}>
            <img src={carEnquirePic} alt="" />
          </div>
        </div>
      </Card>
    </CardFull>
  );
};

export default EnquireSection;
