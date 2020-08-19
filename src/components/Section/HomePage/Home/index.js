import React from 'react';
import { normalizeImgPath } from "../../../../utils/imgPath";


function Home() {
    const homeStyle = {
        backgroundImage: "url(" + normalizeImgPath('image/home-page/hero-bg.png') + ")"
      };
  return (
    <section id="home" className="section" style={ homeStyle }>
        <div className="home container">
          <div className="row  m-0">
            <div className="col-12 d-flex align-items-center">
                <div className="home-content">
                    <h1 className="m-0 ml-1 text-white">Hello!</h1> 
                    <h1 className="m-0 ml-1 text-white">My name's</h1> 
                    <h1 className="m-0 ml-1 text-danger">Phi Truong Nguyen</h1> 
                    <button type="button" className="btn-portfolio btn mt-4 pt-2 pl-5 pb-2 pr-5 border border-danger text-uppercase text-white">Portfolio</button>
                </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Home;
