import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
        <Link to='/' className="app-name">My Portfolio</Link>
        <div className="nav-list">
            <Link to='/projects' className="nav-item">Projects</Link>
            <Link className="nav-item">Skills</Link>
            <Link className="nav-item">About</Link>
            <Link className="nav-item">Contacts</Link>
        </div>
    </div>
  );
};

export default Navbar;
