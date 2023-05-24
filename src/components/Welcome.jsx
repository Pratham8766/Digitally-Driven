import React from 'react'
import AfterNavbar from "../components/AfterNavbar";
import Footer from "../components/Footer";
import {Link} from 'react-router-dom';
export default function Welcome(props) {
  return (
    <>
    <AfterNavbar />
      <div className="container">
        <h4 className="heading">Welcome</h4>
        <p className="tagline">You have successfully logged in!</p>
        <div className="btn-container">
        <Link to="/addservice">
          <button type="submit" className="get-started-btn">
                Get Started
          </button>
          </Link>
        </div>
      </div>
    <Footer/>
    </>
  )
}
