import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import google from '../Assets/google.svg'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [customError, setError] = useState('');
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPass] = useCreateUserWithEmailAndPassword(auth);
    if(loading){
        return <Loading></Loading>
    }

    const handleEmail = e =>{
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleForm = e =>{
        e.preventDefault()
    }
    const handlesignInWithGoogle = () => {
        if(loading){
            return <Loading></Loading>
        }
        signInWithGoogle();
    }
    const createUser = () =>{
        createUserWithEmailAndPass(email, password)
    }

    return (
        <div className='login-container'>
            <Navbar></Navbar>
            <div className="login-form">
                <form className='form' onSubmit={handleForm}>
                    <h1>SignUp</h1>
                    <div className='input-field'>
                        <input onBlur={handleEmail} type="email" name="email" placeholder='Email' required/>
                    </div>
                    <div className='input-field'>
                        <input onBlur={handlePassword} type="password" name="password" placeholder='Password' required/>
                    </div>
                    <input type="submit" value="SIGNUP" className='login-btn' onClick={createUser}/>
                    <p>Already have an account? <Link to="/login" className='signup-btn'>Login</Link></p>
                    <p className='or'>------ or ------</p>
                    
                    <div className='input-field'>
                        <button className='google-btn' onClick={handlesignInWithGoogle}>
                            <img src={google} className="icon" alt='icon'></img>
                            Continue with Google</button>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default SignUp;