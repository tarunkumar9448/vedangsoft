import aboutimg from '../../assets/images/aboutus-img.png';
import './Aboutus.css';

function Aboutus() {
  return (
      <section className="aboutus">
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-md-5"><img src={aboutimg} className="App-logo" alt="logo" /></div>
                <div className="col-md-7">
                    <p className="smallText">About Us</p>
                    <h2>Digital IT Services And Quality of  Development</h2>
                    <p>VedangSoft  is promoted by Oil & Gas leadership and practitioners team, comprises of Ex Head of Oil & Gas Business and ex-CIOs of ONGC, ONGC Videsh Reliance, Texaco, Exxon Mobile, BP and Boeing USA and executed some of the largest Change Management, Organization Transformation, Digital Oilfield and Systems  implementation programs in Asia pacific and other part of Globe.</p>
                    <a href="#" className="btn btn-rounded btn-info px-4">Learn More</a>
                </div>
            </div>
        </div>
      </section>
  );
}

export default Aboutus;