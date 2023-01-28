import React from "react";

const FooterPackages = (props) => {
  return (
    <div className={`${props.className}`}>
      <h2>Our Packages</h2>
      <ul>
        <li>
          <a href="/">Local Storage</a>
        </li>
        <li>
          <a href="/">Outstation Tour</a>
        </li>
        <li>
          <a href="/">8 Hours 80 Kms</a>
        </li>
        <li>
          <a href="/">Daily Route</a>
        </li>
        <li>
          <a href="/">Pickup & Drop</a>
        </li>
        <li>
          <a href="/">Trips & Tours</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterPackages;
