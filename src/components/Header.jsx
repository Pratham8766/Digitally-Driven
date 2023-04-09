import React from "react";
import {Link} from "react-router-dom";
import "../style/Head_section.css";
function Header() {
    return (
      <>
        <header>
          <h2 className="name">Digitally Driven</h2>
          <nav className="navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/">Contact</Link>
          </nav>  
        </header> 
      </>
    );
  }
  
  export default Header;