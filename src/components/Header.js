import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <h1 className="logo">Health Plus</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#directory">Doctors</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
