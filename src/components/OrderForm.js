// src/components/OrderForm.js
import React, { useState } from 'react';
import './OrderForm.css';

const OrderForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', quantity: 1 });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email.includes('@')) {
      errors.email = 'Valid email is required';
      valid = false;
    }
    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Order placed successfully!');
     
    }
  };

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <h2>Pre-Order TechTrek X</h2>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label>Quantity:</label>
        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} min="1" />
      </div>
      <button type="submit">Pre-Order</button>
    </form>
  );
};

export default OrderForm;
