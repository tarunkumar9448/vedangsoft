import project1 from '../../assets/images/project1.png';
import project2 from '../../assets/images/project2.png';
import project3 from '../../assets/images/project3.png';
import './Project.css';

function Project() {
  return (
      <section className="project bg-light py-5">
        <div className="container text-center">
            <p>Our Project</p>
            <h2>Look At Our Some Projects</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
            <div className="row align-itens-center gx-0">
                <div className="col-md-4">
                    <div className="project-box">
                        <img src={project1} className="mx-auto" alt="logo" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="project-box">
                        <img src={project2} className="mx-auto" alt="logo" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="project-box">
                        <img src={project3} className="mx-auto" alt="logo" />
                    </div>
                </div>
            </div>
      </section>
  );
}

export default Project;