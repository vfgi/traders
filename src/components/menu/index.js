import React from 'react';
import history from '../../assets/utils/history';

import './index.css';
import LogoMenu from '../../assets/img/logo-tc.png'


const SideMenu = ( ) => {
    return (
        <div className='sideMenu'>
            <img src={LogoMenu} alt="logo" className="logo" onClick={() => history.push('/')} />
        </div>
    );
}


export default SideMenu