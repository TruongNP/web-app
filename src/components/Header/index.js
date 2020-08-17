import React from 'react';
import { normalizeImgPath } from "../../utils/imgPath";
import MainMenu from '../Menu';

function Header() {
  return (
    <header id="header" className="fixed-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-6 d-flex align-items-center">
              <a href="/" className="logo-link navbar-brand text-light d-flex align-items-center">
                <img src={normalizeImgPath('logo192.png')} alt="logo" width="40" height="auto"/>
                <h3 className="m-0 ml-1 text-uppercase">My App</h3>
              </a>
            </div>
            <div className="col-lg-8 col-md-6 col-6">
              <nav className="navbar navbar-expand-lg navbar-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                </button>
                <MainMenu></MainMenu>
                
              </nav>
            </div>
          </div>
        </div>
    </header>
  );
}

export default Header;
