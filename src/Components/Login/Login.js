import React from 'react';
import Navbar from '../Navbar/Navbar';
import google from '../Assets/google.svg'
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login-container'>
            <Navbar></Navbar>
            <div className="login-form">
                <form className='form'>
                    <h1>Login</h1>
                    <div className='input-field'>
                        <input type="email" name="email" placeholder='Email' required/>
                    </div>
                    <div className='input-field'>
                        <input type="password" name="password" placeholder='Password' required/>
                    </div>
                    <small className='reset-btn'>Reset Password</small> <br />
                    <input type="submit" value="LOGIN" className='login-btn'/>
                    <p>I am new? <Link to="/signup" className='signup-btn'>Create an Account</Link></p>

                    <p className='or'>------ or ------</p>
                    
                    <div className='input-field'>
                        <button className='google-btn'>
                            <img src={google} className="icon" alt='icon'></img>
                            Continue with Google</button>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default Login;