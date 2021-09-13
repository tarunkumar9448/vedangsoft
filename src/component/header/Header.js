import {BrowserRouter as Link, NavLink } from "react-router-dom";
import { RiPhoneFill } from 'react-icons/ri';
import { RiFacebookFill } from 'react-icons/ri';
import { RiTwitterFill } from 'react-icons/ri';
import { RiInstagramFill } from 'react-icons/ri';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { RiYoutubeFill } from 'react-icons/ri';
import { RiWhatsappFill } from 'react-icons/ri';
import logo from '../../assets/images/logo.png';
import './Header.css';
function Header() {
  return (
      <header>
        <div className="top-bar bg-primary py-1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6">
                        <p className="d-flex align-items-center text-white m-0">
                            <span className="d-none d-md-inline-block">Suport : </span>
                            <a className="text-white ms-md-1" href="tel:+91-9876543210"><RiPhoneFill className="d-md-none"/> <small>+91-98765 43210</small></a>
                        </p>
                    </div>
                    <div className="col-6">
                        <ul className="list-unstyled d-flex align-items-center justify-content-end m-0 icons">
                            <li>
                                <a className="text-white" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><RiFacebookFill /></a>
                            </li>
                            <li>
                                <a className="text-white" href="https://twitter.com/" target="_blank" rel="noreferrer"><RiTwitterFill /></a>
                            </li>
                            <li>
                                <a className="text-white" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><RiInstagramFill /></a>
                            </li>
                            <li>
                                <a className="text-white" href="https://in.linkedin.com/" target="_blank" rel="noreferrer"><RiLinkedinBoxFill /></a>
                            </li>
                            <li>
                                <a className="text-white" href="https://www.youtube.com/" target="_blank" rel="noreferrer"><RiYoutubeFill /></a>
                            </li>
                            <li>
                                <a className="text-white" href="whatsapp://send?text=Hello World!&phone=+919876543210" target="_blank" rel="noreferrer"><RiWhatsappFill /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            <Link className="navbar-brand" to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navBar">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/solution">Solution</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/our-customer">Our Customer</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/career">Career</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact-us">Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav> 
  </header>
  );
}

export default Header;
