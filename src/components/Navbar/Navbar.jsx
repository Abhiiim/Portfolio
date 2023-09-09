import React from 'react';
import "./Navbar.css";
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  function toggleNav() {
    var nav = document.getElementById('navbar');
    nav.classList.toggle('active');
  }

  return (
    <div className="navbar">
      <div className="burger-menu" onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <RouterLink to='/' className="app-name">My Portfolio</RouterLink>
      <div id='navbar' className="nav-list">
        <RouterLink to='/projects' className="nav-item" onClick={toggleNav}>Projects</RouterLink>
        <RouterLink className="nav-item" to="/skills" onClick={toggleNav}>Skills</RouterLink>
        <RouterLink to='/about' className="nav-item" onClick={toggleNav}>About</RouterLink>
        <ScrollLink className="nav-item" to="footer-section" smooth={true} duration={500} onClick={toggleNav}>Contacts</ScrollLink>
      </div>
    </div>
  );
};

export default Navbar;
