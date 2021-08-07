import service1 from '../../assets/images/service1.png';
import service2 from '../../assets/images/service2.png';
import service3 from '../../assets/images/service3.png';
import './Service.css';

function Service() {
  return (
      <section className="service">
        <div className="container py-5 text-center">
            <p>Our Services</p>
            <h2>Digital IT Services And Quality of Development</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className="row align-itens-center">
                <div className="col-md-4">
                    <div className="service-box">
                        <img src={service1} className="mx-auto" alt="logo" />
                        <h3>IT Services</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  the industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-box">
                        <img src={service2} className="mx-auto" alt="logo" />
                        <h3>IT Consultancy</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  the industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-box">
                        <img src={service3} className="mx-auto" alt="logo" />
                        <h3>Development</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  the industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
   
  );
}

export default Service;