import '../css/Form.css'; // Ensure this path matches your project structure

const ContactForm = () => {
  return (
    <div>
      <p>Contact Info</p>
      <h3 className="keep-in-touch">Keep In Touch</h3>
      <p>
        We prioritize responding to your inquiries promptly to ensure you
        receive the assistance you need in a timely manner.
      </p>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            id="message"
            rows="5"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div className="btn-group">
          <button type="submit" className="btn btn-contact">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
