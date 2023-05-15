import React from "react";
import Home from "../components/Home";
import Why_sec from "../components/Why_sec";
import Studies from "../components/Studies";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function MainLayout() {
  return (
    <>
    <Header/>
      <Home />
      <Why_sec />
      <Studies />
      <Footer/>
    </>
  );
}
