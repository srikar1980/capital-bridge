import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import '../css/Footer.css'; // Ensure this path matches your project structure
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column footer-column-wide">
        <div>
          <img src={logo} alt="Logo"  />
        </div>
        <p>
          Nam posuere accumsan porta. Integer id orci sed ante tincidunt
          tincidunt sit amet sed libero.
        </p>
        <p>&copy; Capital Bridge 2020</p>
      </div>
      <div className="footer-column2">
        <h4>Company</h4>
        <p>Content for </p>
        <p>Content for </p>
        <p>Content for </p>
        <p>Content for </p>
      </div>
      <div className="footer-column2">
        <h4>Services</h4>
        <p>Content for </p>
        <p>Content for </p>
        <p>Content for </p>
        <p>Content for </p>
      </div>
      <div className="footer-column2">
        <h4>Resources</h4>
        <p>Content for </p>
        <p>Content for </p>
        <p>Content for </p>
        <p>Content for </p>
      </div>
      <div className="footer-column footer-column-wide">
        <div className="social-icons">
          <a href="https://www.facebook.com" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.twitter.com" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
