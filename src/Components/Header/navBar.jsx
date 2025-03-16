import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navBar.css';
import logo from '../../Assets/salogo.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" aria-label="My Portfolio Logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Hamburger Icon */}
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={handleHamburgerClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navigation Links */}
        <ul className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
          <li>
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              offset={-70} 
              onClick={handleLinkClick} // Close menu on click
              aria-label="About section">
              About
            </Link>
          </li>
          <li>
            <Link 
              to="education" 
              smooth={true} 
              duration={500} 
              offset={-70} 
              onClick={handleLinkClick} // Close menu on click
              aria-label="Education section">
              Education
            </Link>
          </li>
          <li>
            <Link 
              to="internship" 
              smooth={true} 
              duration={500} 
              offset={-70} 
              onClick={handleLinkClick} // Close menu on click
              aria-label="Internship section">
              Internship
            </Link>
          </li>
          <li>
            <Link 
              to="skills" 
              smooth={true} 
              duration={500} 
              offset={-70} 
              onClick={handleLinkClick} // Close menu on click
              aria-label="Skills section">
              Skills
            </Link>
          </li>
          <li>
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              offset={-70} 
              onClick={handleLinkClick} // Close menu on click
              aria-label="Projects section">
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              offset={-70} 
              onClick={handleLinkClick} // Close menu on click
              aria-label="Contact section">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
