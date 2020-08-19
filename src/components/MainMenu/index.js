import React from 'react';
import { menus } from '../../static/data/menu';
import ItemMainMenu from '../ItemMainMenu';

function MainMenu(props) {
    const mainMenu = menus.mainMenu;
    // const [currentPage, setCurrentPage] = useState('Home');

    // const onClickItemMainMenu = (name) => {
      
    //     setCurrentPage(name)
    // }

    return (
            <div className="ml-lg-auto">
                <div className={ `navbar-collapse ${ props.isActive === true ? 'show' : '' }` } id="main-menu">
                    <button onClick={ props.handleClickCloseMenu } type="button" id="btn-close-menu" class="close d-lg-none d-block text-light" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <ul className="navbar-nav">
                        {
                            mainMenu.map(item => (
                               <ItemMainMenu path={`/${item.slug}`} to={ item.slug } name={ item.name } activeOnlyWhenExact={true}/>
                            ))
                        }
                    </ul>
                </div>
                <div onClick={ props.handleClickCloseMenu } className="bg-overlay"></div>
            </div>
    )
        
        
}

export default MainMenu;