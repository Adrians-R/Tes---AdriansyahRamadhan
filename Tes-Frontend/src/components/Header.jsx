import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Top Info Bar */}
      <div className="header-top">
        <div className="info">Franchise Opportunities | Map | Feedback</div>
        <div className="contact">help@email.com | 0800 022 022</div>
      </div>
      {/* Main Header */}
      <div className="header-main">
        <div className="logo">
          <span className="logo-icon">👑</span> CARTRIDGE KINGS
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>🔍</button>
        </div>
        <div className="cart">
          <button>Cart (1)</button>
        </div>
      </div>
      {/* Navigation Bar */}
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/">Ink Cartridges</a>
        <a href="/">Toner Cartridges</a>
        <a href="/">Contact Us</a>
        <a href="/">Login / Register</a>
      </nav>
    </header>
  );
};

export default Header;
