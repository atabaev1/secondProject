// src/components/ContactInfo.js
import React from 'react';
import './ContactInfo.css'; // Updated CSS file for enhanced styling

const ContactInfo = () => (
  <div className="contact-info">
    <h2>Contact Us</h2>
    <p>Email: <a href="mailto:contact@techtrek.com">contact@techtrek.com</a></p>
    <p>Phone: <a href="tel:123-456-7890">123-456-7890</a></p>
    <p>Address: 123 TechTrek Street, Innovation City</p>
  </div>
);

export default ContactInfo;
