import React from "react";
import "../Homes/Home.css";
import Footer from "../../components/Footer/Footer.jsx";
import Home_cards from "./Home_cards/Hero_cards.jsx";
import Home_features from "./Home_features/Home_features";
import Home_galery from "./Home_galery/Hero_galery.jsx";
import Home_hero from "./Home_hero/Hero_home.jsx";

function Home() {
  return (
    <>
      <section className="home_container">
        <Home_hero />
        <Home_cards />
        <Home_galery />
        <Home_features />
        <Footer/>
      </section>
    </>
  );
}

export default Home;
