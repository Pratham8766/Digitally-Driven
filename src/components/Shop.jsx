import React from 'react';
import '../style/Shop_section.css';
import SouledStore from '../images/souledstore.jpeg';
import Homafy from '../images/homafy.png';
import ShopperStop from '../images/shopperstopee.png';

export default function Shop() {
  return (
    <>
    <div className="ad-container">
      <div className="ad-card-1">
        <img src={SouledStore} alt="The Souled Store" />
        <h1>The Souled Store</h1>
        <p>
          The Souled Store is an online store for cool and quirky merchandise
          inspired by pop culture.
        </p>
        <a href="https://www.thesouledstore.com/men" className="button">Visit Site</a>
      </div>
    </div>
    <div className="ad-container">
      <div className="ad-card-2">
        <img src={Homafy} alt="Example 1" />
        <h1>Homafy</h1>
        <p>
          Homafy introduces customized gift hampers for husband, wife etc.
          Surprise your loved ones with amazing gift hampers for birthday,
          anniversary etc.
        </p>
        <a href="https://homafy.com/" className="button">Visit Site</a>
      </div>
      <div className="ad-card-3">
        <img src={ShopperStop} alt="Example 2" />
        <h1>Shopper Stop</h1>
        <p>
            Shop online for latest Apparel, Beauty, Home decor, Fragrances, Accessories & Luxury Watches at great prices.
        </p>
        <a href="https://www.shoppersstop.com/?ef_id=CjwKCAjwjYKjBhB5EiwAiFdSfhIdLydf-3Ub--DNLuMXs8GBZY3V1Ya2Pmlr_wzdzA7fWOEg_tpqbRoCa3IQAvD_BwE:G:s&utm_source=google&utm_medium=cpc&utm_campaign=Sok_Srch_Desktop_SS_Brand_RLSA" className="button">Visit Site</a>
      </div>
    </div>
    </>
  )
}
