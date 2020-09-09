import React, { useState, useEffect} from 'react';
import axios from 'axios';

import './index.css'

import List from '../../components/list'

const CarList = (params) => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        async function Cars(){
            const res = await axios.get('http://localhost:3000/cars' + params.location.search)
            setCars(res.data)
        }
        Cars()
    }, [params])

    return (
        <div className='container'>
            {cars.map(cars => 
               <List 
                    Title={cars.title} 
                    Price={cars.price} 
                    Model={cars.model}
                    Brand={cars.brand}
                    MileAge={cars.km}
                    Year={cars.year}
                    id={cars.id}
                />
            )}
        </div>
    );
}

export default CarList
