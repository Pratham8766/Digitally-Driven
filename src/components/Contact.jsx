import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/free-brands-svg-icons";
import "../style/Contact_section.css";
export default function Contact() {
  return (
    <>
      <h1 className="contact-head">
        Contact <span>Us</span>
      </h1>
      <div className="contact-us">
        <form action="#" method="post">
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message here"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
        {/* <div class="contact-info">
          <h3>Contact Information</h3>
          <p>
            <i class="fas fa-map-marker-alt"></i>Vishwakarma Insititute of Technology, Bibwewadi Pune 411037
          </p>
          <p>
            <i class="fas fa-phone-alt"></i>+91 - 0123456789
          </p>
          <p>
            <i class="fas fa-envelope"></i>ty79@vit.edu
          </p>
        </div> */}
      </div>
    </>
  );
}
