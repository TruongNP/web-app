import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";

function ItemMainMenu(props) {
    let match = useRouteMatch({
        path: props.path,
        exact: props.activeOnlyWhenExact
      });

    return (
       <li className="nav-item">
            <Link to={`/${props.to}`} className={`nav-link text-white text-uppercase font-weight-normal ${ match ? 'active' : ''}`} >{props.name}</Link>
       </li>
    )
        
        
}

export default ItemMainMenu;