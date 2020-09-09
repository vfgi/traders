import React from 'react';

import './index.css'

const Button = ({Value, onClick, ClassName, type}) => {

    return (
        <button className={ClassName} onClick={onClick} type={type}>{Value}</button>
    );
}

export default Button
