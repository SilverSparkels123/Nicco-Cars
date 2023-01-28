import React from "react";

const FooterAbout = (props) => {
  return (
    <div className={props.className}>
      <h2>About Nicco</h2>
      <ul>
        <li>
          <a href="/">Introduction</a>
        </li>
        <li>
          <a href="/">Our Blog</a>
        </li>
        <li>
          <a href="/">Reviews</a>
        </li>
        <li>
          <a href="/">Career</a>
        </li>
        <li>
          <a href="/">Join Us Now</a>
        </li>
        <li>
          <a href="/">Partner</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterAbout;
