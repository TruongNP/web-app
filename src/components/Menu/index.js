import React from 'react';
import menu from '../../static/data/menu';

function MainMenu(props) {

    function handleClickMenu(e) {
        const currentClass = document.getElementsByClassName('nav-link');
        for (let i = 0; i < currentClass.length; i++) {
            currentClass[i].classList.remove("active");
        }
        e.target.classList.add("active");
    };
    
    return (
        <div>
            <div className={ `navbar-collapse ${ props.isActive === true ? 'show' : '' }` } id="main-menu">
                <button onClick={ props.handleClickCloseMenu } type="button" id="btn-close-menu" class="close text-light" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <ul className="navbar-nav ml-auto">
                    {
                        menu.map(item => (
                            <li className="nav-item">
                                <a onClick={ handleClickMenu } id={item.id} className={`nav-link text-white text-uppercase font-weight-normal ${item.id === 1 ? 'active' : ''}`} href={`/#${item.slug}`}>{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div onClick={ props.handleClickCloseMenu } className="bg-overlay"></div>
        </div>
    )
        
        
}

export default MainMenu;