import React from 'react';

import Button from '../../components/button'
import Input from '../../components/input'

import history from '../../assets/utils/history';


import './index.css'

const SearchBar = () => {

    const changeList = (search) =>  history.push('/list?q=' + search);

    return (
        <div className='searchBar'>
            <Input Placeholder='Pesquise por um veículo' ClassName='top' onChange={(e) => changeList(e.target.value)}/>
            <Button Value='Cadastrar' onClick={() => history.push('/details')}/>
        </div>
    );
}

export default SearchBar
