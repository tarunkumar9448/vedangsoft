import testi1 from '../../assets/images/testi-1.jpg';
import './Testimonial.css';

function Testimonial() {
  return (
       <section className="testimonial py-5">
        <div className="container text-center">
            <p>Our Clients Says</p>
            <h2>Clients Testimonials</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            
              <div className="testimonial p-4 border rounded mt-5">
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
        </div>
      </section>
  );
}

export default Testimonial;