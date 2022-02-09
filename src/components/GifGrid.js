import React from 'react';
import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import useFetchGifs from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category }) => {

    // const [count, setcount] = useState(0);
    // const [images, setImages] = useState([]);

    const { data:images, loading } = useFetchGifs( category );

    // useEffect( ()=> {
    //     getGifs( category )
    //         .then( imgs => setImages( imgs ) );
    // }, [ category ] )

    // const getGifs = async() => {

    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=dhpglynmSn1TgvH1IJIEk2HFX9WwcV4l`;
    //     const resp = await fetch( url );
    //     const { data } = await resp.json();

    //     const gifs = data.map( img => {
         
    //         return{
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }

    //     });

    //     console.log( gifs );
    //     setImages( gifs );

    // }
    //Todo el código anterior se transfirió a helpers

    
    // getGifs();

    // console.log(images);
    return (
        <>
        <h3 className="animate__animated animate__fadeIn"> {category} </h3>

        { loading && <p className="animate__animated animate__flash">Loading</p>  }

        <div className="card-grid">
            
            {/* <h3> { count } </h3>
            <button onClick={ ()=> setcount( count + 1 ) }></button> */}
            {/* <ol>
               {
                //    images.map( image=>{
                //        return <li key={ image.id }> { image.title } </li>
                //    })
                //También se puede desestructurar de las siguiente forma
                images.map( ({id, title}) =>(
                    <li key={ id }> { title } </li>
                ) )
               }
            </ol> */} 
            {
                images.map( img =>(
                    <GifGridItem 
                        key={ img.id }
                        // img={ img } 
                        {...img}
                    />
                ) )
            }

        </div>
        </>
    )
}
