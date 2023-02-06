import React from "react";
import '../Stories_home/Stories_home.css'
import Img1 from "../../../../public/Img/handstand.jpg"

function Stories_home() {
  return (
    <>
      <section className="hero_container1">
        <div className="img_container1">
          <img src={Img1} alt="Hero_img" />
        </div>
        <div className="hero_text1">
          <h1 className="hero_title1">The Handstand</h1>
          <p className="hero_paragraph1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            mollitia architecto eaque eum voluptatum hic nulla quis blanditiis,
            qui culpa. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, possimus.
          </p>
          <button className="hero_btn1">Go home ➡</button>
        </div>
      </section>
    </>
  );
}

export default Stories_home;
