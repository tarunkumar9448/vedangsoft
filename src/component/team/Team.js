import fullimg7 from '../../assets/images/fullimg-7.png';
import face1 from '../../assets/images/face-1.png';
import face2 from '../../assets/images/face-2.png';
import face3 from '../../assets/images/face-3.png';
import face4 from '../../assets/images/face-4.png';
import face5 from '../../assets/images/face-5.png';
import face6 from '../../assets/images/face-6.png';
import face7 from '../../assets/images/face-7.png';
import './Team.css';

function Team() {
  return (
      <section className="team pt-5">
        <div className="container text-center">
            <p className="smallText">Our Team</p>
            <h2 className="section-heading">Peoples Behind VedangSoft</h2>
            <p className="section-heading-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className="row align-itens-center row-cols-7">
                <div className="col">
                    <div className="team-face animation-effect active">
                        <img src={face7} className="rounded-cricle" alt="logo" />
                    </div>
                </div>
                <div className="col">
                    <div className="team-face animation-effect">
                        <img src={face6} className="rounded-cricle" alt="logo" />
                    </div>
                </div>
                <div className="col">
                    <div className="team-face animation-effect">
                        <img src={face5} className="rounded-cricle" alt="logo" />
                    </div>
                </div>
                <div className="col">
                    <div className="team-face animation-effect">
                        <img src={face4} className="rounded-cricle" alt="logo" />
                    </div>
                </div>
                <div className="col">
                    <div className="team-face animation-effect">
                        <img src={face3} className="rounded-cricle" alt="logo" />
                    </div>
                </div>
                <div className="col">
                    <div className="team-face animation-effect">
                        <img src={face2} className="rounded-cricle" alt="logo" />
                    </div>
                </div>
                <div className="col">
                    <div className="team-face animation-effect">
                        <img src={face1} className="rounded-cricle" alt="logo" />
                    </div>
                </div>
            </div>
              <div className="row align-items-end text-md-start">
                <div className="col-md-4">
                    <img src={fullimg7} className="App-logo" alt="logo" />
                </div>
                <div className="col-md-8 mb-5">
                    <h3>Mr. Sudhir Bahuguna<small className="d-block">Promoter & CEO VedangSoft Pvt. Ltd.</small></h3>
                    <p>More than Three Decades of experience in Oil & Gas Industry (Upstream, Midstream, Downstream). Worked in leadership role with Reliance, ONGC, ONGC Videsh , GNPOC JV of ONGC Videsh , CNPOC China, PETRONAS Malaysia ,Sudapet Sudan , Exxon Mobile USA . BP UK, & Petro Vietnam. Handled multi million dollars IT, Organization change management and Business transformation projects. Instrumental in creating more than 20 Software IP’s for Oil & Gas vertical and E- Governance. Sudhir is Engineering Graduate & MBA</p>
                </div>
              </div>
        </div>
      </section>
  );
}

export default Team;