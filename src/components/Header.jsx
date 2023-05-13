import React from "react";
import { Link } from "react-router-dom";
import "../style/Head_section.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
function Header() {
  return (
    <>
      {/* { <header>
          <h2 className="name">Digitally Driven</h2>
          <nav className="navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/">Contact</Link>
          </nav>  
        </header>  } */}

      <header>
        <div className="navbar">
            <Link to="/" class ="name">Digitally Driven</Link>
          <ul className="links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
          <Link to="/login" id="loginBtn">
            Login
          </Link>
          <Link to="/register" id="registerBtn">
            Register
          </Link>
          
          <div className="toggle_btn">
            <FontAwesomeIcon icon={faBars}/>
          </div>
        </div>
        <div className="dropdown_menu">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </div>
      </header>
    </>
  );
}

export default Header;

/*
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <a href="" id="headerHeading">
            Digitally Driven
          </a>
        </div>
        <ul className="links">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
        <a href="#" id="loginBtn">
          Login
        </a>
        <div className="toggle_btn" onClick={handleToggle}>
          <FontAwesomeIcon className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}/>
        </div>
      </div>
      <div className={`dropdown_menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

*/
