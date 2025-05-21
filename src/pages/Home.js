import React from 'react';
import FAQ from '../components/FAQ';

function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to Bright Smile Dental</h1>
        <p>Your smile is our priority</p>
      </section>
      <section className="container text-center my-5">
        <h2>Why Choose Us?</h2>
        <p>State-of-the-art facilities, compassionate staff, and affordable dental care for the whole family.</p>
        <a className="btn btn-primary" href="/contact">Book Appointment</a>
      </section>
      <FAQ />
    </div>
  );
}

export default Home;