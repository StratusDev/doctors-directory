import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: "Alice Johnson",
    feedback:
      "I had a wonderful experience with Health Plus. The doctors are professional and caring.",
    designation: "Patient"
  },
  {
    id: 2,
    name: "Mark Williams",
    feedback:
      "The website made finding a doctor so easy and efficient. Highly recommended!",
    designation: "Patient"
  },
  {
    id: 3,
    name: "Sarah Thompson",
    feedback:
      "Booking an appointment was a breeze. The interface is clean and user-friendly.",
    designation: "Patient"
  },
  {
    id: 4,
    name: "David Lee",
    feedback:
      "The online directory and map view helped me locate the right specialist quickly.",
    designation: "Patient"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <h3>What Our Patients Say</h3>
      <div className="testimonials-container">
        {testimonialsData.map((item) => (
          <div key={item.id} className="testimonial-card">
            <p className="feedback">"{item.feedback}"</p>
            <h4 className="name">{item.name}</h4>
            <p className="designation">{item.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
