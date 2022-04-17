import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Packages.css'
import Package from '../Package/Package';

const Packages = ({checkOut}) => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://monirhabderabby.github.io/Nix-packages/Nix-Package_update.json')
        .then(res => res.json())
        .then(data => {
            setPackages(data)
        })
    }, [])
    return (
        <div className='packages-container'>
            <Navbar></Navbar>
            <div>
            <h1 className='text-center'>Packages</h1>
            
            <div className='row'>
                {
                    packages.slice(0,3).map(perPackage => <Package perPackage={perPackage} checkOut={checkOut} key={perPackage.Id}></Package>)
                }
            </div>
            </div>
            
        </div>
    );
};

export default Packages;