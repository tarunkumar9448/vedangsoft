import React, {Component} from 'react';
import './Subscribe.css';
class Subscribe extends Component {
    render(){
      return (
        <section className="subscribe py-5 bg-primary">
            <div className="container text-center text-md-start">
                <div className="row align-items-center">
                    <div className="col-md-6 col-xl-5">
                        <h2 className="section-heading text-white">Subscribe To Our List</h2>
                    </div>
                    <div className="col-md-6 text-md-end col-xl-7">
                      <form>
                        <div className="row align-items-center">
                            <div className="col-md-4"><input type="text" name="name" className="form-control input-rounded px-4" placeholder="Full Name"/></div>
                            <div className="col-md-4"><input type="email" name="email" className="form-control input-rounded px-4" placeholder="Email Address"/></div>
                            <div className="col-md-4"><button type="submit" className="d-block w-100 btn btn-warning btn-rounded">Subscribe</button></div>
                        </div>
                      </form>
                    </div>
                </div>
            </div>
          </section>
      );
}
}

export default Subscribe;