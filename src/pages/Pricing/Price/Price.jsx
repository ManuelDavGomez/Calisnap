import React from "react";
import "../Price/Price.css";

function Price() {
  return (
    <>
      <section className="price_container">
        <section className="prices_container">
          <p className="price_title">Basic</p>
          <p className="price_text">
            Includes basic usage of our platform. Recommended for new and
            aspiring photographers.
          </p>
          <p className="prices">$19.00</p>
          <p className="price_fecha">per month</p>

          <p className="features_lists">UNLIMITED STORY POSTING</p>
          <p className="features_lists">UNLIMITED PHOTO UPLOAD</p>

          <button className="price_btn">PICK PLAN</button>
        </section>

        <section className="prices_container color_container">
          <p className="price_title color_title">Pro</p>
          <p className="price_text">
            More advanced features available. Recommended for photography
            veterans and professionals.
          </p>
          <p className="prices color_prices">$39.00</p>
          <p className="price_fecha">per month</p>

          <p className="features_lists color_lists">UNLIMITED STORY POSTING</p>
          <p className="features_lists color_lists">UNLIMITED PHOTO UPLOAD</p>
          <p className="features_lists color_lists">EMBEDDING CUSTOM CONTENT</p>
          <p className="features_lists color_lists">CUSTOMIZE METADATA</p>

          <button className="price_btn color_btn">PICK PLAN</button>
        </section>

        <section className="prices_container">
          <p className="price_title">Business</p>
          <p className="price_text">
            Additional features available such as more detailed metrics.
            Recommended for business owners.
          </p>
          <p className="prices">$99.00</p>
          <p className="price_fecha">per month</p>

          <p className="features_lists">UNLIMITED STORY POSTING</p>
          <p className="features_lists">UNLIMITED PHOTO UPLOAD</p>
          <p className="features_lists">EMBEDDING CUSTOM CONTENT</p>
          <p className="features_lists">CUSTOMIZE METADATA</p>
          <p className="features_lists">ADVANCED METRICS</p>
          <p className="features_lists">PHOTO DOWNLOADS</p>
          <p className="features_lists">SEARCH ENGINE INDEXING</p>
          <p className="features_lists">CUSTOM ANALYTICS</p>

          <button className="price_btn">PICK PLAN</button>
        </section>
      </section>
    </>
  );
}

export default Price;
