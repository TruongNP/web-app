import React from 'react';
import { services } from "../../../static/data/services";


function Services() {
    const servicesList = services.list;

    return (
        <section id="services" className="section mt-5 pt-5">
            <div className="services container">
            <div className="row">
                <div className="col-12 d-flex align-items-center just-content-center">
                    <div className="service-content">
                        <h1 className="text-dark text-uppercase text-center font-weight-normal">{ services.title }</h1>
                        <p className="w-50 m-auto text-muted text-center">{ services.content }</p>
                        <div className="service-list mt-5">
                            {
                                servicesList.map(item => (
                                    <div className="service-item">
                                        <div className="service-icon"><img src={ `/image/${ item.image }` }/></div>
                                        <h3 className="service-title ">{ item.title }</h3>
                                        <p className="service-except">{ item.except }</p>
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

export default Services;
