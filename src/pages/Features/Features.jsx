import React from "react";
import Last_section from "../../components/Last_section/Last_section";
import "../Features/Features.css";
import Features_feature from "./Features_feature/Features_feature";
import Features_home from "./Features_home/Features_home";
import Footer from '../../components/Footer/Footer.jsx'

function Features() {
  return (
    <>
      <section className="features_container">
        <Features_home />
        <Features_feature />
        <Last_section />
        <Footer/>
      </section>
    </>
  );
}

export default Features;
