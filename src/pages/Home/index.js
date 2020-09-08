import React, {useState} from 'react';

import './index.css'
import Car from '../../assets/img/car-wireframe.png'

import Banner from '../../components/banner'

const Home = () => {
    const [inputValue, setInputValue] = useState('')
    const [begin, setBegin] = useState(true)

    return (
        <div className="content">
            <div className='searchBar'>
                <input 
                    type="text" 
                    id="search" 
                    name="search" 
                    placeholder="Pesquise por um veículo" 
                    onChange={(e) => {
                        setInputValue(e.target.value)
                        setBegin(!e.target.value)
                        }
                    }
                />
                <button>Cadastrar</button>
            </div>
            <div className='page'>
                <img src={Car} alt="car" className="car"/>
                {begin ? <Banner/> : null}
            </div>
        </div>
    );
}

export default Home
