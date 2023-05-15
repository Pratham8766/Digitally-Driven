import React from "react";
import { Link } from "react-router-dom";
import "../style/Head_section.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <>
      <nav className="navbar">
      <Link to="/" class ="nav-head">Digitally Driven</Link>
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label>

          <div className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/addservice">Request Service</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/" className="nav-login">
                Logout
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Header;
