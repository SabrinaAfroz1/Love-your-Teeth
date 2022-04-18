import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css";

const Services = () => {

    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setService(data));

    }, [])

    return (


        <div className='container'>
            <div className="row">
                <h1 className='text-primary fs-1 mb-5 text-center mt-5 fw-bolder'> LOOK AT A GLANCE </h1>
                <div className="services-container">
                    {
                        services.map(service => <Service
                            service={service}
                            key={service.id}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;