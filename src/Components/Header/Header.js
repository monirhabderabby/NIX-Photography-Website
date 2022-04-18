import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Packages from '../Packages/Packages';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header'>
            <Navbar></Navbar>
            <Banner></Banner>
            </div>
            <Packages></Packages>
            <Footer></Footer>
        </div>
    );
};

export default Header;