import React, { useContext, useState } from "react";
import classes from "./MainMenuDrop.module.css";
import LoginSignupPortal from "./LoginSignup/LoginSignupPortal.jsx";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import LogInContext from "../store/login-context";

const MainMenuDrop = (props) => {
  const [loginSignupBtnClicked, setLoginSignupBtnClicked] = useState(false);

  const loginSignupBtnClickHandler = (event) => {
    setLoginSignupBtnClicked((prevState) => !prevState);
  };

  const btnClicked = (data) => {
    setLoginSignupBtnClicked((prevState) => data);
  };

  const logInBtnAction = useContext(LogInContext);

  const logOutBtnClickHandler = () => {
    logInBtnAction.onLogOut();
  };

  return (
    <nav className={`${classes.main_menu_links_div} ${props.className}`}>
      <ul className={classes.main_menu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className={classes.about_dropdown}>
          <Link to="/about-us">
            About Us <MdKeyboardArrowDown />
          </Link>
          <div className={classes.about_links}>
            <Link to="/about/introduction">Introduction</Link>
            <Link to="/about/our-blog">Our Blog</Link>
            <Link to="/about/career">Career</Link>
            <Link to="/about/partners">Partners</Link>
          </div>
        </li>
        <li className={classes.products_dropdown}>
          <Link to="/products">
            Products <MdKeyboardArrowDown />
          </Link>
          <div className={classes.products_links}>
            <Link to="/products/luxary">Luxary Vechiles</Link>
            <Link to="/products/sedan">Sedan</Link>
            <Link to="/products/suv">Mini / Large Suv</Link>
            <Link to="/products/tempo-travller">Tempo Travler</Link>
          </div>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
      <div className={classes.login_signup_btn_div}>
        {!logInBtnAction.isLoggedIn ? (
          <button
            className={classes.login_signup_btn}
            onClick={loginSignupBtnClickHandler}
          >
            Login/Signup
          </button>
        ) : (
          <button
            className={classes.login_signup_btn}
            onClick={logOutBtnClickHandler}
          >
            Logout
          </button>
        )}
      </div>
      {loginSignupBtnClicked && !logInBtnAction.isLoggedIn && (
        <LoginSignupPortal onSaveClickedData={btnClicked} />
      )}
    </nav>
  );
};

export default MainMenuDrop;
