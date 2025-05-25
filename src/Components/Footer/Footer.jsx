import React from "react";
import logo from "../../assets/svg/logo.svg";
import twit from "../../assets/svg/twit.svg";
import face from "../../assets/svg/face.svg";
import inst from "../../assets/svg/inst.svg";
import "./Footer.scss";

function Footer() {
  return (
    <div>
      <footer>
        <img src={logo} alt="" />
        <div className="foot">
          <img src={twit} alt="" />
          <img src={face} alt="" />
          <img src={inst} alt="" />
        </div>
        <h5>Copywright 2020 Bella Onojie.com</h5>
      </footer>
    </div>
  );
}

export default Footer;
