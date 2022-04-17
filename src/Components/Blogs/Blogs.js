import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <Navbar></Navbar>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-6">
                        <h1>Difference between Authentication and Authorization?</h1>
                    </div>
                    <div className="col-lg-6">
                        <h1>Why we are you using firebase? What other options do you have to implement authentication?</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;