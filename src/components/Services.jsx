import React from "react";
import ServiceIcon from "../images/services.png";
import SEO from "../images/seo.png";
import PPC from "../images/ppc.png";
import SSM from "../images/smm.png";
import CM from "../images/cm.png";
import EM from "../images/EM.png";
import WDD from "../images/wdd.png";
import "../style/Services_section.css";
export default function Services() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="column">
            <h2 className="servicesHead">Our Services</h2>
            <p className="servicesPara">
              At Digitally Driven, we offer a variety of digital marketing
              services to help your business grow and thrive in the digital
              world. Our team of experts is dedicated to delivering
              results-driven solutions that are tailored to meet the unique
              needs of each of our clients. Here are some of the services we
              offer:
            </p>
          </div>
          <div className="column">
            <div className="figure">
              <img src={ServiceIcon} alt="" className="banner-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="info">
        <h2 className="what-do-we-do-heading">What do we do?</h2>
        <p className="what-do-we-do-para">
          At Digitally Driven, we help businesses grow and succeed in the
          digital world. From search engine optimization to social media
          marketing, we provide customized solutions to help you reach and
          engage your target audience.
        </p>
      </div>

      <div className="card-container">
        <div className="card">
          <img src={SEO} alt="Card Image" className="card-logo" />
          <div className="card-content">
            <h3 className="card-title">Search Engine Optimization (SEO)</h3>
            <p className="card-text">
              Our SEO services are designed to help your website rank higher in
              search engine results pages (SERPs), which can lead to increased
              traffic and more leads for your business.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={PPC} alt="Card Image" className="card-logo" />
          <div className="card-content">
            <h3 className="card-title">Pay-Per-Click Advertising (PPC)</h3>
            <p className="card-text">
              A powerful way to drive targeted traffic to your website and
              generate leads quickly. Our team of PPC experts can create and
              manage campaigns on platforms like Google Ads, Facebook Ads, and
              many more.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={SSM} alt="Card Image" className="card-logo" />
          <div className="card-content">
            <h3 className="card-title">Social Media Marketing</h3>
            <p className="card-text">
              Social media has become an essential part of any digital marketing
              strategy. Our team can help you create and execute a social media
              marketing plan that drives engagement, builds brand awareness, and
              generates leads for your business
            </p>
          </div>
        </div>

        <div className="card">
          <img src={CM} alt="Card Image" className="card-logo" />
          <div className="card-content">
            <h3 className="card-title">Content Marketing</h3>
            <p className="card-text">
              Content is king when it comes to digital marketing. Our content
              marketing services can help you create high-quality content that
              engages your target audience and drives traffic to your website.
              We can help with everything from blog posts and infographics to
              video content and more.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={EM} alt="Card Image" className="card-logo" />
          <div className="card-content">
            <h3 className="card-title">Email Marketing</h3>
            <p className="card-text">
              Email marketing is a cost-effective way to stay in touch with your
              customers and keep them engaged with your brand. Our email
              marketing services can help you create and send targeted email
              campaigns that drive conversions and generate leads for your
              business.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={WDD} alt="Card Image" className="card-logo" />
          <div className="card-content">
            <h3 className="card-title">Web Design and Development</h3>
            <p className="card-text">
              Your website is often the first impression your customers have of
              your business. Our web design and development services can help
              you create a website that is not only visually appealing but also
              functional and user-friendly. We use the latest web design and
              development techniques to create websites that are optimized for
              search engines and mobile devices.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
