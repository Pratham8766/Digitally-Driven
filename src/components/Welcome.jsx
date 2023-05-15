import React from 'react'
import AfterNavbar from "../components/AfterNavbar";
import Footer from "../components/Footer";
export default function Welcome(props) {
  return (
    <>
    <AfterNavbar />
      <h1>Welcome {props.username}!</h1>
      <p>You have successfully logged in.</p>
    <Footer/>
    </>
  )
}
