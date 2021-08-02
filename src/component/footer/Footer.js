import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { RiPhoneFill } from 'react-icons/ri';
import { RiFacebookFill } from 'react-icons/ri';
import { RiTwitterFill } from 'react-icons/ri';
import { RiInstagramFill } from 'react-icons/ri';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { RiYoutubeFill } from 'react-icons/ri';
import { RiWhatsappFill } from 'react-icons/ri';
import './Footer.css';

function Footer() {
  return (
      <footer className="bg-dark text-white">
       <Router>
        <div className="container py-4 py-xl-5">
            <div className="row">
                <div className="col-md-6 col-xl-3">
                    <h4>About Us</h4>
                    <p>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    </p>
                    <ul className="list-unstyled d-flex align-items-center m-0">
                        <li>
                            <a className="text-white mx-1" href="https://www.facebook.com/" target="_blank"><RiFacebookFill /></a>
                        </li>
                        <li>
                            <a className="text-white mx-1" href="https://twitter.com/" target="_blank"><RiTwitterFill /></a>
                        </li>
                        <li>
                            <a className="text-white mx-1" href="https://www.instagram.com/" target="_blank"><RiInstagramFill /></a>
                        </li>
                        <li>
                            <a className="text-white mx-1" href="https://in.linkedin.com/" target="_blank"><RiLinkedinBoxFill /></a>
                        </li>
                        <li>
                            <a className="text-white mx-1" href="https://www.youtube.com/" target="_blank"><RiYoutubeFill /></a>
                        </li>
                        <li>
                            <a className="text-white mx-1" href="whatsapp://send?text=Hello World!&phone=+919876543210" target="_blank"><RiWhatsappFill /></a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 col-xl-3">
                    <h4>Explore Our SIte</h4>
                    <ul className="list-unstyled">
                        <li>
                            <Link className="text-white" to="/">Home</Link>
                        </li>
                        <li>
                          <Link className="text-white" to="/about">About</Link>
                        </li>
                        <li>
                          <Link className="text-white" to="/solution">Solution</Link>
                        </li>
                        <li>
                          <Link className="text-white" to="/our-customer">Our Customer</Link>
                        </li>
                        <li>
                          <Link className="text-white" to="/career">Career</Link>
                        </li>
                        <li>
                          <Link className="text-white" to="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 col-xl-3">
                    <h4>Latest News</h4>
                    <ul className="list-unstyled">
                        <li>
                          <Link className="text-white" to="/career">Hiring Now</Link>
                        </li>
                        <li>
                          <Link className="text-white" to="/contact-us">Up Coming Project</Link>
                        </li>
                      </ul>
                </div>
                <div className="col-md-6 col-xl-3">                    
                    <h4>Contact Us</h4>
                    <ul className="list-unstyled">
                        <li>
                            <strong>VedangSoft,</strong><br/>2524, C-2, Vasant Kunj,<br/>New Delhi-110070
                        </li>
                        <li>
                            Call @ <a className="text-white" href="tel:+91-9876543210" target="_blank">+91-98765 43210</a>
                        </li>
                        <li>
                            Mail @ <a className="text-white" href="mailto:info@vedangsoft.com" target="_blank">info@vedangsoft.com</a>
                        </li>
                      </ul>
                </div>
            </div>
        </div>
       <div className="text-center py-2 d-block bg-black"><small className="text-muted">Copyright 2021 VedangSoft Pvt.</small></div>
      </Router>     
  </footer>
    
  );
}

export default Footer;
