// Header.jsx
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import '../css/Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <nav className="nav-links">
        <RouterLink to="/" className="nav-link">
          Home
        </RouterLink>
        <ScrollLink
          to="services"
          smooth={true}
          duration={500}
          className="nav-link"
        >
          Services
        </ScrollLink>
        <ScrollLink
          to="about-us"
          smooth={true}
          duration={500}
          className="nav-link"
        >
          About Us
        </ScrollLink>
      </nav>
      <button className="btn btn-primary header-btn">Contact Us</button>
    </header>
  );
};

export default Header;
