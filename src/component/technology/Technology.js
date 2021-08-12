import react from '../../assets/images/react.png';
import node from '../../assets/images/node.png';
import net from '../../assets/images/net.png';
import sql from '../../assets/images/sql.png';
import mongo from '../../assets/images/mongo.png';
import java from '../../assets/images/java.png';
import php from '../../assets/images/php.png';
import anguler from '../../assets/images/anguler.png';
import aws from '../../assets/images/aws.png';
import sass from '../../assets/images/sass.png';
import './Technology.css';

function Technology() {
  return (
       <section className="technology">
        <div className="container py-5 text-center">
            <p className="smallText">Our Technology</p>
            <h2 className="section-heading">Our Latest Technologies</h2>
            <p className="section-heading-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className="row align-itens-center g-4 row-cols-2 row-cols-md-3  row-cols-lg-4 row-cols-xl-5 g-xl-5">
                <div className="col">
                    <div className="technology-box animation-effect react">
                        <img src={react} className="m-auto" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="technology-box animation-effect node">
                        <img src={node} className="m-auto" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="technology-box animation-effect net">
                        <img src={net} className="m-auto" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="technology-box animation-effect sql">
                        <img src={sql} className="m-auto" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="technology-box animation-effect mongo">
                        <img src={mongo} className="m-auto" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="technology-box animation-effect java">
                        <img src={java} className="m-auto" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="technology-box animation-effect php">
                        <img src={php} className="m-auto" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="technology-box animation-effect anguler">
                        <img src={anguler} className="m-auto" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="technology-box animation-effect aws">
                        <img src={aws} className="m-auto" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="technology-box animation-effect sass">
                        <img src={sass} className="m-auto" alt="" />
                    </div>
                </div>
            </div>
        </div>
      </section>
  );
}

export default Technology;