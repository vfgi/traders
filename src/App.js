import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import './assets/styles/Shared.css';

import Routes from './routes'

import SideMenu from './components/menu'
import SearchBar from './components/searchBar'
import Car from './assets/img/car-wireframe.png'

function App (){
    return (
        <BrowserRouter>
            <SearchBar />
            <SideMenu />
            <div className="content">
                <div className='page'>
                    <Routes />
                </div>
            </div>
            <img src={Car} alt="car" className="background"/>
        </BrowserRouter>
    );
}

export default App
