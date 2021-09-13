import {BrowserRouter as Router, Switch} from "react-router-dom";
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import Solution from '../../pages/solution/Solution';
import Customer from '../../pages/customer/Customer';
import Career from '../../pages/career/Career';
import Contact from '../../pages/contact/Contact';
import Privacy from '../../pages/privacy/Privacy';
import Terms from '../../pages/terms/Terms';
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import './Main.css';
function Main() {
  return (
    <Router>
        <Header />
      
        <Switch>  
            <Router path="/terms-conditions">
                <Terms />
            </Router>
            <Router path="/privacy">
                <Privacy />
            </Router>
            <Router path="/about">
                <About />
            </Router>
            <Router path="/solution">
                <Solution />
            </Router>
            <Router path="/our-customer">
                <Customer />
            </Router>
            <Router path="/career">
                <Career />
            </Router>
            <Router path="/contact-us">
                <Contact />
            </Router>
            <Router path="/">
                <Home />
            </Router>
        </Switch>
      
        <Footer />
    </Router>  
  );
}

export default Main;
