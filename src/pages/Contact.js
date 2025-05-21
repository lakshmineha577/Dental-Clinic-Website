import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData); // placeholder
      alert('Message sent!');
    } catch {
      alert('Failed to send. Try again.');
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <input className="form-control" name="name" placeholder="Name" onChange={handleChange} required />
        <input className="form-control" name="email" placeholder="Email" type="email" onChange={handleChange} required />
        <input className="form-control" name="subject" placeholder="Subject" onChange={handleChange} required />
        <textarea className="form-control" name="message" placeholder="Message" rows="4" onChange={handleChange} required></textarea>
        <button className="btn btn-primary" type="submit">Send Message</button>
      </form>
      <div className="mt-4">
        <h5>Contact Info</h5>
        <p><i className="bi bi-telephone"></i> +1 800 123 4567</p>
        <p><i className="bi bi-envelope"></i> info@brightsmiledental.com</p>
        <p><i className="bi bi-geo-alt"></i> 123 Smile St, Dental City, TX</p>
        <iframe
          title="map"
          src="https://www.mapquest.com/us/new-york/123-dental-group-pc-353006352"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
