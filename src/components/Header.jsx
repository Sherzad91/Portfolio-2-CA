import React from "react";
import Navbar from "./Navbar";
import Image from "../images/home.jpeg";

export default function Header() {
  return (
    <header id="home">
      <Navbar />
        <div className="info-holder">
          <div>
            <h1>
              <span>Sherzad</span> Developer.
            </h1>
            <h6>Front end Developer</h6>
          </div>
        </div>
        <div className="image-holder">
          <img src={Image} alt="Image" />
        </div>
    </header>
  );
}
