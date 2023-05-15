import React from 'react'
import Banner from "../images/banner1.png";
import '../style/Why_section.css'
export default function why() {
  return (
    <>
    <div className="container-section">
      <div className="row">
          <div className="column">
              <div className="figure">
                  <img src={Banner} alt="" className="banner-image"/>
              </div>
          </div>

          <div className="column">
              <h2 className='whyHead'>Why you need digital marketing?</h2>
              <p className='whyPara'>In order to scale new customer acquisition and retention for e-commerce brands, we work across the entire customer journey. Our team has a successful track record of helping brands scale profitably based on high-performing strategies.</p>
          </div>
      </div>
    </div>
    </>
  )
}
