import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer" id="contact">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Health Plus</h4>
          <p>Delivering quality healthcare solutions.</p>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#directory">Doctors</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>Phone: 555-0000</li>
            <li>Email: info@healthplus.com</li>
            <li>Address: 123 Health St, Wellness City</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li><a href="#"><FaFacebookF /> Facebook</a></li>
            <li><a href="#"><FaTwitter /> Twitter</a></li>
            <li><a href="#"><FaLinkedinIn /> LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Health Plus. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
