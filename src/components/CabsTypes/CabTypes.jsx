import React, { useState, useEffect } from "react";

import Card from "../UI/Card";
import CarType from "./CarType";
import classes from "./CabTypes.module.css";
import CardFull from "../UI/CardFull";
import { Link } from "react-router-dom";

const CabTypes = () => {
  const [cabList, setCabList] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/api/v1/cabs");
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    fetchData()
      .then((res) => {
        setCabList(res.data.cabs);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <CardFull className={classes.Cab_types_bg}>
      <Card className={classes.cab_types}>
        <h1>Rental Vehicles</h1>
        <div className={classes.car_type}>
          {/* <CarType cabType={cabList[0]} key="0" />
          <CarType cabType={cabList[1]} key="1" />
          <CarType cabType={cabList[2]} key="2" /> */}
          {cabList.map((el) => {
            return <CarType cabType={el} key={el._id} />;
          })}
        </div>
        <div className={classes.btn_browse_all}>
          <Link to="/products">
            <button>BROWSE ALL VEHICLES</button>
          </Link>
        </div>
      </Card>
    </CardFull>
  );
};

export default CabTypes;
