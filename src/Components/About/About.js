import React from 'react';
import Navbar from '../Navbar/Navbar';
import profile from '../Assets/profile.jpeg'
import './About.css'

const About = () => {
    return (
        <div className='about-container'>
            <Navbar></Navbar>
            <div className='profile-container'>
                <div className="row container">
                    <div className="col-lg-6">
                        <div className='content'>
                            <div>
                                <h3>Monir Hossain Rabby</h3>
                                <p>I am Monir Hossain abde Rabby. I am completing Web Development course from Programming Hero with Jhankar Mahbub for being a Junior Web Developer. I learned html, css, js. I learned two css framework named Bootsstrap, tailwind but I feel comfortable with bootstrap. I learned react js for js library. I am struggling for last step of this course. My next goal is doing a job in a company. I am ready for struggling for achive my goal. But I never give up.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='profile-img'>
                        <img className='img-fluid' src={profile} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;