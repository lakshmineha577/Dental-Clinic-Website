import React from 'react';
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.jpg';
import service4 from '../assets/service4.jpg';
import service5 from '../assets/service5.jpg';
import service6 from '../assets/service6.jpg';


const services = [
  { title: "Teeth Whitening", img: service1, desc: "Brighten your smile with our advanced whitening treatments." },
  { title: "Dental Implants", img: service2, desc: "Permanent solutions for missing teeth." },
  { title: "Root Canal", img: service3, desc: "Pain relief and tooth preservation." },
  { title: "Braces", img: service4, desc: "Modern orthodontics for all ages." },
  { title: "Dental Cleaning", img: service5, desc: "Regular check-ups and deep cleaning." },
  { title: "Pediatric Dentistry", img: service6, desc: "Gentle care for your little ones." },
];

function Services() {
  return (
    <div className="container my-5">
      <h2 className="text-center">Our Dental Services</h2>
      <div className="row g-4">
        {services.map((service, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="card">
              <img src={service.img} className="card-img-top" alt={service.title} />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;