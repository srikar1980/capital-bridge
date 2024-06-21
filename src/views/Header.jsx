import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import '../css/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <RouterLink to="/" className="nav-link" onClick={toggleMenu}>
          Home
        </RouterLink>
        <ScrollLink
          to="services"
          smooth={true}
          duration={500}
          className="nav-link"
          onClick={toggleMenu}
        >
          Services
        </ScrollLink>
        <ScrollLink
          to="about-us"
          smooth={true}
          duration={500}
          className="nav-link"
          onClick={toggleMenu}
        >
          About Us
        </ScrollLink>
      </nav>
      <button className="btn btn-primary header-btn">Contact Us</button>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {/* {isOpen && <div className="backdrop" onClick={toggleMenu}></div>} */}
    </header>
  );
};

export default Header;
