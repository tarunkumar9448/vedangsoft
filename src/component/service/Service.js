import React, {Component} from 'react';
import service1 from '../../assets/images/service1.png';
import service2 from '../../assets/images/service2.png';
import service3 from '../../assets/images/service3.png';
import OwlCarousel from 'react-owl-carousel';
import './Service.css';

class Service extends Component {
        
    state= {
        responsive:{
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    }
    
    render(){
      return (
          <section className="service">
            <div className="container py-5 text-center">
                <p className="smallText">Our Services</p>
                <h2 className="section-heading">Digital IT Services And Quality of Development</h2>
                <p className="section-heading-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                
                <OwlCarousel className='owl-theme' loop margin={40} dots lazyLoad responsive={this.state.responsive} autoplay smartSpeed={1000}>
                    <div className="service-box">
                        <img src={service1} className="mx-auto" alt="" />
                        <h3>IT Services</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  the industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled.</p>
                    </div>
                    <div className="service-box">
                        <img src={service2} className="mx-auto" alt="" />
                        <h3>IT Consultancy</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  the industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled.</p>
                    </div>
                    <div className="service-box">
                        <img src={service3} className="mx-auto" alt="" />
                        <h3>Development</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  the industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled.</p>
                    </div>
                    <div className="service-box">
                        <img src={service2} className="mx-auto" alt="" />
                        <h3>IT Consultancy</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  the industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled.</p>
                    </div>
                </OwlCarousel>
            </div>
          </section>
      );
    }
}

export default Service;