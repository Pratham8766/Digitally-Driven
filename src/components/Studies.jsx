import React from "react";
import Gym from "../images/gym.png";
import ECommerce from "../images/ecommerce.png";
import Consulting from "../images/consulting.png";
import "../style/Studies_section.css";

export default function Studies() {
  return (
    <>
      <h1 className="CSH">Our Case Studies</h1>
      <div class="card-container">
        <div class="card">
          <img src={Gym} />
          <div class="card-content">
            <h2>ABC Gym</h2>
            <p>The goal of ABC Gym was to increase membership sign-ups and retain existing members. To achieve this, they utilized targeted social media ads and email marketing campaigns to promote gym membership perks, such as free personal training sessions and access to exclusive workout classes. Additionally, they implemented a loyalty program for existing members to incentivize continued attendance. These efforts resulted in a 35% increase in new member sign-ups and a 25% improvement in member retention.</p>
          </div>
        </div>
        <div class="card">
          <img src={ECommerce} />
          <div class="card-content">
            <h2>XYZ E-commerce Store</h2>
            <p>The goal of XYZ E-commerce Store was to boost website traffic and sales. To achieve this, they implemented a search engine optimization (SEO) strategy, including keyword research and optimization of product pages and blog content. Additionally, they utilized email marketing campaigns and social media advertising to promote seasonal sales and new product launches. These efforts resulted in a 50% increase in website traffic and a 40% improvement in sales.</p>
          </div>
        </div>
        <div class="card">
          <img src={Consulting} />
          <div class="card-content">
            <h2>123 Consulting Firm</h2>
            <p>The goal of 123 Consulting Firm was to generate leads and increase conversions. To achieve this, they developed a content marketing strategy, including blog posts and downloadable resources, to establish the company as a thought leader in their industry. Additionally, they implemented targeted email marketing campaigns and utilized landing pages with lead capture forms. These efforts resulted in a 60% increase in lead generation and a 30% improvement in conversion rates.</p>
          </div>
        </div>
      </div>
    </>
  );
}
