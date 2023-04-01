import React from 'react'
import Banner from "../images/banner1.png";
import '../style/Why_section.css'
export default function why() {
  return (
    <>
    <div className="container">
      <div class="row">
          <div class="column">
              <div class="figure">
                  <img src={Banner} alt="" class="banner-image"/>
              </div>
          </div>

          <div class="column">
              <h2 className='whyHead'>Why you need digital marketing?</h2>
              <p className='whyPara'>In order to scale new customer acquisition and retention for e-commerce brands, we work across the entire customer journey. Our team has a successful track record of helping brands scale profitably based on high-performing strategies.</p>
          </div>
      </div>
    </div>
    </>
  )
}
