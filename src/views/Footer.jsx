import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import '../css/Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column footer-column-wide">
        <div>
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>
        <p>
          Nam posuere accumsan porta. Integer id orci sed ante tincidunt
          tincidunt sit amet sed libero.
        </p>
        <p>&copy; Capital Bridge 2024</p>
      </div>
      <div className="footer-column2">
        <h4>Company</h4>
        <p>About Us</p>
        <p>Careers</p>
        <p>Contact Us</p>
        <p>Privacy Policy</p>
      </div>
      <div className="footer-column2">
        <h4>Services</h4>
        <p>Training</p>
        <p>Consulting</p>
        <p>Workshops</p>
        <p>Coaching</p>
      </div>
      <div className="footer-column2">
        <h4>Resources</h4>
        <p>Blog</p>
        <p>Case Studies</p>
        <p>Whitepapers</p>
        <p>FAQs</p>
      </div>
      <div className="footer-column footer-column-wide">
        <div className="social-icons">
          <a href="https://www.facebook.com" aria-label="Facebook">
            <FontAwesomeIcon className="fa-icon" icon={faFacebook} />
          </a>
          <a href="https://www.twitter.com" aria-label="Twitter">
            <FontAwesomeIcon className="fa-icon" icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn">
            <FontAwesomeIcon className="fa-icon" icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram">
            <FontAwesomeIcon className="fa-icon" icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
