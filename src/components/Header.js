import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">Health Plus</div>
        <nav className="navigation">
          <ul>
            <li><a href="#directory">Doctors</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="cta">
          <a href="#appointment" className="appointment-btn">Book Appointment</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
