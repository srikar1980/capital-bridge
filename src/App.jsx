import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Header from './views/Header';
import Intro from './views/Intro';
import AboutUs from './views/AboutUs';
import Services from './views/Services';
import Contact from './views/Contact';
import Footer from './views/Footer';
import GetStartedCard from './views/GetStartedCard';
import ProfessionalExcellence from './views/Professional Excellence';

const App = () => {
  return (
    <Router>
      <div id="root">
        <Header />
        <Intro />
        <AboutUs />
        <Services />
        <ProfessionalExcellence />
        <GetStartedCard />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
