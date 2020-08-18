import React from 'react';
import './Input.css'

const Input = ({attribute,handleChangue, param}) => {
    
    return(
            <div>
                <input
                id={attribute.id}
                name={attribute.name}
                placeholder={attribute.placeholder}
                type={attribute.type}
                onChange={(e) => handleChangue(e.target.name, e.target.value)}
                className='regular-style'   
                param={param}             
                />
            </div>
    )

}

export default Input;