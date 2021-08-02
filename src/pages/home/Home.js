import banner from '../../assets/images/banner.png';
import subscribe from '../../assets/images/subscribe.png';
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
  return (<>
            <img src={banner} className="App-logo" alt="logo" />
            <Aboutus />  
            <Service />  
            <Project />  
            <Client />  
            <Demo />  
            <Technology />  
            <Team />  
            <Testimonial />  
            <Subscribe />
        </>
    );
}

export default Home;
