import React from 'react';

import './index.css';
import LogoMenu from '../../assets/img/logo-tc.png'


const SideMenu = ( ) => {
    return (
        <div className='sideMenu'>
            <img src={LogoMenu} alt="logo" className="logo"/>
        </div>
    );
}


export default SideMenu