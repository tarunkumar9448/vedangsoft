import React, {Component} from 'react';
import testi1 from '../../assets/images/testi-1.jpg';
import OwlCarousel from 'react-owl-carousel';
import './Testimonial.css';


class Testimonial extends Component {
    
    state= {
        responsive:{
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    }
    
    render(){
      return (
           <section className="testimonial py-5">
            <div className="container text-center">
                <p className="smallText">Our Clients Says</p>
                <h2 className="section-heading">Clients Testimonials</h2>
                <p className="section-heading-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <OwlCarousel className='owl-theme' loop margin={0} dots lazyLoad responsive={this.state.responsive} autoplay smartSpeed={1000}>
                  <div className="testimonial p-4 border m-4 shadow">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                             <img src={testi1} className="App-logo" alt="logo" />
                        </div>
                        <div className="col-md-8">
                            <div className="testi-text text-start py-5 px-4">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                <h4>Mr. Johan Smith<small className="d-block">CEO of Alpha groups</small></h4>
                            </div>
                        </div>
                    </div>
                  </div>
                </OwlCarousel>
            </div>
          </section>
      );
    }
}

export default Testimonial;