import React, { useContext } from "react";
import classes from "./SignUpSuccess.module.css";
import { TiTick } from "react-icons/ti";
import SignUpContext from "../../store/signup-context";

const SignUpSuccess = () => {
  const btnAction = useContext(SignUpContext);
  const btnDoneHandler = () => {
    btnAction.onReturn();
  };
  return (
    <div className={classes.sign_up_success_div}>
      <TiTick />
      <h1>Successful Signed Up</h1>
      <button onClick={btnDoneHandler}>Okay Done</button>
    </div>
  );
};

export default SignUpSuccess;
