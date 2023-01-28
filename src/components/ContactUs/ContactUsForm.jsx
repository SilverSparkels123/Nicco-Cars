import React, { useContext } from "react";
import FormCard from "../UI/FormCard";
import classes from "./ContactUsForm.module.css";
import useInput from "../hooks/use-input";
import SubmitContext from "../store/submit-context";
// import { SubmitContext } from "../store/submit-context";

const ContactUsForm = (props) => {
  const btnAction = useContext(SubmitContext);

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
    value: enteredMessage,
    inputClicked: messageInputIsClicked,
    isValid: enteredMessageIsValid,
    hasError: messageInputIsInvalid,
    reset: messageInputReset,
    valueChangeHandler: messageChangeHandler,
    inputClickHandler: messageInputClickHandler,
    inputBlurHandler: messageInputBlurHandler,
  } = useInput((value) => value.trim() !== "" && value.trim().length >= 15);

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredMNumberIsValid &&
    enteredEmailIsValid &&
    enteredMessageIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const enquireData = {
      name: enteredName,
      mobNumber: enteredMNumber,
      email: enteredEmail,
      message: enteredMessage,
    };

    console.log(enquireData);
    nameInputReset();
    mNumberInputReset();
    emailInputReset();
    messageInputReset();
    // setRet((prevState) => !prevState);
    btnAction.onSubmit();
  };

  const nameInputClasses = nameInputIsInvalid
    ? `${classes.name_input} ${classes.invalid}`
    : `${classes.name_input}`;

  const mNumberInputClasses = mNumberInputIsInvalid
    ? `${classes.number_input} ${classes.invalid}`
    : `${classes.number_input}`;

  const emailInputClasses = emailInputIsInvalid
    ? `${classes.email_input} ${classes.invalid}`
    : `${classes.email_input}`;

  const messageInputClasses = messageInputIsInvalid
    ? `${classes.message_input} ${classes.invalid}`
    : `${classes.message_input}`;

  return (
    <FormCard className={classes.contact_us_form_card}>
      <form className={classes.contact_us_form} onSubmit={formSubmitHandler}>
        <div className={classes.form_div_inputs}>
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
              id="name_user"
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
              id="mNumber_user"
              placeholder="Mobile Number"
              maxLength="10"
            />
          </div>
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
            id="email_user"
            placeholder="Email Address"
          />
        </div>
        <div className={messageInputClasses}>
          <textarea
            className={
              messageInputIsClicked
                ? `${classes.input} ${classes.clicked}`
                : `${classes.input}`
            }
            onChange={messageChangeHandler}
            onClick={messageInputClickHandler}
            onBlur={messageInputBlurHandler}
            value={enteredMessage}
            type="text"
            id="message_user"
            name="Message"
            placeholder="message"
          />
        </div>
        <div className={classes.contact_us_form_btn_div}>
          <button type="submit" className={classes.contact_us_form_btn}>
            Submit
          </button>
        </div>
      </form>
    </FormCard>
  );
};

export default ContactUsForm;
