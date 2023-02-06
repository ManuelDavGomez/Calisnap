import React from "react";
import Img_one from '../../../../public/svg/responsive.svg' 
import Img_two from '../../../../public/svg/no-limit.svg' 
import Img_three from '../../../../public/svg/embed.svg' 
import '../Home_features/Home_features.css'

function Home_features() {
  return (
    <>
      <section className="features_container">
        
        <section className="container_feature">
            <img src={Img_one} className="feature_img" alt="" />
            <p className="feature_title">100% Responsive</p>
            <p className="feature_paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a soluta dignissimos rem eveniet? Quidem.</p>
        </section>

        <section className="container_feature">
            <img src={Img_two} className="feature_img" alt="" />
            <p className="feature_title"> No Upload limit</p>
            <p className="feature_paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a soluta dignissimos rem eveniet? Quidem.</p>
        </section>

        <section className="container_feature">
            <img src={Img_three} className="feature_img" alt="" />
            <p className="feature_title">Avaliable to embed</p>
            <p className="feature_paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a soluta dignissimos rem eveniet? Quidem.</p>
        </section>

      </section>
    </>
  );
}

export default Home_features;
