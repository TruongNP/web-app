import React from 'react';
import { normalizeImgPath } from "../../../../utils/imgPath";


function About() {

    return (
        <section id="about" className="section">
            <div className="about container">
            <div className="row m-0">
                <div className="col-4 d-flex align-items-center justify-content-end">
                    <div className="about-image d-flex justify-content-end align-items-center">
                        <div className="border-overlay"></div>
                        <img src={normalizeImgPath('image/home-page/img-2.png')} alt="about" />
                    </div>
                </div>
                <div className="col-8 p d-flex align-items-center">
                    <div className="about-content">
                        <h1 className="text-dark text-uppercase font-weight-normal">About <span className="text-danger">Me</span></h1>
                        <h5 className="text-dark text-capitalize font-weight-normal">Front End Developer</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, velit alias eius non illum beatae atque repellat ratione qui veritatis repudiandae adipisci maiores. At inventore necessitatibus deserunt exercitationem cumque earum omnis ipsum rem accusantium quis, quas quia, accusamus provident suscipit magni! Expedita sint ad dolore, commodi labore nihil velit earum ducimus nulla quae nostrum fugit aut, deserunt reprehenderit libero enim!</p>
                        <a href="/dowload" className="btn-about-download btn-hover btn mt-4 pt-2 pl-5 pb-2 pr-5 border border-danger text-uppercase text-dark">Download Resume</a>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default About;
