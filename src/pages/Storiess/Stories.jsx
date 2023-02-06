import React from "react";
import Footer from "../../components/Footer/Footer";
import "./Stories.css";
import Stories_gallery from "./Stories_gallery/Stories_gallery";
import Stories_home from "./Stories_home/Stories_home";

function Stories() {
  return (
    <>
      <section className="stories_container">
        <Stories_home />
        <Stories_gallery />
        <Footer/>
      </section>
    </>
  );
}

export default Stories;
