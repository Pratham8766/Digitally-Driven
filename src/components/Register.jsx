import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Register_section.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setname] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8090/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, username, password }),
    });
    const data = await response.json();
    if (response.ok) {
      alert("Successfully!!!");
      navigate("/login");
    } else {
      alert(data.message);
    }
  };
  return (
    <>
      <div className="box">
        <form className="loginContainer" onSubmit={handleSubmit}>
          <div className="top">
            <h2 className="loginHeading">Register</h2>
          </div>
          <div className="input-field">
            <input
              type="text"
              className="input"
              placeholder="Name"
              id=""
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />
            <i className="bx bx-user"></i>
          </div>

          <div className="input-field">
            <input
              type="email"
              className="input"
              placeholder="Email"
              id=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <i className="bx bx-user"></i>
          </div>

          <div className="input-field">
            <input
              type="text"
              className="input"
              placeholder="Username"
              id=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <i className="bx bx-user"></i>
          </div>

          <div className="input-field">
            <input
              type="Password"
              className="input"
              placeholder="Password"
              id=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i className="bx bx-lock-alt"></i>
          </div>

          <div className="input-field">
            <input type="submit" className="submit" value="Register" id="" />
          </div>
          <Link to="/login">Login</Link>
        </form>
      </div>
    </>
  );
}
