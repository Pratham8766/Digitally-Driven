import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
// import Home from './components/Home';
// import Why_sec from './components/Why_sec';
// import Studies from './components/Studies';
// import Contact from './components/Contact';
import About from "./components/About";
import Footer from './components/Footer';
import MainLayout from './components/MainLayout';
import Services from './components/Services';
function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer/>
    </BrowserRouter>  
    </>
  );
}

export default App;
