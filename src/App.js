import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import MainLayout from './components/MainLayout';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import AddService from './components/AddService';
import Shop from './components/Shop';
import Pricing from './components/Pricing';
import React,{Component} from 'react';
import Welcome from './components/Welcome';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/addservice" element={<AddService/>} />
      </Routes>
    </BrowserRouter>  
    </>
  );
}

export default App;
