import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";

import "./Header.scss";

function Header() {
  return (
    <header>
      <img src={logo} alt="" />

      <div className="link">
        <Link to="/">Home</Link>
        <Link to="product">Product</Link>
        <Link to="faq">Faq</Link>
        <Link to="contacts">Contacts</Link>
      </div>
    </header>
  );
}

export default Header;
