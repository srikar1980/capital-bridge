import '../css/Services.css';
import { servicescards } from '../data/servicesdata';

const Services = () => {
  return (
    <section className="section services">
      <div className="container">
        <div className="row align-items-center">
          <div  className='services-content'>
            <h1 className="service-title">Services</h1>
          </div>
          <div className="col-lg-12">
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
      </div>
    </section>
  );
};

export default Services;
