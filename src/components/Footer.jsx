import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo & Tagline */}
        <div className="footer-column">
          <Link to="/" className="footer-logo">
            <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
            <span className="footer-logo-text">FeedForward</span>
          </Link>
          <p className="footer-tagline">
            Connecting surplus food with people who need it most — in real time.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/donate">Donate Food</Link></li>
            <li><Link to="/find">Find Food</Link></li>
            <li><a href="/#how-it-works">How It Works</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-column">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-contact">
            <li>Email: hello@feedforward.in</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Chandigarh, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FeedForward. Made with 💛 for a hunger-free India.</p>
      </div>
    </footer>
  );
};

export default Footer;
