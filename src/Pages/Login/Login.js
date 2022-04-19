import React, { useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true });
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'> Login Form</h1>
                <form onSubmit={handleUserSignIn} action="">
                    <div className="input-group">
                        <input onBlur={handleEmailBlur} type="email" placeholder="Email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <input onBlur={handlePasswordBlur} type="password" placeholder="Password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>
                        {error?.message}
                    </p>
                    {loading && <p>Loading . . . . </p>}
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='link-bar'>
                    New Here? <Link className='form-link' to='/register'>Create an Account</Link>
                </p>
                <Link to="/login" className=" link-bar form-link" onClick={async () => {
                    await sendPasswordResetEmail(email);
                    alert('Sent email');
                }}>Reset password
                </Link>
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


            </div >


        </div >
    );
};

export default Login;