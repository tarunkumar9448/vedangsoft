import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './component/header/Header';
import Home from './pages/home/Home';
import Footer from './component/footer/Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Footer />    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
