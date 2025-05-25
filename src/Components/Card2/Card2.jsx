import React from "react";
import phone1 from "../../assets/svg/phone1.svg";
import "./Card2.scss";

function Card2() {
  return (
    <div>
      <section className="section4">
        <div className="info2">
          <div>
            <h3>Explore varieties</h3>
            <h2>Shop for your favorites meal as e dey hot.</h2>
            <p>
              Shop for your favorite meals or drinks and enjoy while doing it.
            </p>
          </div>
          <div>
            <img src={phone1} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card2;
