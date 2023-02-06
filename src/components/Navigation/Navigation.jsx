import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import Stories from "../../pages/Storiess/Stories.jsx";
import Home from "../../pages/Homes/Home.jsx";
import Features from "../../pages/Features/Features.jsx";
import Pricing from "../../pages/Pricing/Pricing.jsx";
import Error from "../Error/Error.jsx"

function Navigation() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Stories" element={<Stories />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Navigation;
