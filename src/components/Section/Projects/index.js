import React from 'react';
import { projects } from "../../../static/data/projects";


function Projects() {
    const projectsList = projects.list;

    return (
        <section id="projects" className="section mt-5 pt-5">
            <div className="projects container">
            <div className="row">
                <div className="col-12 d-flex align-items-center just-content-center">
                    <div className="project-content">
                        <h1 className="text-dark text-uppercase text-center font-weight-normal">Recent <span className="text-danger">{ projects.title }</span></h1>
                        <div className="project-list mt-5">
                            {
                                projectsList.map(item => (
                                    <div className="project-item">
                                        <div className={`project-info m-auto ${ item.position === 'right' ? 'order-1' : '' }`}>
                                            <h3 className="project-title "><a href={ item.slug }>{ item.title }</a></h3>
                                            <h6 className="project-cat ">{ item.category }</h6>
                                            <p className="project-except">{ item.except }</p>
                                        </div>
                                        <div className="project-icon"><a href={ item.slug }><img src={ `/image/${ item.image }` } alt={ projects.title }/></a></div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Projects;
