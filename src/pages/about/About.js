//import banner from '../../assets/images/banner.png';
import Testimonial from '../../component/testimonial/Testimonial';
import Subscribe from '../../component/subscribe/Subscribe';
import './About.css';

function About() {
  return (
      <div>
        <h1 className="text-center">About</h1>
        <Testimonial />  
        <Subscribe />
      </div>
        
  );
}

export default About;
