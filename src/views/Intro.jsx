import '../css/Intro.css';
import introImage from '../assets/intro-img.png';

const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 intro-content ">
            <p>Capital Bridge:</p>
            <h1>Premier Professional Training and Development Solutions</h1>
            <p>
              Empowering Professionals through Comprehensive Training and
              Development Solutions
            </p>
            <div className="btn-group">
              <button className="btn intro-btn1">Get Start Now</button>
              <button className="btn intro-btn2">View all Services</button>
            </div>
          </div>
          <div className="col-lg-5 intro-image">
            <img src={introImage} alt="Intro Image" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
