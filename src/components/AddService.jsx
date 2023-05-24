import React, { useState } from 'react';
import '../style/Addservice_section.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AfterNavbar from "../components/AfterNavbar";
import Footer from "../components/Footer";

function AddService() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

  const formData = {
    name,
    email,
    phone,
    service,
  };

  fetch('http://localhost:8090/api/services', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to add service');
    }
    alert('Service added successfully!');
    navigate("/")

  })
  .catch(error => {
    alert(error.message);
  });
  };

  return (
    <>
    <AfterNavbar/>
    <div className="add-service-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Company Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label htmlFor="service">Service</label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        >
          <option value="">--Select a Service--</option>
          <option value="SEO">Search Engine Optimization (SEO)</option>
          <option value="PPC">Pay-Per-Click Advertising (PPC)</option>
          <option value="SSM">Social Media Marketing</option>
          <option value="CM">Content Marketing</option>
          <option value="EM">Email Marketing</option>
          <option value="WDD">Web Design and Development</option>
        </select>

        <button type="submit" className='addServiceSubmit'>Submit</button>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default AddService;