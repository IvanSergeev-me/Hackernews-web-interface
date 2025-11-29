import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';


const NavSection: React.FunctionComponent = () => {
    return (
        <nav className={style.header_container__nav_section}>
            <NavLink to="/welcome">About</NavLink>
            <NavLink to="/top-stories">Top Stories</NavLink>
            <NavLink to="/favorite">Favorite</NavLink>
        </nav>

    );
}

export default NavSection;