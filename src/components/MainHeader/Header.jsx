import React, { useContext, useState } from "react";
import MainMenu from "./MainMenu.jsx";
import Logo from "../../assets/Logo.png";
import classes from "./Header.module.css";
import Card from "../UI/Card.jsx";
import LogInContext from "../store/login-context.jsx";

const Header = (props) => {
  const [fix, setFix] = useState();
  const logInBtnAction = useContext(LogInContext);

  const setFixed = () => {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", setFixed);
  return (
    <Card
      className={
        fix ? `${classes.header} ${classes.fixed}` : `${classes.header}`
      }
    >
      <div>
        {!logInBtnAction.isLoggedIn ? (
          <img src={Logo} alt="Logo for Nicco" />
        ) : (
          <h2>
            Welcome Back, <span>{logInBtnAction.loggedInData.name}</span>
          </h2>
        )}
        {/* <img src={Logo} alt="Logo for Nicco" /> */}
      </div>
      <MainMenu />
    </Card>
  );
};

export default Header;
