import React, { useEffect, useState } from 'react';
import { normalizeImgPath } from "../../utils/imgPath";
import MainMenu from '../MainMenu';
import RightHomeMenu from '../RightHomeMenu';
import { Link } from "react-router-dom";

function Header(props) {
  
  const [scrollPosition, setPosition] = useState(0);
  const [isActive, setActive] = useState(0);
  const currentPage = props.currentPage;
  
  const handleScrollonHeader = () => {
    const pos = window.pageYOffset;
    setPosition(pos);
  }

  const handleClickOpenMenu = () => {
    setActive(true);
  }

  const handleClickCloseMenu = () => {
    setActive(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollonHeader, { passive: true });
  }, []);

  return (
    <header id="header" className={ `${ currentPage === "Home" ? '' : 'bg-dark' } fixed-top ${ scrollPosition > 0 ? 'scroll-active' : '' }` }>
        <div className="container">
          <div className="row m-0">
            <div className="col-lg-4 col-md-6 col-6 pl-lg-3 pr-lg-3 pl-0 pr-0 d-flex align-items-center">
              <Link to="/" className="logo-link navbar-brand text-light d-flex align-items-center">
                <img src={normalizeImgPath('logo192.png')} alt="logo" width="40" height="auto"/>
                <h3 className="m-0 ml-1 text-uppercase">My App</h3>
              </Link>
            </div>
            <div className="col-lg-8 col-md-6 col-6 pl-lg-3 pr-lg-3 pl-0 pr-0">
              <nav className="navbar navbar-expand-lg navbar-dark pl-0 pr-0">
                <button onClick={ handleClickOpenMenu } id="btn-toggle-menu" className="navbar-toggler ml-auto p-0" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                </button>
                <MainMenu isActive={ isActive } handleClickCloseMenu={ handleClickCloseMenu }></MainMenu>
              </nav>

              <RightHomeMenu currentPage={ currentPage }></RightHomeMenu>
            </div>
          </div>
        </div>
    </header>
  );
}

export default Header;
