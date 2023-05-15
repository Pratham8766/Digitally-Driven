import React, { useState } from "react";
import "../style/Addservice_section.css";

function AddService() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="add-service-container">
      <h2>Add a Service</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
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

        <button type="submit" className="addServiceSubmit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddService;
