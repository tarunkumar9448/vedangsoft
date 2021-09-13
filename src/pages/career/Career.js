//import banner from '../../assets/images/banner.png';
import Testimonial from '../../component/testimonial/Testimonial';
import Subscribe from '../../component/subscribe/Subscribe';
import './Career.css';

function Career() {
  return (
      <div>
        <h1 className="text-center">Career</h1>
        <Testimonial />  
        <Subscribe />
      </div>
        
  );
}

export default Career;