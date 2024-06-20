import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Header from './views/Header';
import Intro from './views/Intro';
import AboutUs from './views/AboutUs';
import Services from './views/Services';
import OurValues from './views/OurValues';
import Feedback from './views/Feedback';
import WhyChooseUs from './views/WhyChooseUs';
import Contact from './views/Contact';
import Footer from './views/Footer';
import GetStartedCard from './views/GetStartedCard';

const App = () => {
  return (
    <Router>
      <div id="root">
        <Header />
        <Intro />
        <AboutUs />
        <Services />
        <OurValues />
        <GetStartedCard />
        <Feedback />
        <WhyChooseUs />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
