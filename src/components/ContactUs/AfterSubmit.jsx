import React, { useContext } from "react";
import SubmitContext from "../store/submit-context";
import classes from "./AfterSubmit.module.css";

const AfterSubmit = () => {
  const btnAction = useContext(SubmitContext);

  return (
    <div className={classes.submission_status}>
      <h3>Thanks for submitting us</h3>
      <button type="submit" onClick={btnAction.onSubmitOther}>
        Submit Another
      </button>
    </div>
  );
};

export default AfterSubmit;
