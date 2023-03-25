import React from "react";
import "../style/Head_section.css";
function Header() {
    return (
      <>
        <header>
          <h2 className="name">Digitally Driven</h2>
          <nav className="navigation">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Contact</a>
          </nav>  
        </header> 
      </>
    );
  }
  
  export default Header;