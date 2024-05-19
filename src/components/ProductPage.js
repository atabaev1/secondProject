// src/components/ProductPage.js
import React from 'react';
import './ProductPage.css'; // Updated CSS file for enhanced styling

const ProductPage = () => (
  <div className="product-page">
    <h1>TechTrek X Smartphone</h1>
    <div className="product-media">
      <img src="/img/header.jpg" alt="TechTrek X" className="product-image" />
      <video src="/videos/techtrek-x.mp4" controls className="product-video"></video>
    </div>
    <div className="product-details">
      <p>Experience the future of smartphones with TechTrek X, featuring cutting-edge technology and sleek design.</p>
      <ul>
        <li>5.8-inch OLED display</li>
        <li>Triple-lens camera system</li>
        <li>Fast wireless charging</li>
        <li>Water and dust resistant</li>
      </ul>
    </div>
  </div>
);

export default ProductPage;
