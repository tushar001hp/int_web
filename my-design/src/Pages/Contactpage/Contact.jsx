import React, { useState } from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    });

   function handleChange(e) {
      setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    }
      async function handleSubmit(e) {
         e.preventDefault();
    
      await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
      
    alert("Form Submitted");
  }

  return (
    <div className="contact-container">
      {/* Header Section */}
      <div className="contact-header">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">I'd love to hear from you. Send me a message!</p>
      </div>

      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info-section">
          <div className="contact-info-card">
            <a href="tel:+918091957184" className="info-link">
              <div className="info-icon"><FaPhone /></div>
              <h3>Phone</h3>
              <p>+91 8091957184</p>
            </a>
          </div>

          <div className="contact-info-card">
            <a href="mailto:Tusharjamwal001@gmail.com" className="info-link">
              <div className="info-icon"><FaEnvelope /></div>
              <h3>Email</h3>
              <p>Tusharjamwal001@gmail.com</p>
            </a>
          </div>

          <div className="contact-info-card">
            <div className="info-icon"><FaMapMarkerAlt /></div>
            <h3>Location</h3>
            <p>India (H.P)</p>
          </div>

        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};


export default Contact;
