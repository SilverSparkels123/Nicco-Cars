import React, { useContext, useState } from "react";
import classes from "./LoginForm.module.css";
import useInput from "../../hooks/use-input";
import LogInContext from "../../store/login-context";

const LoginForm = () => {
  // const [checkBox, setCheckBox] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const logInBtnAction = useContext(LogInContext);

  const {
    value: enteredEmail,
    inputClicked: emailInputIsClicked,
    isValid: enteredEmailIsValid,
    hasError: emailInputIsInvalid,
    reset: emailInputReset,
    valueChangeHandler: emailChangeHandler,
    inputClickHandler: emailInputClickHandler,
    inputBlurHandler: emailInputBlurHandler,
  } = useInput((value) => value.includes("@") && value.includes("."));

  const {
    value: enteredPassword,
    inputClicked: passwordInputIsClicked,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputIsInvalid,
    reset: passwordInputReset,
    valueChangeHandler: passwordChangeHandler,
    inputClickHandler: passwordInputClickHandler,
    inputBlurHandler: passwordInputBlurHandler,
  } = useInput((value) => value.trim() !== "" && value.trim().length >= 6);

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid && checkBox) {
    formIsValid = true;
  }

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const userData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    const response = await fetch("http://localhost:4000/api/v1/login", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    // .then((res) => {
    //   console.log(res.json());
    // });
    const data = await response.json();
    if (data) {
      console.log("Successful");
    } else {
      console.log("Failed");
    }
    // console.log(userData);
    emailInputReset();
    passwordInputReset();
    setCheckBox(false);
    logInBtnAction.onLogIn(data);
  };

  // console.log("Data Recieved", logInBtnAction.loggedInData);
  // console.log("Data Recieved true or false", logInBtnAction.isLoggedIn);

  const emailInputClasses = emailInputIsInvalid
    ? `${classes.name_input} ${classes.invalid}`
    : `${classes.name_input}`;

  const passwordInputClasses = passwordInputIsInvalid
    ? `${classes.name_input} ${classes.invalid}`
    : `${classes.name_input}`;

  const checkbox = () => {
    setCheckBox((prevState) => !prevState);
  };
  return (
    <div className={classes.nicco_login_form}>
      <form action="" onSubmit={formSubmitHandler}>
        <div className={emailInputClasses}>
          <label htmlFor="login_username">Username/Email</label>
          <input
            type="text"
            name="username"
            id="login_username"
            className={
              emailInputIsClicked
                ? `${classes.input} ${classes.clicked}`
                : `${classes.input}`
            }
            onChange={emailChangeHandler}
            onClick={emailInputClickHandler}
            onBlur={emailInputBlurHandler}
            value={enteredEmail}
            placeholder="Email Address"
          />
        </div>
        <div className={passwordInputClasses}>
          <label htmlFor="login_password">Password</label>
          <input
            id="login_password"
            type="password"
            name="password"
            className={
              passwordInputIsClicked
                ? `${classes.input} ${classes.clicked}`
                : `${classes.input}`
            }
            onChange={passwordChangeHandler}
            onClick={passwordInputClickHandler}
            onBlur={passwordInputBlurHandler}
            value={enteredPassword}
            placeholder="Enter Password"
          />
        </div>
        <li className={classes.stay_checkbox}>
          <input
            id="login_stay_loggedin"
            name="Loged In"
            type="checkbox"
            value={checkBox}
            onChange={checkbox}
          />
          <label htmlFor="login_stay_loggedin">Stay Logged In.</label>
        </li>
        <button className={classes.login_btn}>Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
