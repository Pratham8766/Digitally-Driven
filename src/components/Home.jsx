import React from "react";
import Banner from "../images/banner1.png";
import "../style/Intro_section.css";
export default function Home() {
  return (
    <>
      <div className="container">
        <h2 className="heading">Digitally Driven Marketing Agency</h2>
        <p className="tagline">Improve your businesses in Digital</p>
        <div className="btn-container">
          <button type="submit" className="get-started-btn">
                Get Started
          </button>
        </div>
      </div>
    </>
  );
}
