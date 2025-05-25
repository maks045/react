import React from "react";
import phone from "../../assets/svg/phone.svg";
import "./Card1.scss";

function Card1() {
  return (
    <div>
      <section className="section3">
        <h1>How the app works</h1>
        <img src={phone} alt="" />
        <div className="info">
          <h3>Create an account</h3>
          <h2>Create/login to an existing account to get started</h2>
          <p>An account is created with your email and a desired password</p>
        </div>
      </section>
    </div>
  );
}

export default Card1;
