import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title">The authentic taste of Italy</h1>
        <p className="banner-description">
          Savor the rich flavors and aromas of our handcrafted pasta dishes,
          expertly prepared risottos, and mouthwatering pizzas. Our chefs
          meticulously source the finest ingredients to create a menu that
          celebrates the vibrant culinary heritage of Italy. Join us Now.
        </p>
        <button className="banner-button">Get Started</button>
      </div>
    </div>
  );
}

export default Banner;
