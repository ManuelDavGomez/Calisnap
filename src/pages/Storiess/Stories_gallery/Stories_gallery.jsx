import React from "react";
import "../Stories_gallery/Stories_gallery.css";
import Img1 from "../../../../public/Img/lsit.jpg";
import Img2 from "../../../../public/Img/extras.jpg";
import Img3 from "../../../../public/Img/imposiblee.jpg";
import Img4 from "../../../../public/Img/muscleup.jpg";
import Img5 from "../../../../public/Img/front-lever.jpg";
import Img6 from "../../../../public/Img/fullplanche.jpg";
import Img7 from "../../../../public/Img/humanflag.jpg";
import Img8 from "../../../../public/Img/onearmpullup.jpg";

function Stories_gallery() {
  return (
    <>
      <section className="galery_container1">
        <div class="card bg-dark text-white imgs_container1">
          <img src={Img1} class="cards_img1" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title1">L-sit</h5>
            <p class="card-text1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              unde tenetur ipsam at qui?
            </p>
            <button className="img_btn1">Go home ➡</button>
          </div>
        </div>

        <div class="card bg-dark text-white imgs_container1">
          <img src={Img3} class="cards_img1" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title1">Imposible Dip</h5>
            <p class="card-text1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              unde tenetur ipsam at qui?
            </p>
            <button className="img_btn1">Go home ➡</button>
          </div>
        </div>

        <div class="card bg-dark text-white imgs_container1">
          <img src={Img2} class="cards_img1" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title1">Extras</h5>
            <p class="card-text1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              unde tenetur ipsam at qui?
            </p>
            <button className="img_btn1">Go home ➡</button>
          </div>
        </div>

        <div class="card bg-dark text-white imgs_container1">
          <img src={Img4} class="cards_img1" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title1">Muscle up</h5>
            <p class="card-text1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              unde tenetur ipsam at qui?
            </p>
            <button className="img_btn1">Go home ➡</button>
          </div>
        </div>

        <div class="card bg-dark text-white imgs_container1">
          <img src={Img5} class="cards_img1" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title1">Front Lever</h5>
            <p class="card-text1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              unde tenetur ipsam at qui?
            </p>
            <button className="img_btn1">Go home ➡</button>
          </div>
        </div>

        <div class="card bg-dark text-white imgs_container1">
          <img src={Img6} class="cards_img1" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title1">Full Planche</h5>
            <p class="card-text1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              unde tenetur ipsam at qui?
            </p>
            <button className="img_btn1">Go home ➡</button>
          </div>
        </div>

        <div class="card bg-dark text-white imgs_container1">
          <img src={Img7} class="cards_img1" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title1">Human Flag</h5>
            <p class="card-text1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              unde tenetur ipsam at qui?
            </p>
            <button className="img_btn1">Go home ➡</button>
          </div>
        </div>

        <div class="card bg-dark text-white imgs_container1">
          <img src={Img8} class="cards_img1" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title1">One Arm Pull Up</h5>
            <p class="card-text1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              unde tenetur ipsam at qui?
            </p>
            <button className="img_btn1">Go home ➡</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Stories_gallery;
