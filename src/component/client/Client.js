import client1 from '../../assets/images/client1.png';
import client2 from '../../assets/images/client2.png';
import client3 from '../../assets/images/client3.png';
import client4 from '../../assets/images/client4.png';
import client5 from '../../assets/images/client5.png';
import './Client.css';

function Client() {
  return (
      <section className="client py-5">
        <div className="container text-center">
            <p>Our Project</p>
            <h2>Look At Our Some Projects</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
            <div className="row align-itens-center gx-0">
                <div className="col">
                    <div className="client-box">
                        <img src={client1} className="mx-auto" alt="logo" />
                    </div>
                </div>
                <div className="col">
                    <div className="client-box">
                        <img src={client2} className="mx-auto" alt="logo" />
                    </div>
                </div>
                <div className="col">
                    <div className="client-box">
                        <img src={client3} className="mx-auto" alt="logo" />
                    </div>
                </div>
                <div className="col">
                    <div className="client-box">
                        <img src={client4} className="mx-auto" alt="logo" />
                    </div>
                </div>
                <div className="col">
                    <div className="client-box">
                        <img src={client5} className="mx-auto" alt="logo" />
                    </div>
                </div>
            </div>
      </section>
  );
}

export default Client;