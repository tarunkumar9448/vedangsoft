import React, {Component} from 'react';
import project1 from '../../assets/images/project1.png';
import project2 from '../../assets/images/project2.png';
import project3 from '../../assets/images/project3.png';
import OwlCarousel from 'react-owl-carousel';
import './Project.css';


class Project extends Component {
    
    state= {
        responsive:{
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    }
    
    render(){
      return (
        <section className="project bg-light py-5">
            <div className="container text-center">
                <p>Our Project</p>
                <h2>Look At Our Some Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <OwlCarousel className='owl-theme' loop margin={0} dots lazyLoad responsive={this.state.responsive} autoplay smartSpeed={1000}>
                <div className="project-box">
                    <img src={project1} className="mx-auto" alt="" />
                </div>
                <div className="project-box">
                    <img src={project2} className="mx-auto" alt="" />
                </div>
                <div className="project-box">
                    <img src={project3} className="mx-auto" alt="" />
                </div>
                <div className="project-box">
                    <img src={project2} className="mx-auto" alt="" />
                </div>          
                <div className="project-box">
                    <img src={project3} className="mx-auto" alt="" />
                </div>
            </OwlCarousel>
        </section>
      );
    }
}

export default Project;