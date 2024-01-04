import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar-left">
      </div>
      <div className="Navbar-right">
        <a href="#about-me">About Me</a>
        <a href="#work-experience">Work Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact-me">Contact Me</a>
      </div>
    </nav>
  );
}

export default Navbar;