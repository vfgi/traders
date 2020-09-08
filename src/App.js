import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import './assets/styles/Shared.css';

import Routes from './routes'

import SideMenu from './components/menu'

function App (){
    return (
        <BrowserRouter>
            <SideMenu />
            <Routes className="page"/>
        </BrowserRouter>
    );
}

export default App
