import React from 'react';
import style from './Header.module.scss';

 
const Logo: React.FunctionComponent= () => {

    return (
        <div className={style.header_container__logo}>
            <h1 data-text="Hacker news" className={`${style.logo_text} ${style.glitch} ${style.is_glitching}`}>
                Hacker news    
            </h1>
        </div>
        
     );
}
 
export default Logo;