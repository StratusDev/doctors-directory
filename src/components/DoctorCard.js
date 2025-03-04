import React from 'react';
import { FaUserMd } from 'react-icons/fa';
import Rating from './Rating';
import './DoctorCard.css';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <div className="image-container">
        <img
          src={doctor.image || 'https://via.placeholder.com/300x200?text=No+Image'}
          alt={doctor.name}
          className="doctor-image"
        />
        <div className="hover-overlay">
          <p><strong>Contact Info</strong></p>
          <p>Phone: {doctor.phone}</p>
          <p>Email: {doctor.email}</p>
        </div>
      </div>
      <div className="doctor-info">
        <h3>{doctor.name}</h3>
        <div className="specialty">
          <FaUserMd className="icon" /> {doctor.specialty}
        </div>
        <p className="location">{doctor.location}</p>
        <p className="description">{doctor.description}</p>
        <Rating rating={doctor.rating} />
        <p className="availability">
          <strong>Availability:</strong> {doctor.availability}
        </p>
        <button className="schedule-btn">Schedule Appointment</button>
      </div>
    </div>
  );
};

export default DoctorCard;
