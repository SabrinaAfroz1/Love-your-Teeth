import React, { useState } from 'react';
import auth from "../../../firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';
import "../../Login/Login.css";


const CheckOut = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const handleNameBlur = event => {
        setEmail(event.target.value);
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }
    const handlePhoneNumberBlur = event => {
        setPhoneNumber(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
    }


    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'> Check Out Information </h1>
                <form onSubmit={handleCreateUser} action="">
                    <div className="input-group">

                        <input onBlur={handleNameBlur} type="text" placeholder="Name" name="Name" id="" required />
                    </div>

                    <div className="input-group">

                        <input value={user?.email} readOnly type="email" placeholder="Email" name="email" id="" required />
                    </div>


                    <div className="input-group">
                        <input onBlur={handleAddressBlur} type="text" name="Address" placeholder="Address" id="" required />
                    </div>

                    <div className="input-group">
                        <input onBlur={handlePhoneNumberBlur} type="text" placeholder="Phone Number" name="Phone-number" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>

                    <button onClick={async () => {
                        alert('Sent email');
                    }}
                        className='form-submit' type="submit" >Check Out </button>
                </form>
            </div>

        </div>
    );
};

export default CheckOut;