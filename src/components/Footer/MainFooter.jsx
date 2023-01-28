import React from "react";
import Card from "../UI/Card";
import CardFull from "../UI/CardFull";
import FooterAbout from "./FooterAbout";
import FooterContactUs from "./FooterContactUs";
import FooterPackages from "./FooterPackages";
import FooterPolicies from "./FooterPolicies";
import classes from "./MainFooter.module.css";

const MainFooter = () => {
  return (
    <CardFull className={classes.main_footer_bg}>
      <Card className={classes.main_footer}>
        <div className={classes.main_footer_links}>
          <FooterAbout className={classes.footer_about} />
          <FooterPolicies className={classes.footer_policies} />
          <FooterPackages className={classes.footer_packages} />
          <FooterContactUs
            callBtnClass={classes.call_btn_footer}
            className={classes.footer_contact_us}
          />
        </div>
        <div className={classes.main_footer_credit}>
          <h4>
            Copyright © 2023 <span>Nicco Cars</span>. All Right Reserved.
          </h4>
        </div>
      </Card>
    </CardFull>
  );
};

export default MainFooter;
