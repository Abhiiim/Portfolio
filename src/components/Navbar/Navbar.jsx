import React from 'react';
import "./Navbar.css";
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="navbar">
        <RouterLink to='/' className="app-name">My Portfolio</RouterLink>
        <div className="nav-list">
            <RouterLink to='/projects' className="nav-item">Projects</RouterLink>
            <ScrollLink className="nav-item" to="skills-section" smooth={true} duration={500}>Skills</ScrollLink>
            <RouterLink className="nav-item">About</RouterLink>
            <ScrollLink className="nav-item" to="footer-section" smooth={true} duration={500}>Contacts</ScrollLink>
        </div>
    </div>
  );
};

export default Navbar;
