import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-brands-svg-icons";
import "../style/Contact_section.css";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const navigate=useNavigate();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetch("http://localhost:8090/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to contact');
      }
      alert('Contacted successfully!');
      navigate("/")
  
    })
    .catch(error => {
      alert(error.message);
    });
    };
  

  return (
    <>
    <Header/>
      <h1 className="contact-head">
        Contact <span>Us</span>
      </h1>
      <div className="contact-us">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message here"
              required
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer/>
    </>
  );
}