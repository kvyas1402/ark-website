import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownHover = (dropdown: string | null) => {
    setActiveDropdown(dropdown);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="header">
        <div className="nav-container">
          <img src="/ARK.png?v=1" alt="ARK Logo" className="logo" />
          
          <nav className="nav">
            <Link to="/">Home</Link>
            
            <div 
              className="dropdown"
              onMouseEnter={() => handleDropdownHover('services')}
              onMouseLeave={() => handleDropdownHover(null)}
            >
              <div className="dropdown-trigger">
                <span>Services</span>
                <span className="dropdown-arrow">▼</span>
              </div>
              <div className={`dropdown-content ${activeDropdown === 'services' ? 'active' : ''}`}>
                <Link to="/estimating-services">Estimating Services</Link>
                <Link to="/submittal-services">Submittal Services</Link>
                <Link to="/estimating-software">Estimating Softwares</Link>
              </div>
            </div>
            
            <div 
              className="dropdown"
              onMouseEnter={() => handleDropdownHover('company')}
              onMouseLeave={() => handleDropdownHover(null)}
            >
              <div className="dropdown-trigger">
                <span>Company</span>
                <span className="dropdown-arrow">▼</span>
              </div>
              <div className={`dropdown-content ${activeDropdown === 'company' ? 'active' : ''}`}>
                <Link to="/about">About</Link>
                <Link to="/team">Team</Link>
                <Link to="/client-benefits">Client Benefits</Link>
                <Link to="/american-vendors">American Vendors</Link>
                <Link to="/job-vacancy">Job Vacancy</Link>
              </div>
            </div>
            
            <div 
              className="dropdown"
              onMouseEnter={() => handleDropdownHover('tools')}
              onMouseLeave={() => handleDropdownHover(null)}
            >
              <div className="dropdown-trigger">
                <span>Tools</span>
                <span className="dropdown-arrow">▼</span>
              </div>
              <div className={`dropdown-content ${activeDropdown === 'tools' ? 'active' : ''}`}>
                <Link to="/calendar">Calendar</Link>
                <Link to="/proestimate">ProEstimate</Link>
              </div>
            </div>
            
            <div 
              className="dropdown"
              onMouseEnter={() => handleDropdownHover('legal')}
              onMouseLeave={() => handleDropdownHover(null)}
            >
              <div className="dropdown-trigger">
                <span>Legal</span>
                <span className="dropdown-arrow">▼</span>
              </div>
              <div className={`dropdown-content ${activeDropdown === 'legal' ? 'active' : ''}`}>
                <Link to="/terms">Terms and Conditions</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/refund-policy">Refund Policy</Link>
              </div>
            </div>
            
            <Link to="/contact" className="contact-us-link">Contact Us</Link>
            <Link to="tel:+13123800712" className="phone">+1 (312) 380-0712</Link>
          </nav>

          <button 
            className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      
      <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/estimating-services" onClick={toggleMenu}>Estimating Services</Link>
        <Link to="/submittal-services" onClick={toggleMenu}>Submittal Services</Link>
        <Link to="/estimating-software" onClick={toggleMenu}>Estimating Softwares</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
        <Link to="/team" onClick={toggleMenu}>Team</Link>
        <Link to="/client-benefits" onClick={toggleMenu}>Client Benefits</Link>
        <Link to="/american-vendors" onClick={toggleMenu}>American Vendors</Link>
        <Link to="/job-vacancy" onClick={toggleMenu}>Job Vacancy</Link>
        <Link to="/calendar" onClick={toggleMenu}>Calendar</Link>
        <Link to="/proestimate" onClick={toggleMenu}>ProEstimate</Link>
        <Link to="/terms" onClick={toggleMenu}>Terms and Conditions</Link>
        <Link to="/privacy-policy" onClick={toggleMenu}>Privacy Policy</Link>
        <Link to="/refund-policy" onClick={toggleMenu}>Refund Policy</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
      </nav>
    </>
  );
};

export default Header;