import React, { useEffect, useState } from 'react';
import Gallary from './Gallary/Gallary';

const Gallaries = () => {
    const [images, setImages]= useState([]);

    useEffect(()=>{
        fetch('https://monirhabderabby.github.io/gallary/Weeding_Galary.json')
        .then(res=> res.json())
        .then(data=> setImages(data))
    }, [])
    return (
        <div>
            <div className='row g-4 mt-3'>

            {
                images.map(image=> <Gallary image={image} key={images.id}></Gallary>)
            }
            </div>
        </div>
    );
};

export default Gallaries;