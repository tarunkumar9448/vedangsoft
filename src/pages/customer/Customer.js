//import banner from '../../assets/images/banner.png';
import Testimonial from '../../component/testimonial/Testimonial';
import Subscribe from '../../component/subscribe/Subscribe';
import './Customer.css';

function Customer() {
  return (
      <div>
        <h1 className="text-center">Customer</h1>
        <Testimonial />  
        <Subscribe />
      </div>
        
  );
}

export default Customer;