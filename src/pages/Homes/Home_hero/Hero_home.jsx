import React from "react";
import Hero_img from "../../../../public/Img/iron cross.jpg";
import "../Home_hero/Hero_home.css";


function Hero_home() {
  return (
    <>
      <section className="hero_container">
        <div className="img_container">
          <img src={Hero_img} alt="Hero_img" id="Hero_imagenes"/>
        </div>
        <div className="hero_text">
          <h1 className="hero_title">CREATE AND SHARE YOUR PROGRESS</h1>
          <p className="hero_paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            mollitia architecto eaque eum voluptatum hic nulla quis blanditiis,
            qui culpa.
          </p>
          <button className="hero_btn">Go home ➡</button>
        </div>
      </section>
    </>
  );
}

export default Hero_home;
