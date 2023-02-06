import React from "react";
import Pricing_home from "./Pricing_home/Pricing_home.jsx";
import "../Pricing/Pricing.css";
import Price from "./Price/Price.jsx";
import Last_section from "../../components/Last_section/Last_section.jsx";
import Foot from "../../components/Footer/Footer.jsx";

function Pricing() {
  return (
    <>
      <section className="pricing_container">
        <Pricing_home />
        <Price />
        <Last_section />
        <Foot />
      </section>
    </>
  );
}

export default Pricing;
