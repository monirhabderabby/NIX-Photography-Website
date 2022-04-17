import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import google from '../Assets/google.svg'

const SignUp = () => {
    return (
        <div className='login-container'>
            <Navbar></Navbar>
            <div className="login-form">
                <form className='form'>
                    <h1>SignUp</h1>
                    <div className='input-field'>
                        <input type="email" name="email" placeholder='Email' required/>
                    </div>
                    <div className='input-field'>
                        <input type="password" name="password" placeholder='Password' required/>
                    </div>
                    <input type="submit" value="LOGIN" className='login-btn'/>
                    <p>Already have an account? <Link to="/login" className='signup-btn'>Login</Link></p>
                    <p className='or'>------ or ------</p>
                    
                    <div className='input-field'>
                        <button className='google-btn'>
                            <img src={google} className="icon"></img>
                            Continue with Google</button>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default SignUp;