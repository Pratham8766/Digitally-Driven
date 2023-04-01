import React from "react";
import Banner from "../images/banner1.png";
import "../style/Intro_section.css";
export default function Home() {
  return (
    <>
      {/* <div className="intro">
        <div className="info">
          <p className="vision">We bring you new customers</p>
          <h2 className="heading">DIGITALLY DRIVEN MARKETING AGENCY</h2>
          <p className="quote">
            Empowering businesses to conquer the digital landscape, one click at
            a time - that's our mission, and we're passionate about making it a
            reality for each and every client.
          </p>
          <div className="b">
            <button type="submit" className="btn">
              Get Started
            </button>
          </div>
        </div>
        <div className="figure">
          <img src={Banner} className="banner" />
        </div>
      </div> */}

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
