import React from 'react';
import './ContactForm.css'; // Make sure to create a corresponding CSS file

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;