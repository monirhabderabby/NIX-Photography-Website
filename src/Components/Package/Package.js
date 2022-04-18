import React from 'react';
import './package.css'
import { Link } from 'react-router-dom';

const Package = ({perPackage, checkOut}) => {
    const {Id, Img, Title, Description, Photographer, Event_Duration, Print, Price} = perPackage;
    console.log(perPackage);
    return (
        <div className='col-lg-4'>
            <div className='card'>
                        <img src={Img} alt="" />
                        <h3>{Title}</h3>
                        <hr />
                        <div className='package-content'>
                            <p>{Photographer}</p>
                            <p>Event Duration: {Event_Duration}</p>
                            <p>Special Photo: 100PCS</p>
                            <p>Print: {Print}</p>
                            <p><small>{Description}</small></p>
                            <p>${Price}</p>
                        </div>
                        <Link to={'/checkout'} className="pckg-btn" onClick={()=> checkOut(perPackage)}>Buy Now</Link>
                    </div>
        </div>
    );
};

export default Package;