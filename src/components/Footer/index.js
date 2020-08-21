import React from 'react';
import { normalizeImgPath } from "../../utils/imgPath";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookSquare } from '@fortawesome/free-solid-svg-icons';
import {faTwitter, faYoutube, faFacebook} from '@fortawesome/fontawesome-free-brands';

function Header(props) {
  
  return (
    <header id="footer" className="section bg-dark mt-5 pt-5 pb-5">
        <div className="container">
          <div className="row m-0">
            <div className="col-lg-6 col-md-6 col-6 pl-lg-3 pr-lg-3 pl-0 pr-0">
                <Link to="/" className="logo-link navbar-brand text-light d-flex align-items-center">
                    <img src={normalizeImgPath('logo192.png')} alt="logo" width="40" height="auto"/>
                    <h3 className="m-0 ml-1 text-uppercase">My App</h3>
                 </Link>
                 <div className="mt-5">
                     <h5 className="text-light m-0 mb-3 font-weight-normal">Address: 186 Dang Van Ngu, P.14, Q.Phhu Nhuan, TP. Ho Chi Minh</h5>
                     <h5 className="text-light m-0 mb-3 font-weight-normal">Phone: (-84) 123 456 789</h5>
                     <h5 className="text-light m-0 font-weight-normal">Email: truongnp@fabatechnology.com</h5>
                 </div>
                 <div className="mt-5">
                     <ul className="d-flex list-inline">
                         <li className="mr-3">
                             <Link href className="text-light">
                                <FontAwesomeIcon icon={ faFacebook } />
                             </Link>
                        </li>
                        <li className="mr-3">
                             <Link href className="text-light">
                                <FontAwesomeIcon icon={ faYoutube } />
                             </Link>
                        </li>
                        <li>
                             <Link href className="text-light">
                                <FontAwesomeIcon icon={ faTwitter } />
                             </Link>
                        </li>
                     </ul>
                 </div>
            </div>
            <div className="col-lg-6 col-md-6 col-6 pl-lg-3 pr-lg-3 pl-0 pr-0">
            <div className="form-contact">
                <form className="needs-validation" novalidate>
                    <div className="form-row">
                        <div className="col-12 form-group mb-3">
                            <label for="validationTooltip01" className="text-light">First name</label>
                            <input type="text" className="form-control text-dark" placeholder="First name" value="" required />
                            <div className="valid-tooltip">Looks good!</div>
                        </div>
                        <div className="col-12 form-group mb-3">
                            <label for="validationTooltip01" className="text-light">Last name</label>
                            <input type="text" className="form-control text-dark" placeholder="Last name" value="" required />
                            <div className="valid-tooltip">Looks good!</div>
                        </div>
                        <div className="col-12 form-group mb-3">
                            <label for="validationTooltip01" className="text-light">Email</label>
                            <input type="email" className="form-control text-dark" placeholder="Email" required />
                            <div className="valid-tooltip">Looks good!</div>
                        </div>
                        <div className="col-12 form-group mb-3">
                            <label for="validationTooltip01" className="text-light">Phone</label>
                            <input type="text" className="form-control text-dark" placeholder="Phone" />
                            <div className="valid-tooltip">Looks good!</div>
                        </div>
                        <div className="col-12 form-group mb-3">
                            <label for="validationTooltip01" className="text-light">Message</label>
                            <textarea className="form-control text-dark" placeholder="Message" required></textarea>
                            <div className="valid-tooltip">Looks good!</div>
                        </div>
                        <div className="col-12 form-group mb-3">
                            <button className="btn d-flex bg-danger ml-auto text-light">Submit Form</button>
                        </div>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </header>
  );
}

export default Header;
