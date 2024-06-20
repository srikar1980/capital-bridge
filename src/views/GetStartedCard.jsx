import '../css/GetStarted.css';
const GetStartedCard = () => {
  return (
    <section id='get-started'>
      <div className="container">
        <div className="row align-items-center">
          <div className="get-start-card">
            <div>
              <h3 className="get-start-title">Get Started Today! </h3>
              <blockquote className="blockquote mb-0">
                <p>
                  Discover How Our Training Programs Can Transform Your Team
                </p>
              </blockquote>
            </div>
            <div>
              <button className="btn get-started-btn">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedCard;
