import React from "react";
import classes from "./CabMoreDetails.module.css";

const CabMoreDetails = (props) => {
  const {
    category,
    rate,
    extraKmCharge,
    extraHourCharge,
    extraCharges,
    ratePerKm,
    minimumJourney,
    driverTA,
  } = props.moreDetails;

  return (
    <ul className={`${classes.more_details} ${props.className}`}>
      <li>{`Cars in this Category :- ${category}`}</li>
      <li>{`Rate List For 8hrs 80 kms :– Rs ${rate}`}</li>
      <li>{`Extra km Charge :– Rs ${extraKmCharge} per KM`}</li>
      <li>{`Extra Hour Charge :– Rs ${extraHourCharge} per Hour`}</li>
      <li>
        {`Toll Parking Charges, Extra Driver Night Charge after 10 PM :– Rs
            ${extraCharges}`}
      </li>
      <li>* Type 2 (250 KM for Full Day)</li>
      <li>{`Rate Per Km :– Rs ${ratePerKm}`}</li>
      <li>{`Minimun Jouney :– ${minimumJourney} Kms`}</li>
      <li>{`Driver TA :– Rs ${driverTA}`}</li>
      <li>*Toll parking Charges Extra</li>
    </ul>
  );
};

export default CabMoreDetails;
