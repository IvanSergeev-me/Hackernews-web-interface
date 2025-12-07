import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';
import { RouteNames } from '../../Router/routes';


const NavSection: React.FunctionComponent = () => {
    return (
        <nav className={style.header_container__nav_section}>
            <NavLink to={RouteNames.HOME}>About</NavLink>
            <NavLink to={RouteNames.TOPSTORIES}>Top Stories</NavLink>
            <NavLink to={RouteNames.FAVORITES}>Favorite</NavLink>
        </nav>

    );
}

export default NavSection;