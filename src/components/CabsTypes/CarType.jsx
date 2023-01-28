import React, { useState } from "react";
import classes from "./CarType.module.css";

import {
  AiFillCar,
  AiFillSetting,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import sedanCar from "./../../assets/dzire-nicco.png";
import CabMoreDetails from "./CabMoreDetails";

const CarType = (props) => {
  const {
    cabType,
    price,
    vehicleType,
    doors,
    seats,
    transmission,
    moreDetails,
  } = props.cabType;

  const [isOpenMoreDetail, setISOpenMoreDetail] = useState(false);

  const moreDetailsHandler = (event) => {
    setISOpenMoreDetail(!isOpenMoreDetail);
  };

  return (
    <div className={`${classes.car_type} ${props.className}`} id={props.id}>
      <img src={sedanCar} alt={props.alt_car_image} />
      <div className={classes.car_title}>
        <h4>{cabType}</h4>
        <h3>{`Starting Rs ${price}/day`}</h3>
      </div>
      <div className={classes.car_detail}>
        <div>
          <AiFillCar />
          <span>{`Vechile Type: ${vehicleType}`}</span>
        </div>
        <div>
          <FaUserFriends />
          <span>{`${doors} Doors, ${seats} Seats`}</span>
        </div>
        <div>
          <AiFillSetting />
          <span>{`Transmission: ${transmission}`}</span>
        </div>
      </div>
      <div className={classes.car_more_details} onClick={moreDetailsHandler}>
        <div>
          <h4>More Details</h4>
          <span>
            {!isOpenMoreDetail ? (
              <AiOutlinePlusCircle />
            ) : (
              <AiOutlineMinusCircle />
            )}
          </span>
        </div>
        {isOpenMoreDetail && (
          <CabMoreDetails
            moreDetails={moreDetails}
            className={classes.more_details}
          />
        )}
      </div>
      <div className={classes.btn_reserve_cab}>
        <button>Reserve Now</button>
      </div>
    </div>
  );
};

export default CarType;
