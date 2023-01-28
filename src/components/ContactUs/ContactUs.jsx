import React, { useContext } from "react";
import Card from "../UI/Card";
import CardFull from "../UI/CardFull";
import classes from "./ContactUs.module.css";

import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

import ContactUsForm from "./ContactUsForm";
import AfterSubmit from "./AfterSubmit";
import SubmitContext from "../store/submit-context";
// import { SubmitContextProvider } from "../store/submit-context";

const ContactUs = () => {
  const btnAction = useContext(SubmitContext);

  return (
    <CardFull className={classes.contact_us_section_bg}>
      <Card className={classes.contact_us_section}>
        <h1>Contact Us</h1>
        <div className={classes.contact_us_form_div}>
          <div className={classes.contact_us_form}>
            {!btnAction.btnClicked ? <ContactUsForm /> : <AfterSubmit />}
          </div>
          <div className={classes.contact_data}>
            <ul>
              <li>
                <AiFillMail />
                <a href="/">contact@niccocars.com</a>
              </li>
              <li>
                <AiFillPhone />
                <a href="/">+91 8053453559</a>
              </li>
              <li className={classes.location_icon}>
                <HiLocationMarker />
                <a href="/">1575, Sector-52, Wazirabad, Gurgaon-122003</a>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </CardFull>
  );
};

export default ContactUs;
