import React, { useState } from 'react';
import '../Login/Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] =
        useCreateUserWithEmailAndPassword(auth);


    if (user) {
        navigate('/');
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('did not match');
            return;
        }
        if (password.length < 6) {
            setError('password must be longer than 6 character')
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'> Register Form</h1>
                <form onSubmit={handleCreateUser} action="">
                    <div className="input-group">
                        <input onBlur={handleEmailBlur} type="email" name="email" placeholder="Email"
                            id="" required />
                    </div>
                    <div className="input-group">
                        <input onBlur={handlePasswordBlur} type="password" name="password" placeholder="Password" id="" required />
                    </div>
                    <div className="input-group">
                        <input onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm Password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p className='link-bar'>
                    Already have an account? <Link className='form-link' to='/login'>Login</Link>
                </p>
                <div className='bar-line'>
                    <div className='bar'>

                    </div>

                    <div className='bar-word'>
                        OR
                    </div>


                    <div className='bar'>

                    </div>
                </div>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default Register;