// import React, { useState, useEffect } from "react";
import Button from "../UI/Button";
import FormCard from "../UI/FormCard";
import classes from "./EnquireForm.module.css";
import useInput from "../hooks/use-input";
import { useContext } from "react";
import EnquireContext from "../store/enquire-context";

const EnquireForm = () => {
  const btnAction = useContext(EnquireContext);

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
    value: enteredLocation,
    inputClicked: locationInputIsClicked,
    isValid: enteredLocationIsValid,
    hasError: locationInputIsInvalid,
    reset: locationInputReset,
    valueChangeHandler: locationChangeHandler,
    inputClickHandler: locationInputClickHandler,
    inputBlurHandler: locationInputBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredCabType,
    // inputClicked: cabTypeInputIsClicked,
    isValid: enteredCabTypeIsValid,
    hasError: cabTypeInputIsInvalid,
    reset: cabTypeInputReset,
    valueChangeHandler: cabTypeChangeHandler,
    inputClickHandler: cabTypeInputClickHandler,
    inputBlurHandler: cabTypeInputBlurHandler,
  } = useInput((value) => value.trim() !== "" && value.trim() !== "none");

  const {
    value: enteredDate,
    inputClicked: dateInputIsClicked,
    isValid: enteredDateIsValid,
    hasError: dateInputIsInvalid,
    reset: dateInputReset,
    valueChangeHandler: dateChangeHandler,
    inputClickHandler: dateInputClickHandler,
    inputBlurHandler: dateInputBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredTime,
    inputClicked: timeInputIsClicked,
    isValid: enteredTimeIsValid,
    hasError: timeInputIsInvalid,
    reset: timeInputReset,
    valueChangeHandler: timeChangeHandler,
    inputClickHandler: timeInputClickHandler,
    inputBlurHandler: timeInputBlurHandler,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredMNumberIsValid &&
    enteredEmailIsValid &&
    enteredLocationIsValid &&
    enteredCabTypeIsValid &&
    enteredDateIsValid &&
    enteredTimeIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const enquireData = {
      name: enteredName,
      mobNumber: enteredMNumber,
      email: enteredEmail,
      pickUpLocation: enteredLocation,
      carType: enteredCabType,
      date: new Date(enteredDate),
      time: enteredTime,
    };

    fetch("http://localhost:4000/api/v1/new-req", {
      method: "POST",
      body: JSON.stringify(enquireData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => {
      res.json();
    });

    console.log(enquireData);
    nameInputReset();
    mNumberInputReset();
    emailInputReset();
    locationInputReset();
    cabTypeInputReset();
    dateInputReset();
    timeInputReset();
    btnAction.onEnquire();
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

  const locationInputClasses = locationInputIsInvalid
    ? `${classes.name_input} ${classes.invalid}`
    : `${classes.name_input}`;

  const cabTypeInputClasses = cabTypeInputIsInvalid
    ? `${classes.name_input} ${classes.invalid}`
    : `${classes.name_input}`;

  const dateInputClasses = dateInputIsInvalid
    ? `${classes.name_input} ${classes.invalid}`
    : `${classes.name_input}`;

  const timeInputClasses = timeInputIsInvalid
    ? `${classes.name_input} ${classes.invalid}`
    : `${classes.name_input}`;

  return (
    <FormCard className={classes.enquire_form_card}>
      <form
        className={classes.enquire_form}
        onSubmit={formSubmitHandler}
        id="Section1"
      >
        <div className={nameInputClasses}>
          <input
            className={
              nameInputIsClicked
                ? `${classes.input} ${classes.clicked}`
                : `${classes.input}`
            }
            onChange={nameChangeHandler}
            onClick={nameInputClickHandler}
            value={enteredName}
            type="text"
            id="name"
            placeholder="Your name"
            onBlur={nameInputBlurHandler}
          />
        </div>
        <div className={mNumberInputClasses}>
          <input
            className={
              mNumberInputIsClicked
                ? `${classes.input} ${classes.clicked}`
                : `${classes.input}`
            }
            onChange={mNumberChangeHandler}
            onClick={mNumberInputClickHandler}
            onBlur={mNumberInputBlurHandler}
            value={enteredMNumber}
            type="text"
            id="mNumber"
            placeholder="Mobile Number"
            maxLength="10"
          />
        </div>
        <div className={emailInputClasses}>
          <input
            className={
              emailInputIsClicked
                ? `${classes.input} ${classes.clicked}`
                : `${classes.input}`
            }
            onChange={emailChangeHandler}
            onClick={emailInputClickHandler}
            onBlur={emailInputBlurHandler}
            value={enteredEmail}
            type="text"
            id="email"
            placeholder="Email Address"
          />
        </div>
        <div className={locationInputClasses}>
          <input
            className={
              locationInputIsClicked
                ? `${classes.input} ${classes.clicked}`
                : `${classes.input}`
            }
            onChange={locationChangeHandler}
            onClick={locationInputClickHandler}
            onBlur={locationInputBlurHandler}
            value={enteredLocation}
            type="text"
            id="location"
            name="pickupLocation"
            placeholder="Pick Up Location"
          />
        </div>
        <div className={cabTypeInputClasses}>
          <select
            id="cartype"
            onChange={cabTypeChangeHandler}
            onClick={cabTypeInputClickHandler}
            onBlur={cabTypeInputBlurHandler}
          >
            <option value="none">Select an Option</option>
            <option value="sedan">Sedan</option>
            <option value="Innova Crysta">Innova Crysta</option>
            <option value="xuv">XUV</option>
            <option value="luxary">Luxary</option>
          </select>
        </div>
        <div className={dateInputClasses}>
          <input
            className={
              dateInputIsClicked
                ? `${classes.input} ${classes.clicked}`
                : `${classes.input}`
            }
            onChange={dateChangeHandler}
            onClick={dateInputClickHandler}
            onBlur={dateInputBlurHandler}
            value={enteredDate}
            type="date"
            id="pickup"
            placeholder="Your name"
          />
        </div>
        <div className={timeInputClasses}>
          <input
            className={
              timeInputIsClicked
                ? `${classes.input} ${classes.clicked}`
                : `${classes.input}`
            }
            onChange={timeChangeHandler}
            onClick={timeInputClickHandler}
            onBlur={timeInputBlurHandler}
            value={enteredTime}
            type="time"
            id="drop"
            placeholder="Time"
          />
        </div>
        <Button type="submit">Enquire Now</Button>
      </form>
    </FormCard>
  );
};

export default EnquireForm;
