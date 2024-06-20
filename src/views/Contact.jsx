import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <ContactInfo />
          </div>
          <div className="col-lg-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
