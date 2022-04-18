import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setService(data));

    }, [])

    return (
        <div>
            <h2> Services :</h2>
            {
                services.map(service => <Service
                    service={service}
                    key={service.id}
                ></Service>)
            }
        </div>
    );
};

export default Services;