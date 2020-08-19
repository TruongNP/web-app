import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { smoothScroll } from '../../utils/smoothScroll';
import { menus } from '../../static/data/menu';

function RightHomeMenu(props) {
    const rightHomeMenu = menus.rightHomeMenu;
    const [currentSection, setcurrentSection] = useState('Home');
    const currentPage = props.currentPage;

    const onClickItemMenu = (name) => {
        const section = document.getElementById(name.toLowerCase());
        smoothScroll(section);
        setcurrentSection(name);
    };
    
    return (
            <div className={ `ml-lg-auto ${ currentPage === 'home' ? '' : 'd-none'  }` }>
                <div className="navbar-collapse" id="right-home-menu">
                    <button type="button" id="btn-close-right-home-menu" class="close text-light d-flex align-items-center bg-danger rounded-left h-25 p-1" aria-label="Close">
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                    <ul className="navbar-nav rounded-left">
                        {
                            rightHomeMenu.map(item => (
                                <li className="nav-item">
                                    <Link to="" onClick={() => onClickItemMenu(item.name) } id={item.id} className={`nav-link text-capitalize text-center font-weight-normal ${item.name === currentSection ? 'active' : ''}`} >{item.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
    )
        
        
}

export default RightHomeMenu;