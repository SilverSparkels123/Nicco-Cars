import React from "react";
import Card from "../UI/Card";
import CardFull from "../UI/CardFull";
import Question from "./Question";
import classes from "./QuestionSection.module.css";

const questions = [
  {
    id: 1,
    question: "Quisque velit nisi pretium ut lacinia in?",
    answer:
      "Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.",
  },
  {
    id: 2,
    question: "Cras ultricies ligula sed magna dictum porta?",
    answer:
      "Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nulla vitae elit libero, a pharetr",
  },
  {
    id: 3,
    question: "Mauris blandit aliquet elit eget tincidunt nibh pulvinar?",
    answer:
      "Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nulla vitae elit libero, a pharetra augue.",
  },
  {
    id: 4,
    question: "Pellentesque in ipsum id orci porta dapibus?",
    answer:
      "Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.",
  },
  {
    id: 5,
    question: "Quisque velit nisi pretium ut lacinia in?",
    answer:
      "Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nulla vitae elit libero, a pharetr",
  },
  {
    id: 6,
    question: "Mauris blandit aliquet elit eget tincidunt nibh pulvinar?",
    answer:
      "Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nulla vitae elit libero, a pharetra augue. ",
  },
  {
    id: 7,
    question: "Vestibulum ac diam sit amet quam vehicula elementum?",
    answer:
      "Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.",
  },
  {
    id: 8,
    question: "Quisque velit nisi pretium ut lacinia in?",
    answer:
      "Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.",
  },
];

const QuestionSection = () => {
  return (
    <CardFull className={classes.question_section__bg}>
      <Card className={classes.question_section_card}>
        <h1>Frequently Asked Questions</h1>
        <div className={classes.question_section}>
          {questions.map((ques) => {
            return (
              <Question
                question={ques.question}
                answer={ques.answer}
                key={ques.id}
              />
            );
          })}
        </div>
      </Card>
    </CardFull>
  );
};

export default QuestionSection;
