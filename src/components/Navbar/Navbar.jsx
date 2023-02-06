import React from "react";
import "../Navbar/Navbar.css";
import Logo from "../../../public/Img/logo.png";

function Navbar() {
  return (
    <>
      <nav class=" navbar navbar-expand-lg navbar-light nav_container ">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={Logo} alt="" className="nav_logo" />
          </a>
          <button
            class="navbar-toggler"
            id="button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ">
            <li class="nav-item text-center">
                <a class="nav-link" href="/" id="nav_links">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active text-center"
                  aria-current="page"
                  href="/Stories"
                  id="nav_links"
                >
                  Stories
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-center" id="nav_links" href="/Features">
                  Features
                </a>
              </li>
              <li class="nav-item text-center">
                <a class="nav-link" href="/Pricing" id="nav_links">
                  Pricing
                </a>
              </li>

              <li class="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
