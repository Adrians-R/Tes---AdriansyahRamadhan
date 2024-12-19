import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-banner">
        <h1>FIND THE RIGHT CARTRIDGES FOR YOUR PRINTER</h1>
        <div className="search-box">
          <div className="search-options">
            <select>
              <option>1. Printer Brand</option>
            </select>
            <select>
              <option>2. Printer Series</option>
            </select>
            <select>
              <option>3. Printer Model</option>
            </select>
            <button>FIND CARTRIDGES</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
