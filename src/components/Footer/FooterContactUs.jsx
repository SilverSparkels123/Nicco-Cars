import React from "react";

const FooterContactUs = (props) => {
  return (
    <div className={props.className}>
      <h2>Contact Us</h2>
      <div>
        <form action="">
          <input type="text" placeholder="Subscribe Now" />
          <button>Send Now</button>
        </form>
        <button className={props.callBtnClass}>Call Us Now</button>
      </div>
    </div>
  );
};

export default FooterContactUs;
