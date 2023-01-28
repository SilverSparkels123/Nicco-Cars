import React from "react";
import TopBar from "./TopBar.jsx";
import Header from "./Header.jsx";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <div className={classes.main_header}>
      <TopBar></TopBar>
      <Header></Header>
    </div>
  );
};

export default MainHeader;
