import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['Metallica', 'Megadeth', 'Slayer'];
    const [categories, setCategories] = useState(['Metallica']);

    // const handleAdd = () =>{
    //     // setCategories( [...categories, 'Black Out'] ); //una forma
    // setCategories( cats =>[...cats, 'Black Out'] );
    // }

    // console.log(categories);

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            {/* <button onClick= { handleAdd }>Agregar</button> */}

            <ol>
                {
                    categories.map( category => (
                        // return <li key={ category }> {category} </li>
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                     ) )
                }
            </ol>
        </>
    );

}

export default GifExpertApp;