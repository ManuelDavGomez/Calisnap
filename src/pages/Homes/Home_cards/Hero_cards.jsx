import React from "react";
import Card1_img from "../../../../public/Img/hefesto.jpg";
import Card2_img from "../../../../public/Img/backlever.jpg";
import "../Home_cards/Hero_cards.css";

function Hero_cards() {
  return (
    <>
      <section className="cards_container">
        <div className="card1_container">
          <div className="card_img">
            <img src={Card1_img} alt="" className="card_img" />
          </div>

          <div className="card_texts">
            <h1 className="card_title">Hefesto</h1>
            <p className="card_paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              ipsum suscipit corrupti earum! Asperiores, placeat quo est ratione
              fuga iste!
            </p>
            <button className="card_btn">Go home ➡</button>
          </div>
        </div>

        <div className="card1_container">
          <div className="card_img">
            <img src={Card2_img} alt="" className="card_img" />
          </div>

          <div className="card_texts">
            <h1 className="card_title">Back Lever</h1>
            <p className="card_paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              ipsum suscipit corrupti earum! Asperiores, placeat quo est ratione
              fuga iste!
            </p>
            <button className="card_btn">Go home ➡</button>
          </div>
        </div>


      </section>
    </>
  );
}

export default Hero_cards;
