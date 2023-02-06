import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <section className="footer_container">
        
        <div className="logo-icons_container">
          <p className="logo_title">Calisthenics</p>
          <div className="icons_container">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-youtube"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-pinterest"></i>
            <i class="bi bi-instagram"></i>
          </div>
        </div>

        <div className="footer-links_container">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="/Stories">Stories</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="/Features">Features</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="/Pricing">Pricing</a>
            </li>
          </ul>
        </div>

        <div className="btn-copy_container">
          <button className="foot_btn">Go home ➡</button>
          <p className="foot_copy">Copyright 2022. All rights Reserved</p>
        </div>
      </section>
    </>
  );
}

export default Footer;
