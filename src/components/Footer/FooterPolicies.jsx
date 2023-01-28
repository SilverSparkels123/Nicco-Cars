import React from "react";

const FooterPolicies = (props) => {
  return (
    <div className={`${props.className}`}>
      <h2>Nicco Policies</h2>
      <ul>
        <li>
          <a href="/">Disclaimer</a>
        </li>
        <li>
          <a href="/">Privacy Policy</a>
        </li>
        <li>
          <a href="/">Cancellation & Refund</a>
        </li>
        <li>
          <a href="/">Terms & Conditions</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">C S R policy</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterPolicies;
