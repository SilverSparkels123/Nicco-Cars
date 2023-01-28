import React from "react";
import classes from "./PortalCard.module.css";

const PortalCard = (props) => {
  return (
    <div className={`${classes.portal_card} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default PortalCard;
