import React from 'react';
import aboutImg from '../assets/about.jpg';

function About() {
  return (
    <div className="container my-5">
      <h2 className="text-center">About Our Clinic</h2>
      <img src={aboutImg} alt="clinic" className="w-100 rounded mb-3" />
      <p>Bright Smile Dental has been serving the community for over 10 years. Our mission is to deliver quality dental care in a friendly and comfortable environment.</p>
      <h4>Our Team</h4>
      <ul>
        <li>Dr. Amanda White - Cosmetic Dentistry</li>
        <li>Dr. John Smith - Pediatric Specialist</li>
        <li>Dr. Lisa Ray - Orthodontist</li>
      </ul>
    </div>
  );
}

export default About;