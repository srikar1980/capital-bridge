import aboutUsImage from '../assets/aboutus-img.png';

const AboutUs = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 intro-image">
            <img src={aboutUsImage} alt="Aboutus Image" className="img-fluid" />
          </div>
          <div className="col-lg-7 intro-content ">
            <p>Capital Bridge:</p>
            <h1>About Us</h1>
            <p>
              At Capital Bridge, we believe that the cornerstone of success lies
              in continuous professional development. Our mission is to bridge
              the gap between potential and performance by offering cutting-edge
              training solutions tailored for professionals, corporations, and
              sales teams. With a focus on innovation, expertise, and results,
              we are committed to transforming your workforce into a dynamic and
              highly skilled team ready to meet the challenges of todays
              competitive market.
            </p>
            <div className="btn-group">
              <button className="btn intro-btn1">Get Quote</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
