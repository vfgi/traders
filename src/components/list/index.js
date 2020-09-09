import React from 'react';
import history from '../../assets/utils/history';

import currency from '../../assets/utils/currency'
import mileageFormat from '../../assets/utils/mileageMask'

import './index.css'


const List = ({Title, Price, Model, Brand, MileAge, Year, id}) => {


    console.log(id)
    return (
        <div className='listContent' onClick={() => history.push('/details', + id)}>
            <span>{Title}</span>
            <span className='left'>{currency(Price)}</span>
            <p>{Model} &#8226; {Brand} &#8226; {mileageFormat(MileAge)} KM</p>
            <p className='left'>{Year}</p>
        </div>
    );
}


export default List