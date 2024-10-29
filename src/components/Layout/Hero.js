import React from 'react';
import '../../styles/hero.css';


const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-title">Big Savings on Top Products</h1>
      <p className="hero-subtitle">Shop the best deals this season!</p>
      <a href="/products" className="hero-button">
        Shop Now
      </a>
    </div>
  );
};

export default Hero;

