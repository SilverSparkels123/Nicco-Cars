import React from "react";
import Card from "../UI/Card";
import CardFull from "../UI/CardFull";
import classes from "./ContactNow.module.css";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import ContactUsForm from "../ContactUs/ContactUsForm";

const ContactNow = () => {
  return (
    <CardFull className={classes.contact_now_section__bg}>
      <Card className={classes.contact_now_section}>
        <div className={classes.contact_now_section_details}>
          <h1>Contact Us</h1>
          <h4>Feel Free to make a call or Visit</h4>
          <div>
            <HiLocationMarker />
            <h3>H no. 1575, Sector-52, Wazirabad, Gurgaon – 122003</h3>
          </div>
          <div>
            <AiFillPhone />
            <h3>
              Contact No. (24 x 7) : <a href="/">+91 8053453559</a>
            </h3>
          </div>
          <div>
            <AiFillMail />
            <h3>
              <a href="/">niccocars@gmail.com</a>
            </h3>
          </div>
        </div>
        <div className={classes.contact_now_section_form}>
          <ContactUsForm />
        </div>
      </Card>
    </CardFull>
  );
};

export default ContactNow;
