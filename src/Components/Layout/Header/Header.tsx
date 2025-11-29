import React from 'react';
import NavSection from './NavSection';
import Logo from './Logo';
import UserSection from './UserSection';
import style from './Header.module.scss';

 
const Header: React.FunctionComponent= () => {
    return ( 
        <header className={style.header_container}>
            <NavSection />
            <Logo />
            <UserSection />
        </header>
     );
}
 
export default Header;