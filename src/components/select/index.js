import React, { useState, useEffect } from 'react';

import './index.css'

const Select = ({options, onChange, defaultValue, required}) => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        setBrands(options)
    }, [options])

    return (
        <select name="brands" id="brands" onChange={onChange} required={required}>
            <option selected="selected" disabled hidden value='marca'>Marca</option>
            {brands.length ? brands.map(brand => <option key={brand.id} value={brand.name} selected={defaultValue === brand.name}>{brand.name}</option>) : null}
        </select>
    )
}

export default Select