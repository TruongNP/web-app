import React from 'react';
import { normalizeImgPath } from "../../../utils/imgPath";


function Contact() {

    return (
        <section id="contact" className="section">
            <div className="contact container">
            <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-end">
                    <div className="contact-content">
                        <h1 className="mb-4 text-dark text-uppercase text-center font-weight-normal">Contact <span className="text-danger">Info</span></h1>
                        <div className="contact-info">
                            <div className="contact-item d-flex pt-4 pl-3 pb-4 pr-3">
                                <img src={normalizeImgPath('image/home-page/services.png')} alt="phone" width="80" height="80" />
                                <div className="contact-text ml-2">
                                    <h4 className="text-dark text-capitalize font-weight-normal">Phone</h4>
                                    <ul className="contact-list list-unstyled">
                                        <li>+84 123456789</li>
                                        <li>+84 123456789</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="contact-item d-flex pt-4 pl-3 pb-4 pr-3">
                                <img src={normalizeImgPath('image/home-page/services.png')} alt="email" width="80" height="80" />
                                <div className="contact-text ml-2">
                                    <h4 className="text-dark text-capitalize font-weight-normal">Email</h4>
                                    <ul className="contact-list list-unstyled">
                                        <li>truongnpt1998@gmail.com</li>
                                        <li>truongnp@fabatechnology.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="contact-item d-flex pt-4 pl-3 pb-4 pr-3">
                                <img src={normalizeImgPath('image/home-page/services.png')} alt="address" width="80" height="80" />
                                <div className="contact-text ml-2">
                                    <h4 className="text-dark text-capitalize font-weight-normal">Address</h4>
                                    <ul className="contact-list list-unstyled">
                                        <li>186 dang Van Ngu, Q. Phu Nhuan, TP Ho Chi Minh</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Contact;
