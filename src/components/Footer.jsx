import React from "react";
import "../style/Foot_section.css";
import FIcon from "../images/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="foot">
        <div className="row">
          <div className="col">
            <img src={FIcon} alt="logo" className="logo" />
            <p>
              Digitally Driven - Empowering your online presence through
              innovative marketing strategies. Connect with us to accelerate
              your digital growth today.
            </p>
          </div>
          <div className="col">
            <h3>
              Address{" "}
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <p>Vishwakarma Insititute of Technology</p>
            <p>Bibwewadi Pune 411037</p>
            <p className="email-id">ty79@vit.edu</p>
            <h4>+91 - 0123456789</h4>
          </div>
          <div className="col">
            <h3>
              Links{" "}
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>
              Legal{" "}
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <ul>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms and Conditions</a>
              </li>
            </ul>
            <div className="single-col social-media-icons-white d-flex justify-content-evenly">
              <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://linkedin.com">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p className="rights">
          © 2023 <a href="">Digitally Driven™</a>. All Rights Reserved
        </p>
      </footer>
    </>
  );
}
