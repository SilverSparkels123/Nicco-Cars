import React, { useContext, useState } from "react";
import classes from "./LoginSignupPortal.module.css";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillTwitterCircle, AiOutlineClose } from "react-icons/ai";
import PortalCard from "../../UI/PortalCard";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import SignUpSuccess from "./SignUpSuccess";
import SignUpContext from "../../store/signup-context";

const LoginSignupPortal = (props) => {
  const [linkClicked, setLinkClicked] = useState(false);
  const [closeIconClicked, setCloseIconClicked] = useState(false);
  const btnAction = useContext(SignUpContext);


  const clickHandler = () => {
    setCloseIconClicked((prevState) => !prevState);
    props.onSaveClickedData(closeIconClicked);
  };

  const linkClickHandler = (event) => {
    event.preventDefault();
    setLinkClicked((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <div className={classes.backdrop}></div>
      <PortalCard className={classes.login_signup_portal}>
        <div className={classes.nicco_intro_div}>
          <div>
            <h1>Welcome Back</h1>
            <p>
              To Keep connected with us please login with your personal info
            </p>
            <button onClick={clickHandler} className={classes.close_portal_btn}>
              Close
            </button>
          </div>
        </div>
        <div className={classes.nicco_login_signup_form}>
          <div className={classes.login_signup_switch}>
            <AiOutlineClose
              className={classes.close_portel}
              onClick={clickHandler}
            />
            <h3>{!linkClicked ? "Register" : "Log In"}</h3>
            <p>
              {!linkClicked
                ? "Didn't have an account? "
                : "Already have an account? "}
              <a href="/" onClick={linkClickHandler}>
                {!linkClicked ? "Create your account" : "Login now "}
              </a>
              {!linkClicked ? " it takes less then a minute. " : ""}
            </p>
          </div>
          {!linkClicked && <LoginForm />}
          {linkClicked &&
            (!btnAction.btnClicked ? <SignupForm /> : <SignUpSuccess />)}
          {/* {linkClicked && <SignUpSuccess />} */}
          <div className={classes.login_by_option}>
            <p>:- or Login by</p>
            <div className={classes.login_options}>
              <BsFacebook />
              <FcGoogle />
              <AiFillTwitterCircle />
            </div>
          </div>
        </div>
      </PortalCard>
    </React.Fragment>
  );
};

export default LoginSignupPortal;
