import React from 'react';
import menu from '../../static/data/menu';

function MainMenu() {
    return (
        <div className="collapse navbar-collapse" id="main-menu">
            <ul className="navbar-nav ml-auto">
                {
                    menu.map(item => (
                        <li className="nav-item">
                            <a id={item.id} className={`nav-link text-white text-uppercase font-weight-normal ${item.id === 1 ? 'active' : ''}`} href={`/#${item.slug}`}>{item.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
        
        
}

export default MainMenu;