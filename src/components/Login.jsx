import React, { useState } from "react";
import "../style/Login_section.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8090/api/login", {
        username,
        password,
      });
      if (response.status === 200) {
        alert("Successfully logged in!");
        navigate("/");
      }
    } catch (error) {
      alert("Invalid username or password. Please try again.");
    }
  };
  return (
    <>
      <div className="box">
        <form className="loginContainer" onSubmit={handleSubmit}>
          <div className="top">
            <h2 className="loginHeading">Login</h2>
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
          </div>

          <div class="input-field">
            <input
              type="Password"
              className="input"
              placeholder="Password"
              id=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-field">
            <input type="submit" className="submit" value="Login" id="" />
          </div>

          <div className="two-col">
            <div className="two">
              <label>
                <Link to="/register">Dont have an account? Create One</Link>
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
