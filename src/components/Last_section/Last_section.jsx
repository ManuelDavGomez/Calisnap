import React from "react";
import '../Last_section/Last_section.css'
import xd2 from '../../../public/Img/xd2.jpg'

function Last_section() {
  return (
    <>
      <section className="Last_container">
        <div class="card bg-dark text-white imgs_container2">
          <img src={xd2} class="cards_img2" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, tempore.</h5>
            <button className="img_btn2">Go home ➡</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Last_section;
