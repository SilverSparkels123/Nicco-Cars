import React from "react";
import classes from "./Review.module.css";
import { AiFillStar } from "react-icons/ai";

const Review = (props) => {
  let stars = [];
  for (let i = 0; i < props.reviewFor.rating; i++) {
    stars.push(<AiFillStar />);
  }

  // const star = <AiFillStar />;
  return (
    <div className={classes.review}>
      <h3>{props.reviewFor.title}</h3>
      <p>{props.reviewFor.comment}</p>
      <h2>
        {props.reviewFor.name} <br /> ( <span>{stars}</span> )
      </h2>
    </div>
  );
};

export default Review;
