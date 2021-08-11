import React, {Component} from 'react';
import client1 from '../../assets/images/client1.png';
import client2 from '../../assets/images/client2.png';
import client3 from '../../assets/images/client3.png';
import client4 from '../../assets/images/client4.png';
import client5 from '../../assets/images/client5.png';
import OwlCarousel from 'react-owl-carousel';
import './Client.css';

class Client extends Component {
     state= {
        responsive:{
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        },
    }
     render(){
      return (
          <section className="client py-5">
            <div className="container text-center">
                <p className="smallText">Our Clients</p>
                <h2 className="section-heading">Our Special Clients</h2>
                <p className="section-heading-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
          <OwlCarousel className='owl-theme' loop margin={40} dots lazyLoad responsive={this.state.responsive} autoplay smartSpeed={1000}>
                <div className="client-box">
                    <img src={client1} className="mx-auto" alt="" />
                </div>
                <div className="client-box">
                    <img src={client2} className="mx-auto" alt="" />
                </div>
                <div className="client-box">
                    <img src={client3} className="mx-auto" alt="" />
                </div>
                <div className="client-box">
                    <img src={client4} className="mx-auto" alt="" />
                </div>
                <div className="client-box">
                    <img src={client5} className="mx-auto" alt="" />
                </div>
                <div className="client-box">
                    <img src={client3} className="mx-auto" alt="" />
                </div>
          </OwlCarousel>
          </section>
      );
    }
}

export default Client;