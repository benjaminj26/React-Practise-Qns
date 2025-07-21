import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Real Estate App</h2>
      <div>
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/property/add" className="navbar-link">Add Property</Link>
      </div>
    </nav>
  );
};

export default Navbar;
