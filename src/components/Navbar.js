
import React from 'react';
import './Navbar.css'; 


const Navbar = () => (
  <header className="navbar">
    <div className="navbar-logo">
      <img src="/img/header.jpg" alt="TechTrek Logo" />
      <h1>TechTrek</h1>
    </div>
    <nav className="navbar-links">
      <a href="#product">Product</a>
      <a href="#order">Order</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

export default Navbar;
