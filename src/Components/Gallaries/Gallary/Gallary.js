import React from 'react';
import './Gallary.css'

const Gallary = ({image}) => {
    console.log(image);
    return (
        <div className='col-lg-4'>
            <img className='img' src={image.img} alt="" />
        </div>
    );
};

export default Gallary;