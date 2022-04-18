import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import google from '../Assets/google.svg'
import './Login.css'
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [customError, setError] = useState('');
    const [signInWithEmailAndPass] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth)

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e =>{
        setPassword(e.target.value)
    }
    const handleConfirmPassword = e =>{
        setConfirmPassword(e.target.value)
    }
    const handleForm = e =>{
        e.preventDefault()
    }

    const handleSignInWithGoogle = () =>{
        signInWithGoogle()
    }
    
    const userLogin = () =>{
        if(password !== confirmPassword){
            alert("Password didn't matched")
        }
        else{
            signInWithEmailAndPass(email, password)
        }
    }
    
    return (
        <div className='login-container'>
            <Navbar></Navbar>
            <div className="login-form">
                <form className='form' onSubmit={handleForm}>
                    <h1>Login</h1>
                    <div className='input-field'>
                        <input onBlur={handleEmail} type="email" name="email" placeholder='Email' required/>
                    </div>
                    <div className='input-field'>
                        <input onBlur={handlePassword} type="password" name="password" placeholder='Password' required/>
                    </div>
                    <div className='input-field'>
                        <input onBlur={handleConfirmPassword} type="password" name="ConfirmPassword" placeholder='ConfirmPassword' required/>
                    </div>
                    <small className='reset-btn'>Reset Password</small> <br />
                    <input onClick={userLogin} type="submit" value="LOGIN" className='login-btn'/>
                    <p>I am new? <Link to="/signup" className='signup-btn'>Create an Account</Link></p>

                    <p className='or'>------ or ------</p>
                    
                    <div className='input-field'>
                        <button className='google-btn' onClick={handleSignInWithGoogle}>
                            <img src={google} className="icon" alt='icon'></img>
                            Continue with Google</button>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default Login;