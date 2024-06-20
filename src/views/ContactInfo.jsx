import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import '../css/ContactInfo.css';
const ContactInfo = () => {
  return (
    <div>
      <h3 className="find-us-title">Find Us</h3>
      <div className="card">
        <div className="card-body">
          <div className="card-text">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <div className="contact-info">
              <span className="label">Call Us:</span>
              <span className="example">(123) 456-7890</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="card-text">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <div className="contact-info">
              <span className="label">Email Us:</span>
              <span className="example">info@example.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="card-text">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            <div className="contact-info">
              <span className="label">Address:</span>
              <span className="example">123 Main St, City, Country</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
