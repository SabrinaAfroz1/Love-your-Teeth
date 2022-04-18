import React from 'react';
import './Service.css';
import { useNavigate } from 'react-router-dom';
const Service = (props) => {
    const { id, name, img, price, description } = props.service;

    const navigate = useNavigate();

    return (
        <div className='service shadow p-3 mb-5 bg-body rounded'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}$</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigate('/checkout')} className='btn btn-primary'>Check Out</button>
        </div>
    );
};

export default Service;