import React from "react";
import Img_four from "../../../../public/svg/responsive.svg";
import Img_five from "../../../../public/svg/embed.svg";
import Img_six from "../../../../public/svg/no-limit.svg";
import Img_seven from "../../../../public/svg/custom.svg";
import Img_eight from "../../../../public/svg/boost.svg";
import Img_nine from "../../../../public/svg/drag.svg";
import "../Features_feature/Features_feature.css";

function Features_feature() {
  return (
    <>
      <section className="container2">

        <section className="container_feature2">
          <img src={Img_four} className="feature_img2" alt="" />
          <p className="feature_title2">100% Responsive</p>
          <p className="feature_paragraph2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a soluta
            dignissimos rem eveniet? Quidem.
          </p>
        </section>

        <section className="container_feature2">
          <img src={Img_five} className="feature_img2" alt="" />
          <p className="feature_title2">Embed</p>
          <p className="feature_paragraph2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a soluta
            dignissimos rem eveniet? Quidem.
          </p>
        </section>

        <section className="container_feature2">
          <img src={Img_six} className="feature_img2 modify_img6" alt="" />
          <p className="feature_title2">No-limit</p>
          <p className="feature_paragraph2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a soluta
            dignissimos rem eveniet? Quidem.
          </p>
        </section>

        <section className="container_feature2">
          <img src={Img_seven} className="feature_img2" alt="" />
          <p className="feature_title2">Custom</p>
          <p className="feature_paragraph2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a soluta
            dignissimos rem eveniet? Quidem.
          </p>
        </section>

        <section className="container_feature2">
          <img src={Img_eight} className="feature_img2" alt="" />
          <p className="feature_title2">Boost</p>
          <p className="feature_paragraph2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a soluta
            dignissimos rem eveniet? Quidem.
          </p>
        </section>

        <section className="container_feature2 bottom">
          <img src={Img_nine} className="feature_img2" alt="" />
          <p className="feature_title2">Drag</p>
          <p className="feature_paragraph2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a soluta
            dignissimos rem eveniet? Quidem.
          </p>
        </section>

      </section>
    </>
  );
}

export default Features_feature;
