import React from 'react';
import style from './Header.module.scss';
import ChangeTheme from '../../Features/ChangeTheme/ChangeTheme';

 
const UserSection: React.FunctionComponent= () => {
    return (
        <div className={style.header_container__user_section}>
            <ChangeTheme />
        </div>
        
     );
}
 
export default UserSection;