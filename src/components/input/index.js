import React from 'react';

import './index.css'

const Input = ({Placeholder, ClassName, onChange, value, type, required}) => {
    return (
        <input type={type} placeholder={Placeholder} className={ClassName} onChange={onChange} value={value} required={required}/>
    );
}

export default Input