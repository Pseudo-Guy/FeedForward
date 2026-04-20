import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add scroll event listener to apply frosted glass effect when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo area */}
        <Link to="/" className="navbar-logo">
          <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
          </svg>
          <span className="logo-text">FeedForward</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          {/* Using hash link for How it Works section on home page */}
          <a href="/#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a>
          <NavLink to="/donate" onClick={() => setMenuOpen(false)}>Donate Food</NavLink>
          <NavLink to="/find" onClick={() => setMenuOpen(false)}>Find Food</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          
          {/* Mobile only CTA */}
          <Link to="/donate" className="btn btn-primary mobile-cta" onClick={() => setMenuOpen(false)}>
            Get Started
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="navbar-cta">
          <Link to="/donate" className="btn btn-primary">Get Started</Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`bar ${menuOpen ? 'bar-open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'bar-open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'bar-open' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
