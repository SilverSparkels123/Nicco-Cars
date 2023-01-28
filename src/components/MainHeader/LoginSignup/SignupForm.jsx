import React, { useContext, useState } from "react";
import classes from "./SignupForm.module.css";
import useInput from "../../hooks/use-input";
import SignUpContext from "../../store/signup-context";

const SignupForm = () => {
  const btnAction = useContext(SignUpContext);
  const [checkBox, setCheckBox] = useState(false);

  const {
    value: enteredName,
    inputClicked: nameInputIsClicked,
    isValid: enteredNameIsValid,
    hasError: nameInputIsInvalid,
    reset: nameInputReset,
    valueChangeHandler: nameChangeHandler,
    inputClickHandler: nameInputClickHandler,
    inputBlurHandler: nameInputBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredMNumber,
    inputClicked: mNumberInputIsClicked,
    isValid: enteredMNumberIsValid,
    hasError: mNumberInputIsInvalid,
    reset: mNumberInputReset,
    valueChangeHandler: mNumberChangeHandler,
    inputClickHandler: mNumberInputClickHandler,
    inputBlurHandler: mNumberInputBlurHandler,
  } = useInput((value) => value.trim().length === 10);

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

  if (
    enteredNameIsValid &&
    enteredMNumberIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid &&
    checkBox
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const userData = {
      name: enteredName,
      mobNumber: enteredMNumber,
      email: enteredEmail,
      password: enteredPassword,
    };

    fetch("http://localhost:4000/api/v1/new-user", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => {
      console.log(res.json());
    });

    console.log(userData);
    nameInputReset();
    mNumberInputReset();
    emailInputReset();
    passwordInputReset();
    setCheckBox(false);
    btnAction.onSignUp();
  };

  const nameInputClasses = nameInputIsInvalid
    ? `${classes.name_input} ${classes.invalid}`
    : `${classes.name_input}`;

  const mNumberInputClasses = mNumberInputIsInvalid
    ? `${classes.name_input} ${classes.invalid}`
    : `${classes.name_input}`;

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
    <div className={classes.nicco_signup_form}>
      <form onSubmit={formSubmitHandler}>
        <div className={nameInputClasses}>
          <label htmlFor="signup_name">Name</label>
          <input
            name="name"
            id="signup_name"
            className={
              nameInputIsClicked
                ? `${classes.input} ${classes.clicked}`
                : `${classes.input}`
            }
            onChange={nameChangeHandler}
            onClick={nameInputClickHandler}
            value={enteredName}
            type="text"
            placeholder="Your name"
            onBlur={nameInputBlurHandler}
          />
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="signup_email">Email</label>
          <input
            type="text"
            name="email"
            id="signup_email"
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
        <div className={mNumberInputClasses}>
          <label htmlFor="signup_number">Mobile Number</label>
          <input
            type="text"
            name="Mobile Number"
            id="signup_number"
            className={
              mNumberInputIsClicked
                ? `${classes.input} ${classes.clicked}`
                : `${classes.input}`
            }
            onChange={mNumberChangeHandler}
            onClick={mNumberInputClickHandler}
            onBlur={mNumberInputBlurHandler}
            value={enteredMNumber}
            placeholder="Mobile Number"
            maxLength="10"
          />
        </div>
        <div className={passwordInputClasses}>
          <label htmlFor="signup_password">Password</label>
          <input
            type="password"
            name="password"
            id="signup_password"
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
            type="checkbox"
            id="signup_terms"
            name="terms & conditions"
            value={checkBox}
            onChange={checkbox}
          />
          <label htmlFor="signup_terms">
            I agree all <a href="/">Terms & Conditions</a>
          </label>
        </li>
        <button className={classes.signup_btn} type="submit">
          Register Now
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
