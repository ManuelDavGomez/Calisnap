import React from "react";
import Img1 from "../../../../public/Img/front-lever.jpg";
import Img2 from "../../../../public/Img/fullplanche.jpg";
import Img3 from "../../../../public/Img/humanflag.jpg";
import Img4 from "../../../../public/Img/onearmpullup.jpg";
import "./Hero_galery.css";

function Hero_galery() {
  return (
    <>
      <section className="galery_container">

        <div class="card bg-dark text-white imgs_container">
          <img src={Img1} class="cards_img" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title">Front lever</h5>
            <p class="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              unde tenetur ipsam at qui?
            </p>
            <button className="img_btn">Go home ➡</button>
          </div>
        </div>

        <div class="card bg-dark text-white imgs_container">
          <img src={Img2} class="cards_img" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title">Full Planche</h5>
            <p class="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              unde tenetur ipsam at qui?
            </p>
            <button className="img_btn">Go home ➡</button>
          </div>
        </div>

        <div class="card bg-dark text-white imgs_container">
          <img src={Img3} class="cards_img" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title">Human Flag</h5>
            <p class="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              unde tenetur ipsam at qui?
            </p>
            <button className="img_btn">Go home ➡</button>
          </div>
        </div>

        <div class="card bg-dark text-white imgs_container">
          <img src={Img4} class="cards_img" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title">One Arm Pull Up</h5>
            <p class="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              unde tenetur ipsam at qui?
            </p>
            <button className="img_btn">Go home ➡</button>
          </div>
        </div>

      </section>
    </>
  );
}

export default Hero_galery;
