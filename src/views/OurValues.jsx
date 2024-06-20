import '../css/Ourvalues.css';
import aboutUsVideo from '../assets/short-video.mp4'; // Import your video file

const OurValues = () => {
  return (
    <section className="section our-values">
      <div className="container">
        <div className="row align-items-center">
          <h2 className="ourvalues-title">
            Your Gateway to Professional Excellence
          </h2>
          <p className="ourvalues-desc">
            Unleashing Potential with Innovative Training Solutions for
            Professionals and Corporations
          </p>
          <div className="col-lg-6 ourvalues-image">
            <video controls autoPlay loop muted className="video-fluid">
              <source src={aboutUsVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-lg-5 offset-lg-1 ourvalues-content">
            <div>
              <h4>Mission</h4>
              <p>
                Our mission at Capital Bridge is to empower individuals and
                organizations by providing superior training and development
                solutions that foster growth, efficiency, and success. We aim to
                be the trusted partner in your journey towards professional
                excellence.
              </p>
            </div>
            <div>
              <h4>Vision</h4>
              <p>
                Our vision is to become the leading provider of professional
                training services globally, recognized for our commitment to
                quality, innovation, and measurable results. We strive to create
                a world where continuous learning and development are integral
                to achieving personal and organizational goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
