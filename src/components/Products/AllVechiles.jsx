import React from "react";
import CarType from "../CabsTypes/CarType";
import Card from "../UI/Card";
import CardFull from "../UI/CardFull";
import classes from "./AllVechiles.module.css";

const VechTypes = [
  {
    id: 1,
    cabType: "Sedan",
    price: "1200",
    vehicleType: "Sedan",
    doors: 4,
    seats: 5,
    transmission: "automatic",
    moreDetails: {
      category: "(Dzire, Etois, Xcent)",
      rate: 1200,
      extraKmCharge: 12,
      extraHourCharge: 120,
      extraCharges: 150,
      ratePerKm: 18,
      minimumJourney: 250,
      driverTA: 300,
    },
  },
  {
    id: 2,
    cabType: "XUV Luxary",
    price: "2500",
    vehicleType: "Luxary",
    doors: 4,
    seats: 7,
    transmission: "Automatic",
    moreDetails: {
      category: "(Fortunar, BMW, AUDI, Jaguar)",
      rate: 2500,
      extraKmCharge: 25,
      extraHourCharge: 300,
      extraCharges: 500,
      ratePerKm: 30,
      minimumJourney: 250,
      driverTA: 500,
    },
  },
  {
    id: 3,
    cabType: "Mini XUV",
    price: "1500",
    vehicleType: "XUV",
    doors: 4,
    seats: 7,
    transmission: "Automatic",
    moreDetails: {
      category: "(Ertiga, Safari)",
      rate: 1500,
      extraKmCharge: 15,
      extraHourCharge: 150,
      extraCharges: 150,
      ratePerKm: 22,
      minimumJourney: 250,
      driverTA: 400,
    },
  },
];

const AllVechiles = () => {
  return (
    <CardFull>
      <Card>
        <div className={classes.car_type_div}>
          {VechTypes.map((vech) => {
            return (
              <CarType
                className={classes.car_type}
                cabType={vech}
                key={vech.id}
              />
            );
          })}
        </div>
      </Card>
    </CardFull>
  );
};

export default AllVechiles;
