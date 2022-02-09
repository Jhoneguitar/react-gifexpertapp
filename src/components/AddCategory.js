import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');//si no pongo el string vacio, el estado queda undefined y muestra un error en consola

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
        
    }

    const handleSubmit = (e) =>{

        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( cats =>[inputValue, ...cats] );
            setInputValue('');
        }

        // console.log('Submit hecho');
        // setCategories
        

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}