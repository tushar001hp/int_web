import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__brand">
          <img src="/logo.jpeg" alt="DesignNest Logo" className="navbar__image" />
        <Link to="/" className="navbar__logo">DesignNest</Link>
      </div>
      
      <button className="navbar__toggle" aria-label="Toggle navigation" onClick={toggleMenu}>
        <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
      </button>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/Project" onClick={closeMenu}>Project</Link>
        </li>
        <li>
          <Link to="/Service" onClick={closeMenu}>Service</Link>
        </li>
        <li>
          <Link to="/Contact" onClick={closeMenu}>Contact</Link>
        </li>
        <li>
          <Link to="/Profile" onClick={closeMenu}>Profile</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar