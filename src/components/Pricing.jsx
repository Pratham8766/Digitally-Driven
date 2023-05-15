import React from "react";
import { Link } from "react-router-dom";
import "../style/Pricing.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
const pricingData = [
  {
    id: 1,
    name: "Basic",
    price: "$99/month",
    description:
      "Perfect for small businesses just getting started on social media",
    features: [
      { name: "Number of social media accounts", value: 5 },
      { name: "Scheduled posts per account", value: 10 },
      { name: "Analytics", value: "Basic" },
      { name: "Email support", value: "Basic" },
      { name: "Dedicated account manager", value: false },
      { name: "Monthly performance reports", value: false },
      { name: "Personalized Social media strategy", value: false },
    ],
  },
  {
    id: 2,
    name: "Standard",
    price: "$199/month",
    description:
      "Ideal for growing businesses with a larger social media presence",
    features: [
      { name: "Number of social media accounts", value: 10 },
      { name: "Scheduled posts per account", value: 20 },
      { name: "Analytics", value: "Advanced" },
      { name: "Email support", value: "Priority" },
      { name: "Dedicated account manager", value: true },
      { name: "Monthly performance reports", value: true },
      { name: "Personalized Social media strategy", value: false },
    ],
  },
  {
    id: 3,
    name: "Premium",
    price: "$299/month",
    description:
      "Designed for established businesses with complex social media needs",
    features: [
      { name: "Number of social media accounts", value: "Unlimited" },
      { name: "Scheduled posts per account", value: "Unlimited" },
      { name: "Analytics", value: "Custom" },
      { name: "Email support", value: "24/7" },
      { name: "Dedicated account manager", value: true },
      { name: "Monthly performance reports", value: true },
      { name: "Personalized Social media strategy", value: true },
    ],
  },
];
const Pricing = () => {
  return (
    <>
    <Header/>
    <div className="pricing">
      <h1>Pricing Plans</h1>
      <p className="subheading">
        Choose the plan that's right for your business
        <hr></hr>
      </p>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th></th>
              {pricingData.map((plan) => (
                <th key={plan.id}>{plan.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pricingData[0].features.map((feature) => (
              <tr key={feature.name}>
                <td>{feature.name}</td>
                {pricingData.map((plan) => {
                  const value = plan.features.find(
                    (f) => f.name === feature.name
                  ).value;
                  return (
                    <td key={plan.id}>
                      {typeof value === "number" || typeof value === "string"
                        ? value
                        : value
                        ? "✔️"
                        : "❌"}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pricing-card-container">
        {pricingData.map((plan) => (
          <div className="pricing-card" key={plan.id}>
            <h2>{plan.name}</h2>
            <p className="price">{plan.price}</p>
            <p className="description">{plan.description}</p>
            <Link to="/login">
            <button className="cta">Login</button></Link>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Pricing;
