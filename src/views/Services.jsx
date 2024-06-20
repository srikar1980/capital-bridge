import '../css/Services.css';
import { servicescards } from '../data/servicesdata';

const Services = () => {
  return (
    <section className="section services">
      <div className="row align-items-center services-content">
        <h1>Services</h1>
        <div className="col-lg-12 ">
          <div className="service-cards">
            {servicescards.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-image">
                  {service.image && (
                    <img src={service.image} alt={service.title} />
                  )}
                </div>
                <div className="service-details">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
