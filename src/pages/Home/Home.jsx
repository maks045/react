import React from "react";
import hero from "../../assets/svg/hero.svg";
import hero2 from "../../assets/svg/hero2.svg";
import "./Home.scss";
import Card1 from "../../Components/Card1/Card1";
import Card2 from "../../Components/Card2/Card2";
import Card3 from "../../Components/Card3/Card3";
import hero3 from "../../assets/svg/hero3.svg";

function Home() {
  return (
    <div>
      <section>
        <img src={hero} alt="" />
        <div className="text">
          <h3>Food app</h3>
          <h1>
            Why stay hungry when <br /> you can order form Bella Onojie
          </h1>
          <p>Download the bella onoje’s food app now on</p>
          <div className="btn">
            <button>Playstore</button>
            <button>App store</button>
          </div>
        </div>
      </section>

      <section className="section2">
        <img src={hero2} alt="" />
        <div className="line"></div>
      </section>
      <Card1 />
      <Card2 />
      <Card3 />
      <section>
        <img src={hero3} alt="" />
        <div className="text2">
          <h1>Download the app now.</h1>
          <p>
            Available on your favorite store. Start your premium experience now
          </p>
          <div className="btn1">
            <button>Playstore</button>
            <button>App store</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
