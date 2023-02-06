import React from "react";
import '../Features_home/Features_home.css';
import Hero from '../../../../public/Img/xd.jpg'

function Features_home() {
  return (
    <>
      <section className="hero_container2">
        <div className="img_container2">
          <img src={Hero} alt="Hero_img" />
        </div>
        <div className="hero_text2">
          <h1 className="hero_title2">Straddle Planche</h1>
          <p className="hero_paragraph2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            mollitia architecto eaque eum voluptatum hic nulla quis blanditiis,
            qui culpa. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quidem, possimus.
          </p>
        </div>
      </section>
    </>
  );
}

export default Features_home;
