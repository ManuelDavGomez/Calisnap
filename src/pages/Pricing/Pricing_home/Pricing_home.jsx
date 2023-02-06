import React from "react";
import '../Pricing_home/Pricing_home.css'
import Pricing_img from '../../../../public/Img/xd3.jpg'

function Pricing_home() {
  return (
    <>
      <section className="pricing-home_container">
        <div className="img_container4">
          <img src={Pricing_img} alt="Hero_img4" />
        </div>
        <div className="hero_text4">
          <h1 className="hero_title4">Pricing</h1>
          <p className="hero_paragraph4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            mollitia architecto eaque eum voluptatum hic nulla quis blanditiis,
            qui culpa.
          </p>
        </div>
      </section>
    </>
  );
}

export default Pricing_home;
