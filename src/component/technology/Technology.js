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
            <p>Our Technology</p>
            <h2>Our Latest Technologies</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className="row align-itens-center g-5 row-cols-5">
                <div className="col">
                    <div className="technology-box react">
                        <img src={react} className="mx-auto" alt="logo" />
                    </div>
                </div>
                <div className="col">
                    <div className="technology-box node">
                        <img src={node} className="mx-auto" alt="logo" />
                    </div>
                </div>
                <div className="col">
                    <div className="technology-box net">
                        <img src={net} className="mx-auto" alt="logo" />
                    </div>
                </div>
                <div className="col">
                    <div className="technology-box sql">
                        <img src={sql} className="mx-auto" alt="logo" />
                    </div>
                </div>
                <div className="col">
                    <div className="technology-box mongo">
                        <img src={mongo} className="mx-auto" alt="logo" />
                    </div>
                </div>
                <div className="col">
                    <div className="technology-box java">
                        <img src={java} className="mx-auto" alt="logo" />
                    </div>
                </div>
                <div className="col">
                    <div className="technology-box php">
                        <img src={php} className="mx-auto" alt="logo" />
                    </div>
                </div>
                <div className="col">
                    <div className="technology-box anguler">
                        <img src={anguler} className="mx-auto" alt="logo" />
                    </div>
                </div>
                <div className="col">
                    <div className="technology-box aws">
                        <img src={aws} className="mx-auto" alt="logo" />
                    </div>
                </div>
                <div className="col">
                    <div className="technology-box sass">
                        <img src={sass} className="mx-auto" alt="logo" />
                    </div>
                </div>
            </div>
        </div>
      </section>
  );
}

export default Technology;