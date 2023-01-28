import React from "react";
import classes from "./TopBar.module.css";

import {
  AiFillPhone,
  AiTwotoneMail,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import CardFull from "../UI/CardFull";

const TopBar = () => {
  return (
    <CardFull>
      <ul className={classes.topbar}>
        <li>
          <a href="/">
            <AiFillPhone className={classes.icons} />
            <span> +91 8053453559</span>
          </a>
        </li>
        <li>
          <a href="/">
            <AiTwotoneMail className={classes.icons} />
            <span> contact@niccocars.com</span>
          </a>
        </li>
        <li>
          <a href="/">
            <AiFillFacebook className={classes.icons} />
          </a>
        </li>
        <li>
          <a href="/">
            <AiFillInstagram className={classes.icons} />
          </a>
        </li>
        <li>
          <a href="/">
            <AiFillTwitterSquare className={classes.icons} />
          </a>
        </li>
        <li>
          <a href="/">
            <AiFillLinkedin className={classes.icons} />
          </a>
        </li>
      </ul>
    </CardFull>
  );
};

export default TopBar;
