import React, { useContext } from "react";
import EnquireContext from "../store/enquire-context";
import FormCard from "../UI/FormCard";
import classes from "./ReturnEnquire.module.css";

const ReturnEnquire = () => {
  const btnAction = useContext(EnquireContext);

  return (
    <FormCard className={classes.enquire_form_card}>
      <div className={classes.submission_status}>
        <h3>Thanks for submitting us</h3>
        <button type="submit" onClick={btnAction.onReturn}>
          Submit Another
        </button>
      </div>
    </FormCard>
  );
};

export default ReturnEnquire;
