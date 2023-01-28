import React from "react";
import Card from "../UI/Card";
import classes from "./OffersSection.module.css";

import { AiTwotoneTag, AiFillCar } from "react-icons/ai";
import { BiTime, BiMobileAlt } from "react-icons/bi";
import { FaKey, FaRoute } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const offers = [
  {
    id: 1,
    logo: <AiTwotoneTag />,
    heading: "Flexible Rates",
    data: "Easily plan a day out without having to worry about conveyance",
  },
  {
    id: 2,
    logo: <FaKey />,
    heading: "Unlimited Gas & Miles",
    data: "Book our Cabs accross all over India. Pick your favourite car, time and place",
  },
  {
    id: 3,
    logo: <BiTime />,
    heading: "24/7 Pickup & Return",
    data: "We will deliver the car to your doorstep",
  },
  {
    id: 4,
    logo: <HiLocationMarker />,
    heading: "Multi Drop-Off Locations",
    data: "Feel free to guide the Captain for the various locations.",
  },
];

const works = [
  {
    id: 1,
    logo: <BiMobileAlt />,
    heading: "Book Your Favourite Cab",
    data: "We will confirm your booking in few seconds",
  },
  {
    id: 2,
    logo: <HiLocationMarker />,
    heading: "Your pick-up Point",
    data: "Our Driver picked up you on given Time & Location",
  },
  {
    id: 3,
    logo: <AiFillCar />,
    heading: "Enjoy Ride",
    data: "Enjoy your ride as per your sechdule with no worries",
  },
  {
    id: 4,
    logo: <FaRoute />,
    heading: "Drop at Destination",
    data: "Our cab safely drops you at your Desired location",
  },
];

const OffersSection = () => {
  return (
    <Card className={classes.offers_section}>
      <h1>
        What we <span>OFFERS</span>
      </h1>
      <div className={classes.offers}>
        {offers.map((el) => (
          <div className={classes.offer} key={el.id}>
            <div className={classes.offer_icon}>{el.logo}</div>
            <div>
              <h3>{el.heading}</h3>
              <p>{el.data}</p>
            </div>
          </div>
        ))}
      </div>
      <h1>
        How <span>EASY</span> it Works
      </h1>
      <div className={classes.works}>
        {works.map((el) => (
          <div className={classes.work} key={el.id}>
            <div className={classes.work_icon}>{el.logo}</div>
            <h3>{el.heading}</h3>
            <p>{el.data}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default OffersSection;
