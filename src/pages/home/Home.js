import homebanner from '../../assets/images/home-banner.png';
import Aboutus from '../../component/aboutus/Aboutus';
import Service from '../../component/service/Service';
import Project from '../../component/project/Project';
import Client from '../../component/client/Client';
import Demo from '../../component/demo/Demo';
import Technology from '../../component/technology/Technology';
import Team from '../../component/team/Team';
import Testimonial from '../../component/testimonial/Testimonial';
import Subscribe from '../../component/subscribe/Subscribe';

import './Home.css';

function Home() {
  return (
      <div>
          <section className="home-banner">
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="banner-text">
                            <h1>Digital IT Services And Quality of  Development</h1>
                            <p>Uses various innovative technologies that make your work with it not only easier but more productive without unnecessary coding.</p>
                            <div className="d-flex">
                                <a href="#" className="btn btn-rounded btn-primary me-3 px-4">Learn More</a>
                                <a href="#" className="btn btn-rounded btn-warning px-4">Get A Quote</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                         <img src={homebanner} className="App-logo" alt="logo" />
                    </div>
                </div>
            </div>
          </section>
           
            <Aboutus />  
            <Service />  
            <Project />  
            <Client />  
            <Demo />  
            <Technology />  
            <Team />  
            <Testimonial />  
            <Subscribe />
        </div>
    );
}

export default Home;
