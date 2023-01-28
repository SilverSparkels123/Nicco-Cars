import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import classes from "./Portfolio.module.css";
import portfolioImgOne from "./../../assets/portfolio_img_one.jpg";
import portfolioImgTwo from "./../../assets/portfolio_img_two.jpg";
import PortfolioQues from "./PortfolioQues";
import Review from "./Review";

const portFolioQuestions = [
  {
    id: 1,
    question: "What type of cabs you offered?",
    answer:
      "Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.",
  },
  {
    id: 2,
    question: "Specific Location Nicco offers to thier Clients?",
    answer:
      "Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.",
  },
  {
    id: 3,
    question: "Can we take cabs without driver or self driving?",
    answer:
      "Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.",
  },
  {
    id: 4,
    question: "Specific Location Nicco offers to thier Clients?",
    answer:
      "Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.",
  },
];

const Portfolio = () => {
  const [reviewList, setReviewList] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/api/v1/reviews");
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    fetchData()
      .then((res) => {
        setReviewList(res.data.reviews);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Card className={classes.portfolio}>
      <div className={classes.portfolio_data}>
        <div className={classes.portfolio_data_one}>
          <h1>Get Into Gear</h1>
          <p>
            One of the finest people mobility companies in India with separate
            divisions serving Corporate executive car rental and employee
            transportation, serving travel agents, tour operators and Event
            management companies for their ground transportation needs..
          </p>
          <img src={portfolioImgOne} alt="" />
        </div>
        <div className={classes.portfolio_data_two}>
          <div>
            <h2>We Got You Covered with Roadside Assistance</h2>
            <p>
              Our Company is vigilant in its enforcement towards corporate
              principles and is committed towards sustainable development and
              inclusive growth.
            </p>
          </div>
          <div>
            <img src={portfolioImgTwo} alt="" />
          </div>
        </div>
        <div className={classes.portfolio_ques}>
          {portFolioQuestions.map((ques) => {
            return <PortfolioQues question={ques} key={ques.id} />;
          })}
        </div>
      </div>
      <div className={classes.reviews}>
        <h1>
          What Our <span>Customers</span> Say?
        </h1>
        {reviewList.map((review) => {
          return <Review reviewFor={review} key={review._id} />;
        })}
      </div>
    </Card>
  );
};

export default Portfolio;
